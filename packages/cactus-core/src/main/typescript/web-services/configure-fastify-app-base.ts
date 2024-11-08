import type { FastifyInstance } from "fastify";

import {
  Checks,
  LogLevelDesc,
  LoggerProvider,
} from "@hyperledger/cactus-common";

import { stringifyBigIntReplacer } from "./stringify-big-int-replacer";

export const CACTI_CORE_CONFIGURE_FASTIFY_APP_BASE_MARKER =
  "CACTI_CORE_CONFIGURE_FASTIFY_APP_BASE_MARKER";

/**
 * Interface for the context used in configuring Fastify app base.
 *
 * @see {configureFastifyAppBase}
 */
export interface IConfigureFastifyAppContext {
  readonly logLevel?: LogLevelDesc;
  readonly app: FastifyInstance;
  readonly bodyParserJsonOpts?: {
    limit?: string;
  };
}

/**
 * Configures the base functionalities for a Fastify application.
 *
 * This function is similar to its Express.js counterpart but adapted
 * to the Fastify framework, ensuring proper handling of body parsing
 * and configuration metadata.
 *
 * @param ctx Context object holding the Fastify instance and optional configurations.
 * @throws {Error} If any required context properties are missing or if the app is already configured.
 */
export async function configureFastifyAppBase(
  ctx: IConfigureFastifyAppContext,
): Promise<void> {
  const fn = "configureFastifyAppBase()";
  Checks.truthy(ctx, `${fn} arg1 ctx`);
  Checks.truthy(ctx.app, `${fn} arg1 ctx.app`);

  const logLevel: LogLevelDesc = ctx.logLevel || "WARN";

  const log = LoggerProvider.getOrCreate({
    level: logLevel,
    label: fn,
  });

  log.debug("ENTRY");

  if (ctx.app.hasDecorator(CACTI_CORE_CONFIGURE_FASTIFY_APP_BASE_MARKER)) {
    const duplicateConfigurationAttemptErrorMsg =
      `Already configured this Fastify instance before. Check the ` +
      `decorators of the Fastify instance under the key ` +
      `"CACTI_CORE_CONFIGURE_FASTIFY_APP_BASE_MARKER" to determine if an ` +
      `instance has already been configured.`;
    throw new Error(duplicateConfigurationAttemptErrorMsg);
  }

  const bodyParserJsonOpts = ctx.bodyParserJsonOpts || { limit: "50mb" };
  log.debug("Body-parser middleware opts: %o", bodyParserJsonOpts);

  // Fastify natively supports JSON body parsing; ensure the app respects the limit
  if (bodyParserJsonOpts.limit) {
    ctx.app.addHook("onRequest", async (request, reply) => {
      if (
        request.headers["content-length"] &&
        parseInt(request.headers["content-length"], 10) >
          parseInt(bodyParserJsonOpts.limit || "52428800", 10)
      ) {
        reply.code(413).send({ error: "Payload Too Large" });
      }
    });
  }

  // Add custom replacer for JSON serialization to handle BigInt values
  ctx.app.addHook("onSend", async (request, reply, payload) => {
    const contentType = reply.getHeader("content-type");

    if (
      typeof payload === "string" &&
      typeof contentType === "string" &&
      contentType.includes("application/json")
    ) {
      return JSON.stringify(JSON.parse(payload), stringifyBigIntReplacer);
    }

    return payload;
  });

  // Mark the app as configured
  ctx.app.decorate(CACTI_CORE_CONFIGURE_FASTIFY_APP_BASE_MARKER, true);

  log.debug("EXIT");
}
