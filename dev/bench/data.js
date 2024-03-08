window.BENCHMARK_DATA = {
  "lastUpdate": 1709887067579,
  "repoUrl": "https://github.com/aldousalvarez/cactus",
  "entries": {
    "Benchmark": [
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
          "id": "0804bab4c9b43f2e22be6d77be127415a9a0532f",
          "message": "perf(cmd-api-server): add demonstration of continuous benchmarking\n\nPrimary change:\n---------------\n\nThis is the ice-breaker for some work that got stuck related to this issue:\nhttps://github.com/hyperledger/cacti/issues/2672\n\nThe used benchamking library (benchmark.js) is old but solid and has\nalmost no dependencies which means that we'll be in the clear longer term\nwhen it comes to CVEs popping up.\n\nThe benchmarks added here are very simple and measure the throughput of\nthe API server's Open API spec providing endpoints.\n\nThe GitHub action that we use is designed to do regression detection and\nreporting but this is hard to verify before actually putting it in place\nas we cannot simulate the CI environment's clone on a local environment.\n\nThe hope is that this change will make it so that if someone tries to\nmake a code change that will lower performance significantly, then we\ncan catch that at the review stage instead of having to find out later.\n\nSecondary change:\n-----------------\n\n1. Started using tsx in favor of ts-node because it appers to be about\n5% faster when looking at the benchmark execution. It also claims to have\nless problems with ESM compared to ts-node so if this initial trial\ngoes well we could later on decide to swap out ts-node with it project-wide.\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-02-02T00:09:44-08:00",
          "tree_id": "741d7ddf0400698b2fdfb3d8ac58c18e884a4afe",
          "url": "https://github.com/aldousalvarez/cactus/commit/0804bab4c9b43f2e22be6d77be127415a9a0532f"
        },
        "date": 1706863178933,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 616,
            "range": "±1.79%",
            "unit": "ops/sec",
            "extra": "177 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 387,
            "range": "±1.47%",
            "unit": "ops/sec",
            "extra": "183 samples"
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
          "id": "38e5f6d0a0e7d582cb27d4266db1696f010627a7",
          "message": "build(deps): bump undici from 5.26.2 to 5.28.3\n\nBumps [undici](https://github.com/nodejs/undici) from 5.26.2 to 5.28.3.\n- [Release notes](https://github.com/nodejs/undici/releases)\n- [Commits](https://github.com/nodejs/undici/compare/v5.26.2...v5.28.3)\n\n---\nupdated-dependencies:\n- dependency-name: undici\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2024-02-18T19:56:48-08:00",
          "tree_id": "6dd8e218bf754c848b3e86090bbfd6b41805ff97",
          "url": "https://github.com/aldousalvarez/cactus/commit/38e5f6d0a0e7d582cb27d4266db1696f010627a7"
        },
        "date": 1708483916282,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 625,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "179 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 391,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "182 samples"
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
          "id": "21fd747e37d20e2427ad6e86b6d5d15435fbc660",
          "message": "refactor(connector-fabric): deployContractGoSourceV1 uses Fabric v2.5.6\n\nThe deployContractGoSourceV1() method now assumes that the underlying\ntest ledger is Fabric 2.5 (current LTS).\n\nThis will allow us to upgrade the contracts that are being used by the\nSupply chain app to Fabric 2.x from Fabric 1.x which will then implicitly\nfix a large number of other issues at the same time.\n\nThis change is part of laying the foundation for that follow-up work.\n\nPrimary changes:\n-----------------\n\n1. Added a new, standalone utility function to deploy go source contracts\nwith the name of `deployContractGoSourceImplFabricV256()`.\n2. The code of this function was derived from the original Fabric v1\ncompatible deployContractGoSourceV1 method of the Fabric connector.\n3. 2 organizations are supported for deployment via the endpoint.\n4. The endpoint is only used by the supply chain app example at the moment\nand there is no test coverage of it due to dependencies that will be\nresolved in a follow-up pull request that is coming soon.\n\nSecondary changes:\n1. Also extracted the SSH execution function from the fabric connector\ninto a standalone function that can be used without having to have a\nFabric connector instance created first.\n2. Also extracted/abstracted some logic into a utility function for\nsimilar reasons that is used to replace logging configuration environment\nvariables in shell commands that we use to perform contract deployment\nonto the Fabric test ledgers.\n\nDepends on #3054\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-03-07T10:23:49-08:00",
          "tree_id": "88182f18cecf9098fc401d25df6bd5870af5bcb8",
          "url": "https://github.com/aldousalvarez/cactus/commit/21fd747e37d20e2427ad6e86b6d5d15435fbc660"
        },
        "date": 1709887065570,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 615,
            "range": "±1.72%",
            "unit": "ops/sec",
            "extra": "178 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 386,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "182 samples"
          }
        ]
      }
    ]
  }
}