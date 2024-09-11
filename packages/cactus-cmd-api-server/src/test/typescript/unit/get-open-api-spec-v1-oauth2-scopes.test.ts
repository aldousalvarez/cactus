import {
  ApiServer,
  ApiServerApiClient,
  ApiServerApiClientConfiguration,
  AuthorizationProtocol,
  ConfigService,
  IAuthorizationConfig,
} from "../../../main/typescript/public-api";
import {
  IJoseFittingJwtParams,
  LogLevelDesc,
} from "@hyperledger/cactus-common";
import { PluginRegistry } from "@hyperledger/cactus-core";
import { Constants } from "@hyperledger/cactus-core-api";
import type { AuthorizeOptions as SocketIoJwtOptions } from "@thream/socketio-jwt";
import type { Params as ExpressJwtOptions } from "express-jwt";
import "jest-extended";
import { SignJWT, exportSPKI, generateKeyPair } from "jose";
import path from "path";
import { v4 as uuidv4 } from "uuid";

interface IExpectedScopes {
  [key: string]: string;
}

describe("cmd-api-server:getOpenApiSpecV1Endpoint", () => {
  const logLevel: LogLevelDesc = "INFO";
  let apiServer: ApiServer;
  let apiClient: ApiServerApiClient;
  let jwtKeyPair: { publicKey: CryptoKey; privateKey: CryptoKey };
  let expressJwtOptions: ExpressJwtOptions & IJoseFittingJwtParams;

  afterAll(async () => await apiServer.shutdown());

  beforeAll(async () => {
    jwtKeyPair = await generateKeyPair("RS256", { modulusLength: 4096 });
    const jwtPublicKey = await exportSPKI(jwtKeyPair.publicKey);

    expressJwtOptions = {
      algorithms: ["RS256"],
      secret: jwtPublicKey,
      audience: uuidv4(),
      issuer: uuidv4(),
    };

    const socketIoJwtOptions: SocketIoJwtOptions = {
      secret: jwtPublicKey,
      algorithms: ["RS256"],
    };
    expect(expressJwtOptions).toBeTruthy();

    const authorizationConfig: IAuthorizationConfig = {
      unprotectedEndpointExemptions: [],
      expressJwtOptions,
      socketIoJwtOptions,
      socketIoPath: Constants.SocketIoConnectionPathV1,
    };

    const pluginsPath = path.join(
      __dirname,
      "../../../../../../", // walk back up to the project root
      ".tmp/test/test-cmd-api-server/get-open-api-spec-v1-endpoint_test/", // the dir path from the root
      uuidv4(), // then a random directory to ensure proper isolation
    );
    const pluginManagerOptionsJson = JSON.stringify({ pluginsPath });

    const pluginRegistry = new PluginRegistry({ logLevel });

    const configService = new ConfigService();

    const apiSrvOpts = await configService.newExampleConfig();
    apiSrvOpts.logLevel = logLevel;
    apiSrvOpts.pluginManagerOptionsJson = pluginManagerOptionsJson;
    apiSrvOpts.authorizationProtocol = AuthorizationProtocol.JSON_WEB_TOKEN;
    apiSrvOpts.authorizationConfigJson = authorizationConfig;
    apiSrvOpts.configFile = "";
    apiSrvOpts.apiCorsDomainCsv = "*";
    apiSrvOpts.apiPort = 0;
    apiSrvOpts.cockpitPort = 0;
    apiSrvOpts.grpcPort = 0;
    apiSrvOpts.crpcPort = 0;
    apiSrvOpts.apiTlsEnabled = false;
    apiSrvOpts.grpcMtlsEnabled = false;
    apiSrvOpts.plugins = [];

    const config = await configService.newExampleConfigConvict(apiSrvOpts);

    apiServer = new ApiServer({
      config: config.getProperties(),
      pluginRegistry,
    });

    apiServer.initPluginRegistry({ pluginRegistry });
    const startResponsePromise = apiServer.start();
    await expect(startResponsePromise).toResolve();
    const startResponse = await startResponsePromise;
    expect(startResponse).toBeTruthy();

    const { addressInfoApi } = await startResponsePromise;
    const protocol = apiSrvOpts.apiTlsEnabled ? "https" : "http";
    const { address, port } = addressInfoApi;
    const apiHost = `${protocol}://${address}:${port}`;

    const jwtPayload = { name: "Peter", location: "Albertirsa" };
    const validJwt = await new SignJWT(jwtPayload)
      .setProtectedHeader({ alg: "RS256" })
      .setIssuer(expressJwtOptions.issuer)
      .setAudience(expressJwtOptions.audience)
      .sign(jwtKeyPair.privateKey);
    expect(validJwt).toBeTruthy();

    const validBearerToken = `Bearer ${validJwt}`;
    expect(validBearerToken).toBeTruthy();

    apiClient = new ApiServerApiClient(
      new ApiServerApiClientConfiguration({
        basePath: apiHost,
        baseOptions: { headers: { Authorization: validBearerToken } },
        logLevel,
      }),
    );
  });

  it("HTTP - returns the OpenAPI spec .json document of the API server itself", async () => {
    const res1Promise = apiClient.getOpenApiSpecV1();
    await expect(res1Promise).resolves.toHaveProperty("data.openapi");
    const res1 = await res1Promise;
    expect(res1.status).toEqual(200);
    expect(res1.data).toBeTruthy();

    console.log("Response data type:", typeof res1.data);
    console.log("Response data:", res1.data);

    let openApiSpec;
    try {
      openApiSpec =
        typeof res1.data === "string" ? JSON.parse(res1.data) : res1.data;
    } catch (error) {
      throw new Error(`Failed to parse OpenAPI spec: ${error.message}`);
    }

    expect(openApiSpec).toHaveProperty("components");
    expect(openApiSpec.components).toHaveProperty("securitySchemes");

    const securitySchemes = openApiSpec.components.securitySchemes;
    expect(securitySchemes).toBeObject();

    const expectedScopes: IExpectedScopes = {
      "read:health": "Read health information",
      "read:metrics": "Read metrics information",
      "read:spec": "Read OpenAPI specification",
    };

    const securitySchemeNames = Object.keys(securitySchemes);

    securitySchemeNames.forEach((schemeName) => {
      const scheme = securitySchemes[schemeName];
      expect(scheme).toHaveProperty("flows");
      const flows = scheme.flows;
      expect(flows).toHaveProperty("authorizationCode");
      const scopes = flows.authorizationCode.scopes as IExpectedScopes;

      Object.keys(expectedScopes).forEach((scope) => {
        expect(scopes).toHaveProperty(scope);
        expect(scopes[scope]).toEqual(expectedScopes[scope]);
      });
    });
  });

  it("HTTP - allows request execution with a valid JWT Token", async () => {
    const jwtPayload = { scope: "read:spec" };
    const validJwt = await new SignJWT(jwtPayload)
      .setProtectedHeader({ alg: "RS256" })
      .setIssuer(expressJwtOptions.issuer)
      .setAudience(expressJwtOptions.audience)
      .sign(jwtKeyPair.privateKey);

    const validBearerToken = `Bearer ${validJwt}`;
    expect(validBearerToken).toBeTruthy();

    const res3Promise = apiClient.getOpenApiSpecV1({
      headers: { Authorization: validBearerToken },
    });

    await expect(res3Promise).resolves.toHaveProperty("data.openapi");
    const res3 = await res3Promise;
    expect(res3.status).toEqual(200);
    expect(res3.data).toBeTruthy();
  });

  it("HTTP - rejects request with an invalid JWT", async () => {
    const { privateKey: otherPrivateKey } = await generateKeyPair("RS256");
    const invalidJwt = await new SignJWT({ scope: "invalid:scope" })
      .setProtectedHeader({ alg: "RS256" })
      .setIssuer("invalid-issuer")
      .setAudience("invalid-audience")
      .sign(otherPrivateKey);

    const invalidBearerToken = `Bearer ${invalidJwt}`;
    expect(invalidBearerToken).toBeTruthy();

    const res3Promise = apiClient.getOpenApiSpecV1({
      headers: { Authorization: invalidBearerToken },
    });
    await expect(res3Promise).rejects.toThrow(
      "Request failed with status code 401",
    );
  });
});
