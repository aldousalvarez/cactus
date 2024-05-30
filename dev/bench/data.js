window.BENCHMARK_DATA = {
  "lastUpdate": 1717054553107,
  "repoUrl": "https://github.com/aldousalvarez/cactus",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ruzell.vince.aquino@accenture.com",
            "name": "ruzell22",
            "username": "ruzell22"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "e6d5d88fd33b2078035447bc0e452f3d862e0e68",
          "message": "feat(actionlint): fix the errors produced by the ActionLint tool\n\nPrimary Changes\n---------------\n\n1. Fix errors found by Actionlint on multiple yaml files\n2. Temporarily removed test_weaver*.yaml, weaver_deploy*.yml, weaver/ directory\nin ActionLint\n\nfixes: #2651\n\nSigned-off-by: ruzell22 <ruzell.vince.aquino@accenture.com>",
          "timestamp": "2024-05-23T11:44:44-07:00",
          "tree_id": "91f5f83727dd6a7b34d2ce2c7031ac542adfbed8",
          "url": "https://github.com/aldousalvarez/cactus/commit/e6d5d88fd33b2078035447bc0e452f3d862e0e68"
        },
        "date": 1716533373912,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 577,
            "range": "±1.71%",
            "unit": "ops/sec",
            "extra": "178 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 357,
            "range": "±1.34%",
            "unit": "ops/sec",
            "extra": "181 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ruzell.vince.aquino@accenture.com",
            "name": "ruzell22",
            "username": "ruzell22"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "e6d5d88fd33b2078035447bc0e452f3d862e0e68",
          "message": "feat(actionlint): fix the errors produced by the ActionLint tool\n\nPrimary Changes\n---------------\n\n1. Fix errors found by Actionlint on multiple yaml files\n2. Temporarily removed test_weaver*.yaml, weaver_deploy*.yml, weaver/ directory\nin ActionLint\n\nfixes: #2651\n\nSigned-off-by: ruzell22 <ruzell.vince.aquino@accenture.com>",
          "timestamp": "2024-05-23T11:44:44-07:00",
          "tree_id": "91f5f83727dd6a7b34d2ce2c7031ac542adfbed8",
          "url": "https://github.com/aldousalvarez/cactus/commit/e6d5d88fd33b2078035447bc0e452f3d862e0e68"
        },
        "date": 1716534263188,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 699,
            "range": "±2.60%",
            "unit": "ops/sec",
            "extra": "176 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zondervan.v.calvez@accenture.com",
            "name": "zondervancalvez",
            "username": "zondervancalvez"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "81da3334d8e638f85e398dd228bcef836a278230",
          "message": "fix(cmd-api-server): address CVE-2022-25881\n\nPrimary Changes:\n\tUpdated the Dockerfile & https-cache-semantics inside the cmd-api-server package\n\nFixes: #2862\n\nSigned-off-by: zondervancalvez <zondervan.v.calvez@accenture.com>\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-05-29T11:12:31-07:00",
          "tree_id": "150f754ac29b731c5aafa0fe70fe64afdec1aca2",
          "url": "https://github.com/aldousalvarez/cactus/commit/81da3334d8e638f85e398dd228bcef836a278230"
        },
        "date": 1717054550387,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 564,
            "range": "±1.69%",
            "unit": "ops/sec",
            "extra": "176 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 345,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "180 samples"
          }
        ]
      }
    ]
  }
}