FROM ghcr.io/hyperledger/cactus-cmd-api-server:2023-12-21-f8f6bcb
RUN npm i -g corepack && corepack enable && corepack prepare yarn@3.6.0 --activate

ENV NODE_ENV=production
ARG NPM_PKG_VERSION=latest

RUN yarn add @hyperledger/cactus-plugin-ledger-connector-iroha@${NPM_PKG_VERSION}