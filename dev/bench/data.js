window.BENCHMARK_DATA = {
  "lastUpdate": 1708483918636,
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
      }
    ]
  }
}