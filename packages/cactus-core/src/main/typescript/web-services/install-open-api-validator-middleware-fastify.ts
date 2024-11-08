import { FastifyInstance } from "fastify";
import * as OpenApiValidator from "express-openapi-validator";
import { OpenAPIV3 } from "express-openapi-validator/dist/framework/types";

import {
  LoggerProvider,
  LogLevelDesc,
  Checks,
} from "@hyperledger/cactus-common";

export interface IInstallOpenapiValidationMiddlewareRequest {
  readonly logLevel: LogLevelDesc;
  readonly app: FastifyInstance;
  readonly apiSpec: unknown;
}

export async function installOpenapiValidationMiddleware(
  req: IInstallOpenapiValidationMiddlewareRequest,
): Promise<void> {
  const fnTag = "installOpenapiValidationMiddleware";
  Checks.truthy(req, `${fnTag} req`);
  Checks.truthy(req.apiSpec, `${fnTag} req.apiSpec`);
  Checks.truthy(req.app, `${fnTag} req.app`);

  const { app, apiSpec, logLevel } = req;
  const log = LoggerProvider.getOrCreate({
    label: fnTag,
    level: logLevel || "INFO",
  });

  log.debug(`Installing validation for OpenAPI specs: `, apiSpec);

  const paths = Object.keys((apiSpec as any).paths);
  log.debug(`Paths to be ignored: `, paths);

  // Generate middleware array from OpenAPI Validator
  const middlewares = OpenApiValidator.middleware({
    apiSpec: apiSpec as OpenAPIV3.Document,
    validateApiSpec: false,
    $refParser: { mode: "dereference" },
    ignorePaths: (path: string) => !paths.includes(path),
  });

  // Register each middleware sequentially in Fastify
  app.addHook("onRequest", async (request, reply) => {
    for (const middleware of middlewares) {
      await new Promise<void>((resolve, reject) => {
        middleware(request.raw as any, reply.raw as any, (err?: unknown) =>
          err ? reject(err) : resolve(),
        );
      });
    }
  });

  app.setErrorHandler(async (err, request, reply) => {
    const tag = "[fastify-openapi-validator-error-handler]";
    log.error("%s Caught error - %o", tag, err);
    reply.status(500).send({
      error: "Internal Server Error",
      details: err,
    });
  });
}
