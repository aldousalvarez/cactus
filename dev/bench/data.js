window.BENCHMARK_DATA = {
  "lastUpdate": 1718278870097,
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
          "id": "13f457c82fddfef513ad6fff5e8a75648682a851",
          "message": "build(yarn): add plugin-interactive-filter to manage deps per-package\n\nThis plugin allows to resolve some CVEs more surgically that are found in indirect\ndependencies which are difficult to upgrade without triggering a large change\nneeded and potential migrations, breaking changes to the public APIs of packages.\n\nThe reason why the above problem happens is because `yarn up` and `yarn up -R`\nare blunt instruments when it comes to managing a monorepo such as ours:\nThey do their upgrade all-or-nothing, e.g. you can't upgrade a single dependency\nin a single monorepo package, you must upgrade the dependency project-wide\nwith the mentioned tools, but sometimes we need to perform the upgrade just in a\nsingle monorepo package.\n\nFor example to the above, about 20 packages use web3 but only about 5 of those\nare using v4.x versions of web3. A new CVE came out covering v4.1.x and so\nI needed to upgrade web3 only in those packages where web3 was already above\nv4.0.0 and leave the older ones alone (surgical upgrades).\n\nTo accomplish this I've found no way to do it with stock yarn CLI commands, but\nsomeone who had the exact same problem had written a plugin for solving it.\n\nThe original issue reported to yarn with the same problem we are having:\nhttps://github.com/yarnpkg/berry/issues/2591\n\nThe repository where the plugin resides that we are adding in this commit in\norder to remediate the problem of lack of surgical (per-package) upgrades:\nhttps://github.com/eyolas/yarn-plugin-interractive-filter\n\nThe original CVE that I was investigating as I stumbled upon the solution:\n- https://github.com/hyperledger/cacti/pull/3264\n- https://github.com/hyperledger/cacti/security/dependabot/987\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-06-06T10:40:27-07:00",
          "tree_id": "977482c9f5dc0d8760dc86424c55ff05b34ca170",
          "url": "https://github.com/aldousalvarez/cactus/commit/13f457c82fddfef513ad6fff5e8a75648682a851"
        },
        "date": 1717740426447,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 569,
            "range": "±1.70%",
            "unit": "ops/sec",
            "extra": "177 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 356,
            "range": "±1.37%",
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
          "id": "ec8123cf954b09ba8cb213c7332dfe82224c351f",
          "message": "feat(connector-fabric): drop support for Fabric v1.x\n\nBREAKING CHANGE: The Open API specification that has the enums for\nledger versions will no longer have an option for Fabric v1.x\nThis means that in the core-api package the LedgerType enum has changes\nwhich means that code that depends on that enum value will need to be\nupdated.\n\nFabric v1.x has had unmaintained dependencies associated with it such as\nthe native grpc package that stopped receiving security updates years ago\nand therefore it's dangerous to have around.\n\nThere are also some issues with Fabric v1.x that make the AIO image flaky\nwhich also makes the relevant tests flaky due to which we couldn't run\nthe v1.x Fabric tests on the CI for a while now anyway.\n\nIn order to reduce the CI resource usage and our own maintenance burden\nI suggest that we get rid of the Fabric v1.x support meaning that we can\neliminate the AIO image build and some code complexity from the test ledger\ncode as well.\n\nIn addition some old fixtures can be removed that the tests were using.\nOverall a net-positive as deleting code without losing functionality (that\nwe care about) is always a plus.\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-06-12T11:12:42-07:00",
          "tree_id": "cfaf922e1ca373842ba7d01f923a3ad75d880f8a",
          "url": "https://github.com/aldousalvarez/cactus/commit/ec8123cf954b09ba8cb213c7332dfe82224c351f"
        },
        "date": 1718277773187,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 547,
            "range": "±1.80%",
            "unit": "ops/sec",
            "extra": "175 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 347,
            "range": "±1.33%",
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
          "id": "ec8123cf954b09ba8cb213c7332dfe82224c351f",
          "message": "feat(connector-fabric): drop support for Fabric v1.x\n\nBREAKING CHANGE: The Open API specification that has the enums for\nledger versions will no longer have an option for Fabric v1.x\nThis means that in the core-api package the LedgerType enum has changes\nwhich means that code that depends on that enum value will need to be\nupdated.\n\nFabric v1.x has had unmaintained dependencies associated with it such as\nthe native grpc package that stopped receiving security updates years ago\nand therefore it's dangerous to have around.\n\nThere are also some issues with Fabric v1.x that make the AIO image flaky\nwhich also makes the relevant tests flaky due to which we couldn't run\nthe v1.x Fabric tests on the CI for a while now anyway.\n\nIn order to reduce the CI resource usage and our own maintenance burden\nI suggest that we get rid of the Fabric v1.x support meaning that we can\neliminate the AIO image build and some code complexity from the test ledger\ncode as well.\n\nIn addition some old fixtures can be removed that the tests were using.\nOverall a net-positive as deleting code without losing functionality (that\nwe care about) is always a plus.\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-06-12T11:12:42-07:00",
          "tree_id": "cfaf922e1ca373842ba7d01f923a3ad75d880f8a",
          "url": "https://github.com/aldousalvarez/cactus/commit/ec8123cf954b09ba8cb213c7332dfe82224c351f"
        },
        "date": 1718278868381,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 695,
            "range": "±3.00%",
            "unit": "ops/sec",
            "extra": "177 samples"
          }
        ]
      }
    ]
  }
}