window.BENCHMARK_DATA = {
  "lastUpdate": 1712642324569,
  "repoUrl": "https://github.com/aldousalvarez/cactus",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "michal.bajer@fujitsu.com",
            "name": "Michal Bajer",
            "username": "outSH"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "fa27fde9a28f83ff29964693be656dc107046517",
          "message": "feat(cactus-plugin-ledger-connector-iroha): remove deprecated iroha connector\n\n- Iroha connector is broken for some time and it's SDK does't seem to be\n    actively supported anymore (in regards of bug or security fixes).\n\nCloses: #3159\nPart of: #3155\n\nSigned-off-by: Michal Bajer <michal.bajer@fujitsu.com>",
          "timestamp": "2024-04-01T15:13:07-07:00",
          "tree_id": "179f468f39a57de520043dac3f6866ce0b0e1dd2",
          "url": "https://github.com/aldousalvarez/cactus/commit/fa27fde9a28f83ff29964693be656dc107046517"
        },
        "date": 1712037603209,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 538,
            "range": "±1.72%",
            "unit": "ops/sec",
            "extra": "174 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 322,
            "range": "±1.59%",
            "unit": "ops/sec",
            "extra": "177 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "d2dbcb06d231eb3b6b70c3ba3e6f704414ed7bf8",
          "message": "build(connector-iroha2): upgrade undici to v5.28.4\n\nBumps [undici](https://github.com/nodejs/undici) from 5.28.3 to 5.28.4.\n- [Release notes](https://github.com/nodejs/undici/releases)\n- [Commits](https://github.com/nodejs/undici/compare/v5.28.3...v5.28.4)\n\n---\nupdated-dependencies:\n- dependency-name: undici\n  dependency-type: direct:production\n...\n\nCo-authored-by: Peter Somogyvari <peter.somogyvari@accenture.com>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-04-04T10:34:45-07:00",
          "tree_id": "77c4ae7e184d6ba7656b8234a5dd7056ace0474e",
          "url": "https://github.com/aldousalvarez/cactus/commit/d2dbcb06d231eb3b6b70c3ba3e6f704414ed7bf8"
        },
        "date": 1712303302575,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 586,
            "range": "±1.55%",
            "unit": "ops/sec",
            "extra": "178 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 365,
            "range": "±1.19%",
            "unit": "ops/sec",
            "extra": "181 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "peter.somogyvari@accenture.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "383f8528d88989b44c9763fc883c3d9ac74da21e",
          "message": "feat(core): add configureExpressAppBase() utility function\n\n1. The idea here is to re-use the common basic tasks of configuring an\nexpress instance similar to how the API server does it but without having\nthe chicken-egg problem of circular dependencies between the API server\nand the plugins.\n2. More detailed discussion can be seen in this other pull request in\nthe comments: https://github.com/hyperledger/cacti/pull/3169\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-04-08T22:11:33-07:00",
          "tree_id": "7d7999e1129c7c36443db1c4f6dbd7f408183ca3",
          "url": "https://github.com/aldousalvarez/cactus/commit/383f8528d88989b44c9763fc883c3d9ac74da21e"
        },
        "date": 1712642323131,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 571,
            "range": "±1.69%",
            "unit": "ops/sec",
            "extra": "178 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 358,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "181 samples"
          }
        ]
      }
    ]
  }
}