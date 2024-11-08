import fastifyAuthz from "fastify-jwt-authz";
import { FastifyInstance } from "fastify";

import { IWebServiceEndpointFastify } from "@hyperledger/cactus-core-api";

import { createRuntimeErrorWithCause } from "@hyperledger/cactus-common";

/**
 * Hooks up an endpoint instance to a Fastify web app object.
 *
 * @param fastifyApp The Fastify application object that `endpoint` will be registered with.
 * @param endpoint The `IWebServiceEndpoint` instance that will be registered.
 */
export async function registerWebServiceEndpoint(
  fastifyApp: FastifyInstance,
  endpoint: IWebServiceEndpointFastify,
): Promise<void> {
  const fnTag = "registerWebServiceEndpoint";
  const httpVerb = endpoint.getVerbLowerCase(); // e.g., "get", "post"
  const httpPath = endpoint.getPath();
  const requestHandler = endpoint.getFastifyHandler();

  const provider = endpoint.getAuthorizationOptionsProvider();
  const { isProtected, requiredRoles } = await provider.get();

  try {
    if (isProtected) {
      const opts = {
        roles: requiredRoles,
        key: "scope",
        userProperty: "auth",
        checkAllScopes: true,
        failWithError: true,
      };

      // Middleware for scope check
      fastifyApp.route({
        method: httpVerb.toUpperCase(),
        url: httpPath,
        preHandler: fastifyAuthz(opts),
        handler: requestHandler,
      });
    } else {
      // Register endpoint without middleware
      fastifyApp.route({
        method: httpVerb.toUpperCase(),
        url: httpPath,
        handler: requestHandler,
      });
    }
  } catch (ex: unknown) {
    const errorMessage = `${fnTag} Fastify verb method ${httpVerb} threw while registering endpoint on path ${httpPath}`;
    throw createRuntimeErrorWithCause(errorMessage, ex);
  }
}
