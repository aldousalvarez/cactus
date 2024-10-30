window.BENCHMARK_DATA = {
  "lastUpdate": 1730271780762,
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
          "id": "092d4501ccf0e43001f2cefb0860b1bcbb0f1485",
          "message": "ci(github): add workflow for DCO check\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-06-14T08:52:05-07:00",
          "tree_id": "e59a83c4ef3ce206b28d85053c8bca7119a4c82d",
          "url": "https://github.com/aldousalvarez/cactus/commit/092d4501ccf0e43001f2cefb0860b1bcbb0f1485"
        },
        "date": 1718692498488,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 594,
            "range": "±1.60%",
            "unit": "ops/sec",
            "extra": "176 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 370,
            "range": "±1.44%",
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
          "id": "092d4501ccf0e43001f2cefb0860b1bcbb0f1485",
          "message": "ci(github): add workflow for DCO check\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-06-14T08:52:05-07:00",
          "tree_id": "e59a83c4ef3ce206b28d85053c8bca7119a4c82d",
          "url": "https://github.com/aldousalvarez/cactus/commit/092d4501ccf0e43001f2cefb0860b1bcbb0f1485"
        },
        "date": 1718693342144,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 745,
            "range": "±2.79%",
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
          "id": "fa6cb101e599158cab34824f438fe2875e80be1b",
          "message": "docs(RELEASE_MANAGEMENT): explain auto-merge for release PRs is a no-no\n\nThe detailed explanation is here:\n\nDo not enable auto-merging on GitHub for the pull request doing the release.\nThe problem with auto-merging here is that it would modify the release commit's SHA as the\nrebase would happen on GitHub's servers where your git signing identity is not available to use\ngiven that GitHub does (should) not have access to your private key for signing.\nThe way the preserve your commit signature as valid the commit SHA must remain the same and the\nway to achieve this is to perform the pull request merging with fast forward. The merging\nensures that there is no commit SHA change and the `--ff-only` option ensures that there is no\nmerge commit to throw a wrench in the process.\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-06-19T00:05:22-07:00",
          "tree_id": "93d83f51f62c2c03750a9fbf0b3a8a0584050e6d",
          "url": "https://github.com/aldousalvarez/cactus/commit/fa6cb101e599158cab34824f438fe2875e80be1b"
        },
        "date": 1718792464868,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 761,
            "range": "±2.95%",
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
          "id": "997ee75725989e02b0e83a71bb06812c1f621b31",
          "message": "docs(examples): migrate supply chain app to XDai connector\n\n1. We are in the process of decomissioning the Quorum connector and this\nis a pre-requisite to that end.\n\nDepends on #3379\n> test(test-tooling): fix BesuTestLedger start cfg: publish all ports)\n\nFixes #3272\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-07-08T10:00:45-07:00",
          "tree_id": "917ab21bf7f842d66833db2d171e9fd9f26c2020",
          "url": "https://github.com/aldousalvarez/cactus/commit/997ee75725989e02b0e83a71bb06812c1f621b31"
        },
        "date": 1720512084609,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 584,
            "range": "±1.66%",
            "unit": "ops/sec",
            "extra": "178 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 360,
            "range": "±1.52%",
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
          "id": "de0530276e26713a1a3705412821f71f12d3eada",
          "message": "test(tools): fix Corda AIO flowdb image: JVM upgrade, flow permissions\n\n1. Also removed the party B, C and notary because none of these are present\nin the ledger definition that we get handed down from the official kotlin\nsamples Corda GitHub repository.\n2. The above change also saves on resources to have only party A which\nmakes this image boot very fast compared to the other Corda AIO images.\n3. Also refactored the corda sample app enum so that the file-system paths\ndeclared in it are matching reality instead of pointing to non-existent\ndirectories.\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-07-09T00:46:08-07:00",
          "tree_id": "9e34aff25aa7ce66d41d56c5cdf7390e16c1e1a6",
          "url": "https://github.com/aldousalvarez/cactus/commit/de0530276e26713a1a3705412821f71f12d3eada"
        },
        "date": 1720528825009,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 548,
            "range": "±1.79%",
            "unit": "ops/sec",
            "extra": "177 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 355,
            "range": "±1.38%",
            "unit": "ops/sec",
            "extra": "179 samples"
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
          "id": "5d7ec2985d2d0aed10c5f0915c6081c755bc99a7",
          "message": "ci(connector-corda): fix insufficient disk space errors\n\nWe have the disk clean-up in the CI off by default because it takes a few\nminutes to perform and most jobs don't need it, but for Corda it seems\nnecessary because our tests started failing with the message below\n(lines wrapped to make sure we don't run over the 100 character limit\nfor the git commit message)\n\ncactus-corda-4-8-all-in-one-flowdb:2024-07-08-hotfix-1]\n[WARN] 09:48:28+0000 [Thread-2\n(ActiveMQ-server-org.apache.activemq.artemis.core.server.impl.ActiveMQServerImpl$6@11a43807)]\ncore.server. -\nAMQ222210: Free storage space is at 145.7MB of 77.9GB total. Usage rate is 99.8% which is\nbeyond the configured <max-disk-usage>. System will start blocking producers.\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-07-11T21:54:20-07:00",
          "tree_id": "76f975422b6bbe5c840bd589b87f9afe373f5b19",
          "url": "https://github.com/aldousalvarez/cactus/commit/5d7ec2985d2d0aed10c5f0915c6081c755bc99a7"
        },
        "date": 1720764713266,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 584,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "178 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 356,
            "range": "±1.44%",
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
          "id": "497ea3226631fdcad763e6281ee058d91ca01988",
          "message": "test(test-tooling): add container image builder utilities\n\n1. Currently our integration tests depend on pre-published container\nimages to be on the official registry (ghcr.io). This has pros and cons.\nThe pro is that we can pin the tests to a specific ledger version and\nthen have confidence that the test code works with that specific image.\nOn the other hand if the image itself has problems we won't know it until\nafter it was published and then tests were executed with it (unless we\nperform manual testing which is a lot of effrot as it requires the\nmanual modification of the test cases).\n2. In order to gives us the ability to test against the container image\ndefinitions as they are in the current revision of the source code,\nwe are adding here a couple of utility functions to streamline writing\ntest cases that build the container images for themselves as part of the\ntest case.\n\nAn example of how to use it in a test case:\n\n```typescript\nconst imgConnectorJvm = await buildImageConnectorCordaServer({\n    logLevel,\n});\n\n// ...\n\nconnector = new CordaConnectorContainer({\n    logLevel,\n    imageName: imgConnectorJvm.imageName,\n    imageVersion: imgConnectorJvm.imageVersion,\n    envVars: [envVarSpringAppJson],\n});\n\n```\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-07-17T17:31:23-07:00",
          "tree_id": "59d3d8a612cce5ee7e4b23eb014491baec319e68",
          "url": "https://github.com/aldousalvarez/cactus/commit/497ea3226631fdcad763e6281ee058d91ca01988"
        },
        "date": 1721283395531,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 596,
            "range": "±1.57%",
            "unit": "ops/sec",
            "extra": "179 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 364,
            "range": "±1.34%",
            "unit": "ops/sec",
            "extra": "182 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "michal.bajer@fujitsu.com",
            "name": "Michal Bajer",
            "username": "outSH"
          },
          "committer": {
            "email": "9387513+outSH@users.noreply.github.com",
            "name": "Michal Bajer",
            "username": "outSH"
          },
          "distinct": true,
          "id": "c867a9f5ef084e4e6d7c6f5a641d1dd13f9ce233",
          "message": "feat(persistence-fabric): rewrite the plugin\n\n- Rewrite fabric persistence plugin to match persistence ethereum\n  plugin methods and behavior.\n- Change DB schema for persistence.\n- Add tests and sample data to the new plugin. Add them to project CI.\n\nDepends on #3298\n\nSigned-off-by: Michal Bajer <michal.bajer@fujitsu.com>",
          "timestamp": "2024-07-18T22:52:54+02:00",
          "tree_id": "0626c0274134b1741d7760598515ec09ec8bf02e",
          "url": "https://github.com/aldousalvarez/cactus/commit/c867a9f5ef084e4e6d7c6f5a641d1dd13f9ce233"
        },
        "date": 1721366954314,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 587,
            "range": "±1.70%",
            "unit": "ops/sec",
            "extra": "177 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 362,
            "range": "±1.32%",
            "unit": "ops/sec",
            "extra": "182 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "michal.bajer@fujitsu.com",
            "name": "Michal Bajer",
            "username": "outSH"
          },
          "committer": {
            "email": "9387513+outSH@users.noreply.github.com",
            "name": "Michal Bajer",
            "username": "outSH"
          },
          "distinct": true,
          "id": "c867a9f5ef084e4e6d7c6f5a641d1dd13f9ce233",
          "message": "feat(persistence-fabric): rewrite the plugin\n\n- Rewrite fabric persistence plugin to match persistence ethereum\n  plugin methods and behavior.\n- Change DB schema for persistence.\n- Add tests and sample data to the new plugin. Add them to project CI.\n\nDepends on #3298\n\nSigned-off-by: Michal Bajer <michal.bajer@fujitsu.com>",
          "timestamp": "2024-07-18T22:52:54+02:00",
          "tree_id": "0626c0274134b1741d7760598515ec09ec8bf02e",
          "url": "https://github.com/aldousalvarez/cactus/commit/c867a9f5ef084e4e6d7c6f5a641d1dd13f9ce233"
        },
        "date": 1721367770422,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 689,
            "range": "±3.12%",
            "unit": "ops/sec",
            "extra": "177 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jenniferlianne@gmail.com",
            "name": "Jennifer Bell"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "8917ff589c350797ccba6699e6f29d5af5416ccd",
          "message": "chore(weaver): use specific fabric versions\n\nWhile fabric setup for weaver tests downloads\nimages specified in makefile, when the network\nis brought up the latest versions are pulled.\n\nPrimary Change:\n\n- pass fabric versions from Makefile to\n  network.sh, ensuring they are used\n\nSecondary Changes:\n\nnetwork.sh:\n- allow specifying fabric ca version\n- set exit on error bash flag to avoid continuing\n  if script is in error\n- re-write unsupported version tests to not\n  not generate error\n- add rm -f to not generate error if file does\n  not exist\n\nSigned-off-by: Jennifer Bell <jenniferlianne@gmail.com>",
          "timestamp": "2024-07-24T16:54:48-07:00",
          "tree_id": "db1794963f02fd2bb76b0096000e2e663350cf68",
          "url": "https://github.com/aldousalvarez/cactus/commit/8917ff589c350797ccba6699e6f29d5af5416ccd"
        },
        "date": 1721883544331,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 578,
            "range": "±1.59%",
            "unit": "ops/sec",
            "extra": "177 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 360,
            "range": "±1.36%",
            "unit": "ops/sec",
            "extra": "181 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jenniferlianne@gmail.com",
            "name": "Jennifer Bell"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "8917ff589c350797ccba6699e6f29d5af5416ccd",
          "message": "chore(weaver): use specific fabric versions\n\nWhile fabric setup for weaver tests downloads\nimages specified in makefile, when the network\nis brought up the latest versions are pulled.\n\nPrimary Change:\n\n- pass fabric versions from Makefile to\n  network.sh, ensuring they are used\n\nSecondary Changes:\n\nnetwork.sh:\n- allow specifying fabric ca version\n- set exit on error bash flag to avoid continuing\n  if script is in error\n- re-write unsupported version tests to not\n  not generate error\n- add rm -f to not generate error if file does\n  not exist\n\nSigned-off-by: Jennifer Bell <jenniferlianne@gmail.com>",
          "timestamp": "2024-07-24T16:54:48-07:00",
          "tree_id": "db1794963f02fd2bb76b0096000e2e663350cf68",
          "url": "https://github.com/aldousalvarez/cactus/commit/8917ff589c350797ccba6699e6f29d5af5416ccd"
        },
        "date": 1721884405137,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 695,
            "range": "±2.90%",
            "unit": "ops/sec",
            "extra": "180 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jagpreet.singh.sasan@accenture.com",
            "name": "jagpreetsinghsasan",
            "username": "jagpreetsinghsasan"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "9c4d9be8ac7a1608bf15cbaf887ed0836c02f747",
          "message": "build(api-client): generate go client\n\n    Primary Changes\n    ----------------\n    1. Updated package.json file for packages to\n       include the new codegen script\n    2. Added a new dep, replace for string\n       manupulation in package.json\n\nFixes #393\n\nSigned-off-by: jagpreetsinghsasan <jagpreet.singh.sasan@accenture.com>",
          "timestamp": "2024-07-25T14:06:22-07:00",
          "tree_id": "4db60a87b0df4cca6a76f559d461c607d148f604",
          "url": "https://github.com/aldousalvarez/cactus/commit/9c4d9be8ac7a1608bf15cbaf887ed0836c02f747"
        },
        "date": 1721988316046,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 577,
            "range": "±1.56%",
            "unit": "ops/sec",
            "extra": "177 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 351,
            "range": "±1.26%",
            "unit": "ops/sec",
            "extra": "180 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jagpreet.singh.sasan@accenture.com",
            "name": "jagpreetsinghsasan",
            "username": "jagpreetsinghsasan"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "9c4d9be8ac7a1608bf15cbaf887ed0836c02f747",
          "message": "build(api-client): generate go client\n\n    Primary Changes\n    ----------------\n    1. Updated package.json file for packages to\n       include the new codegen script\n    2. Added a new dep, replace for string\n       manupulation in package.json\n\nFixes #393\n\nSigned-off-by: jagpreetsinghsasan <jagpreet.singh.sasan@accenture.com>",
          "timestamp": "2024-07-25T14:06:22-07:00",
          "tree_id": "4db60a87b0df4cca6a76f559d461c607d148f604",
          "url": "https://github.com/aldousalvarez/cactus/commit/9c4d9be8ac7a1608bf15cbaf887ed0836c02f747"
        },
        "date": 1721989121131,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 670,
            "range": "±3.37%",
            "unit": "ops/sec",
            "extra": "177 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aldousss.alvarez@gmail.com",
            "name": "aldousalvarez",
            "username": "aldousalvarez"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "fdce6b3222fbec1c0f05db41dd5b93fbc8a8939d",
          "message": "ci(connector-xdai): fix docker rate limit issues with openethereum image pull\n\nPrimary Changes\n----------------\n1. Migrated all the xdai connector tests to besu ledger\n   images that is being pulled from ghcr\n\nFixes #3413\n\nSigned-off-by: aldousalvarez <aldousss.alvarez@gmail.com>",
          "timestamp": "2024-08-01T10:57:28-07:00",
          "tree_id": "2fecc0a53a69a02fe88066a2239c35ccea8728a9",
          "url": "https://github.com/aldousalvarez/cactus/commit/fdce6b3222fbec1c0f05db41dd5b93fbc8a8939d"
        },
        "date": 1722832072262,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 579,
            "range": "±1.60%",
            "unit": "ops/sec",
            "extra": "178 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 353,
            "range": "±1.21%",
            "unit": "ops/sec",
            "extra": "182 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "michal.bajer@fujitsu.com",
            "name": "Michal Bajer",
            "username": "outSH"
          },
          "committer": {
            "email": "9387513+outSH@users.noreply.github.com",
            "name": "Michal Bajer",
            "username": "outSH"
          },
          "distinct": true,
          "id": "ed915cf6f8f1388cbfdc16c954102da1e381920b",
          "message": "feat(persistence-ethereum): add sample setup scripts, improve documentation\n\n- Fix ethereum connector openapi validation errors (mostly remove nullable\n    from reference fields).\n- Add sample setup scripts. Simple can be used to run persistence againsy\n    already running ethereum ledger, complete will setup entire environment\n    and run some basic operations to generate sample data.\n- Improve documentation to include these new scripts and how to use them, fix\n    smaller issues.\n\nSigned-off-by: Michal Bajer <michal.bajer@fujitsu.com>",
          "timestamp": "2024-08-14T11:55:03+02:00",
          "tree_id": "82b6afddbe65ea77abe5fc04d43e230679395ed8",
          "url": "https://github.com/aldousalvarez/cactus/commit/ed915cf6f8f1388cbfdc16c954102da1e381920b"
        },
        "date": 1723649036296,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 579,
            "range": "±1.56%",
            "unit": "ops/sec",
            "extra": "177 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 324,
            "range": "±1.47%",
            "unit": "ops/sec",
            "extra": "177 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "michal.bajer@fujitsu.com",
            "name": "Michal Bajer",
            "username": "outSH"
          },
          "committer": {
            "email": "9387513+outSH@users.noreply.github.com",
            "name": "Michal Bajer",
            "username": "outSH"
          },
          "distinct": true,
          "id": "ed915cf6f8f1388cbfdc16c954102da1e381920b",
          "message": "feat(persistence-ethereum): add sample setup scripts, improve documentation\n\n- Fix ethereum connector openapi validation errors (mostly remove nullable\n    from reference fields).\n- Add sample setup scripts. Simple can be used to run persistence againsy\n    already running ethereum ledger, complete will setup entire environment\n    and run some basic operations to generate sample data.\n- Improve documentation to include these new scripts and how to use them, fix\n    smaller issues.\n\nSigned-off-by: Michal Bajer <michal.bajer@fujitsu.com>",
          "timestamp": "2024-08-14T11:55:03+02:00",
          "tree_id": "82b6afddbe65ea77abe5fc04d43e230679395ed8",
          "url": "https://github.com/aldousalvarez/cactus/commit/ed915cf6f8f1388cbfdc16c954102da1e381920b"
        },
        "date": 1723649942132,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 676,
            "range": "±2.85%",
            "unit": "ops/sec",
            "extra": "176 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "adrian.batuto@accenture.com",
            "name": "adrianbatuto",
            "username": "adrianbatuto"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "ec9683d38670fe5d657b602db8215e602fd4209d",
          "message": "feat(corda): support 5.1 via TS/HTTP (no JVM)\nFixes #2978\nFixes #3293\n\nSigned-off-by: adrianbatuto <adrian.batuto@accenture.com>",
          "timestamp": "2024-08-19T14:43:10-07:00",
          "tree_id": "530c66f1928ba9481fcc2d1d760582bf58be6677",
          "url": "https://github.com/aldousalvarez/cactus/commit/ec9683d38670fe5d657b602db8215e602fd4209d"
        },
        "date": 1724252156235,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 596,
            "range": "±1.75%",
            "unit": "ops/sec",
            "extra": "177 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 346,
            "range": "±2.03%",
            "unit": "ops/sec",
            "extra": "182 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "adrian.batuto@accenture.com",
            "name": "adrianbatuto",
            "username": "adrianbatuto"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "ec9683d38670fe5d657b602db8215e602fd4209d",
          "message": "feat(corda): support 5.1 via TS/HTTP (no JVM)\nFixes #2978\nFixes #3293\n\nSigned-off-by: adrianbatuto <adrian.batuto@accenture.com>",
          "timestamp": "2024-08-19T14:43:10-07:00",
          "tree_id": "530c66f1928ba9481fcc2d1d760582bf58be6677",
          "url": "https://github.com/aldousalvarez/cactus/commit/ec9683d38670fe5d657b602db8215e602fd4209d"
        },
        "date": 1724253019460,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 724,
            "range": "±2.58%",
            "unit": "ops/sec",
            "extra": "179 samples"
          }
        ]
      },
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
          "id": "bdc5cd79be7a3d1d0130bb2471cd787503b93731",
          "message": "docs(ledger-browser): add initial GUI documentation and fix some bugs\n\n- Add new documentation section to project docs. New pages can be found under\n    `Cactus` -> `Ledger Browser` category. Documentation include GUI setup\n    instructions, application overviews, developer guide and tutorial\n    on developing new app plugin for the GUI.\n- Do some minor quality of life improvements and bug fixes.\n- Add missing GUI database schema file.\n- Remove dead code from GUI that still used `getAppList`.\n- Add documentation links to the GUI. For now, most links are empty and they\n    will be set once this PR is merged and the docs URLs are confirmed.\n- Add sample tutorial application (the same that is created step-by-step in\n    the tutorial in the documentation)\n- Improve plugin app URL regex to allow more valid paths.\n- Expose ethereum and fabric schemas in supabase-all-in-one\n- Extend persistence plugin init SQL with code for exposing custom schemas.\n- Improve supabase-all-in-one readme documentation.\n- Fix persistence sample setup scripts ports so that both scripts can be run\n    at the same time.\n\nDepends on #3448\nDepends on #3449\n\nSigned-off-by: Michal Bajer <michal.bajer@fujitsu.com>",
          "timestamp": "2024-09-04T15:57:23-07:00",
          "tree_id": "8972fe7261443d25dc771b497dd7090c1b795497",
          "url": "https://github.com/aldousalvarez/cactus/commit/bdc5cd79be7a3d1d0130bb2471cd787503b93731"
        },
        "date": 1725549200325,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 577,
            "range": "±1.61%",
            "unit": "ops/sec",
            "extra": "178 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 330,
            "range": "±2.17%",
            "unit": "ops/sec",
            "extra": "179 samples"
          }
        ]
      },
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
          "id": "bdc5cd79be7a3d1d0130bb2471cd787503b93731",
          "message": "docs(ledger-browser): add initial GUI documentation and fix some bugs\n\n- Add new documentation section to project docs. New pages can be found under\n    `Cactus` -> `Ledger Browser` category. Documentation include GUI setup\n    instructions, application overviews, developer guide and tutorial\n    on developing new app plugin for the GUI.\n- Do some minor quality of life improvements and bug fixes.\n- Add missing GUI database schema file.\n- Remove dead code from GUI that still used `getAppList`.\n- Add documentation links to the GUI. For now, most links are empty and they\n    will be set once this PR is merged and the docs URLs are confirmed.\n- Add sample tutorial application (the same that is created step-by-step in\n    the tutorial in the documentation)\n- Improve plugin app URL regex to allow more valid paths.\n- Expose ethereum and fabric schemas in supabase-all-in-one\n- Extend persistence plugin init SQL with code for exposing custom schemas.\n- Improve supabase-all-in-one readme documentation.\n- Fix persistence sample setup scripts ports so that both scripts can be run\n    at the same time.\n\nDepends on #3448\nDepends on #3449\n\nSigned-off-by: Michal Bajer <michal.bajer@fujitsu.com>",
          "timestamp": "2024-09-04T15:57:23-07:00",
          "tree_id": "8972fe7261443d25dc771b497dd7090c1b795497",
          "url": "https://github.com/aldousalvarez/cactus/commit/bdc5cd79be7a3d1d0130bb2471cd787503b93731"
        },
        "date": 1725550004964,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 719,
            "range": "±2.97%",
            "unit": "ops/sec",
            "extra": "178 samples"
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
          "id": "456e60db069e570781b3f50d4155de07065a006b",
          "message": "build(deps): bump the npm_and_yarn group across 3 directories with 3 updates\n\n---\nupdated-dependencies:\n- dependency-name: \"@grpc/grpc-js\"\n  dependency-type: direct:production\n  dependency-group: npm_and_yarn\n- dependency-name: axios\n  dependency-type: direct:production\n  dependency-group: npm_and_yarn\n- dependency-name: qs\n  dependency-type: direct:development\n  dependency-group: npm_and_yarn\n- dependency-name: axios\n  dependency-type: direct:production\n  dependency-group: npm_and_yarn\n- dependency-name: \"@grpc/grpc-js\"\n  dependency-type: direct:development\n  dependency-group: npm_and_yarn\n...\n\nCo-authored-by: Peter Somogyvari <peter.somogyvari@accenture.com>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-09-11T09:58:13-07:00",
          "tree_id": "2ae0d38920ee96029a875f7d62dcf786d9cc5de4",
          "url": "https://github.com/aldousalvarez/cactus/commit/456e60db069e570781b3f50d4155de07065a006b"
        },
        "date": 1726218933223,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 586,
            "range": "±1.73%",
            "unit": "ops/sec",
            "extra": "179 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 709,
            "range": "±2.98%",
            "unit": "ops/sec",
            "extra": "182 samples"
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
          "id": "456e60db069e570781b3f50d4155de07065a006b",
          "message": "build(deps): bump the npm_and_yarn group across 3 directories with 3 updates\n\n---\nupdated-dependencies:\n- dependency-name: \"@grpc/grpc-js\"\n  dependency-type: direct:production\n  dependency-group: npm_and_yarn\n- dependency-name: axios\n  dependency-type: direct:production\n  dependency-group: npm_and_yarn\n- dependency-name: qs\n  dependency-type: direct:development\n  dependency-group: npm_and_yarn\n- dependency-name: axios\n  dependency-type: direct:production\n  dependency-group: npm_and_yarn\n- dependency-name: \"@grpc/grpc-js\"\n  dependency-type: direct:development\n  dependency-group: npm_and_yarn\n...\n\nCo-authored-by: Peter Somogyvari <peter.somogyvari@accenture.com>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-09-11T09:58:13-07:00",
          "tree_id": "2ae0d38920ee96029a875f7d62dcf786d9cc5de4",
          "url": "https://github.com/aldousalvarez/cactus/commit/456e60db069e570781b3f50d4155de07065a006b"
        },
        "date": 1726219847312,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 741,
            "range": "±2.98%",
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
          "id": "299af74b0e74d5bdb0224fb5a80303ef75024fdb",
          "message": "docs(api-server): explain local plugin import through packageSrc config\n\nThis came up during a discussion here and I thought it best to document\nit a little more thoroughly so that later it can be referenced for others\nas well:\nhttps://github.com/hyperledger/cacti/issues/3406#issuecomment-2299654552\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-09-17T19:15:15-07:00",
          "tree_id": "a6698ef08ae1c594584960b0297cf549de9a8ec7",
          "url": "https://github.com/aldousalvarez/cactus/commit/299af74b0e74d5bdb0224fb5a80303ef75024fdb"
        },
        "date": 1726715697588,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 561,
            "range": "±1.76%",
            "unit": "ops/sec",
            "extra": "180 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 670,
            "range": "±2.89%",
            "unit": "ops/sec",
            "extra": "181 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sandeep.nishad1@ibm.com",
            "name": "Sandeep Nishad",
            "username": "sandeepnRES"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "c5bbb334aeb34282eb0aeaaf446f50bc785f4982",
          "message": "fix(weaver-corda): added duplicate handling strategy in build.gradle\n\nSigned-off-by: Sandeep Nishad <sandeep.nishad1@ibm.com>",
          "timestamp": "2024-09-25T12:00:55-07:00",
          "tree_id": "9ebfa30f9e9f0d53b432a24bdc2bb9628dc58faf",
          "url": "https://github.com/aldousalvarez/cactus/commit/c5bbb334aeb34282eb0aeaaf446f50bc785f4982"
        },
        "date": 1727408490649,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 586,
            "range": "±1.69%",
            "unit": "ops/sec",
            "extra": "177 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 720,
            "range": "±2.86%",
            "unit": "ops/sec",
            "extra": "181 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sandeep.nishad1@ibm.com",
            "name": "Sandeep Nishad",
            "username": "sandeepnRES"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "c5bbb334aeb34282eb0aeaaf446f50bc785f4982",
          "message": "fix(weaver-corda): added duplicate handling strategy in build.gradle\n\nSigned-off-by: Sandeep Nishad <sandeep.nishad1@ibm.com>",
          "timestamp": "2024-09-25T12:00:55-07:00",
          "tree_id": "9ebfa30f9e9f0d53b432a24bdc2bb9628dc58faf",
          "url": "https://github.com/aldousalvarez/cactus/commit/c5bbb334aeb34282eb0aeaaf446f50bc785f4982"
        },
        "date": 1727409401972,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 726,
            "range": "±2.89%",
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
          "id": "499f70302ca55c51f61f46abc3da8403c404409b",
          "message": "test(test-cmd-api-server): jestify plugin-import-with-npm-install-version\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-09-30T08:03:18-07:00",
          "tree_id": "8733afe1418da46c45b321ab2c1c4f04013e7bfe",
          "url": "https://github.com/aldousalvarez/cactus/commit/499f70302ca55c51f61f46abc3da8403c404409b"
        },
        "date": 1727749314651,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 579,
            "range": "±1.70%",
            "unit": "ops/sec",
            "extra": "176 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 708,
            "range": "±2.93%",
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
          "id": "499f70302ca55c51f61f46abc3da8403c404409b",
          "message": "test(test-cmd-api-server): jestify plugin-import-with-npm-install-version\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-09-30T08:03:18-07:00",
          "tree_id": "8733afe1418da46c45b321ab2c1c4f04013e7bfe",
          "url": "https://github.com/aldousalvarez/cactus/commit/499f70302ca55c51f61f46abc3da8403c404409b"
        },
        "date": 1727750280573,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 699,
            "range": "±3.28%",
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
          "id": "164addfdf625a0ed0d187a911b42a95875d7afa0",
          "message": "test(cmd-api-server): jestify install-basic-plugin-consortium-manual\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-10-02T12:32:02-07:00",
          "tree_id": "5e6359f77782a5bc2e8e8c3ec6ffec5e45658428",
          "url": "https://github.com/aldousalvarez/cactus/commit/164addfdf625a0ed0d187a911b42a95875d7afa0"
        },
        "date": 1727916386361,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 573,
            "range": "±1.70%",
            "unit": "ops/sec",
            "extra": "179 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 700,
            "range": "±2.67%",
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
          "id": "164addfdf625a0ed0d187a911b42a95875d7afa0",
          "message": "test(cmd-api-server): jestify install-basic-plugin-consortium-manual\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-10-02T12:32:02-07:00",
          "tree_id": "5e6359f77782a5bc2e8e8c3ec6ffec5e45658428",
          "url": "https://github.com/aldousalvarez/cactus/commit/164addfdf625a0ed0d187a911b42a95875d7afa0"
        },
        "date": 1727917300391,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 690,
            "range": "±2.76%",
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
          "id": "c331a633abef5502cfb5b1538b43b1f1a109a558",
          "message": "ci(github): enable manual publishing of custom git tags via input args\n\nThe `all-nodejs-packages-publish.yaml` workflow now has an input parameter\nwhere one can specify an arbitrary release git tag (such as v2.0.0-rc.5)\nto be the one to be published.\n\nThis will help us in scenarios where the release automation script failed to\nrun on GitHub and we have no way of publishing the given release manually\nfrom a local machine (since we do not have access to the npm/ghcr) tokens\nof the foundation (which is good security posture that we are happy to have)\n\nIn the scenario described above, in the future this will (should) allow us\nto fix bugs in the release automation script in commits that come **after**\nthe failed release and then manually trigger the updated (now functional)\npublish job for the older release version.\n\nThis will (hopefully) grant us the ability to ensure that releases are not\nmissing from the registries despite sometimes the automation breaking down.\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-10-03T18:56:06-07:00",
          "tree_id": "241384b891c90ea822f184f716f31574fb4699c1",
          "url": "https://github.com/aldousalvarez/cactus/commit/c331a633abef5502cfb5b1538b43b1f1a109a558"
        },
        "date": 1728018357304,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 582,
            "range": "±1.66%",
            "unit": "ops/sec",
            "extra": "177 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 713,
            "range": "±2.83%",
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
          "id": "c331a633abef5502cfb5b1538b43b1f1a109a558",
          "message": "ci(github): enable manual publishing of custom git tags via input args\n\nThe `all-nodejs-packages-publish.yaml` workflow now has an input parameter\nwhere one can specify an arbitrary release git tag (such as v2.0.0-rc.5)\nto be the one to be published.\n\nThis will help us in scenarios where the release automation script failed to\nrun on GitHub and we have no way of publishing the given release manually\nfrom a local machine (since we do not have access to the npm/ghcr) tokens\nof the foundation (which is good security posture that we are happy to have)\n\nIn the scenario described above, in the future this will (should) allow us\nto fix bugs in the release automation script in commits that come **after**\nthe failed release and then manually trigger the updated (now functional)\npublish job for the older release version.\n\nThis will (hopefully) grant us the ability to ensure that releases are not\nmissing from the registries despite sometimes the automation breaking down.\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-10-03T18:56:06-07:00",
          "tree_id": "241384b891c90ea822f184f716f31574fb4699c1",
          "url": "https://github.com/aldousalvarez/cactus/commit/c331a633abef5502cfb5b1538b43b1f1a109a558"
        },
        "date": 1728019213953,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 703,
            "range": "±2.61%",
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
          "id": "11dacbcef25ba3e7fa9f9880f60655be1e2396ef",
          "message": "fix(besu): deployContractSolBytecodeNoKeychainV1 requires keychainId\n\nIn the DeployContractSolidityBytecodeNoKeychainV1Request of\n`packages/cactus-plugin-ledger-connector-besu/src/main/json/openapi.tpl.json`\nthere are parameters that are required despite the entire point of this\noperation is to not need them (e.g. keychainId and contract JSON object).\n\nFixes #3586\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-10-17T16:16:32-07:00",
          "tree_id": "5802f84f4083cdb62a4cb6a485110b28a97e5386",
          "url": "https://github.com/aldousalvarez/cactus/commit/11dacbcef25ba3e7fa9f9880f60655be1e2396ef"
        },
        "date": 1729215971706,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 598,
            "range": "±1.88%",
            "unit": "ops/sec",
            "extra": "178 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 724,
            "range": "±3.06%",
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
          "id": "11dacbcef25ba3e7fa9f9880f60655be1e2396ef",
          "message": "fix(besu): deployContractSolBytecodeNoKeychainV1 requires keychainId\n\nIn the DeployContractSolidityBytecodeNoKeychainV1Request of\n`packages/cactus-plugin-ledger-connector-besu/src/main/json/openapi.tpl.json`\nthere are parameters that are required despite the entire point of this\noperation is to not need them (e.g. keychainId and contract JSON object).\n\nFixes #3586\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-10-17T16:16:32-07:00",
          "tree_id": "5802f84f4083cdb62a4cb6a485110b28a97e5386",
          "url": "https://github.com/aldousalvarez/cactus/commit/11dacbcef25ba3e7fa9f9880f60655be1e2396ef"
        },
        "date": 1729216881407,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 725,
            "range": "±3.13%",
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
          "id": "ff842d2a59ef898e734e1424ee6f26b52ba0af9b",
          "message": "build: migrate to Typescript target of ES2022 and use Error.cause\n\nProject-wide upgrade to Typescript target of ES2022 so that we can use\nthe new Error APIs.\n\nWherever possible we should now use the new `cause`\nproperty of the built-in `Error` type in combination\nwith the `asError(unknown)` utility function:\n```typescript\nimport { asError } from \"@hyperledger/cactus-common\";\n\ntry {\n    await performSomeImportantOperation();\n} catch (ex: unknown) {\n    const cause = asError(ex);\n    throw new Error(\"Something went wrong while doing something.\", { cause });\n}\n```\nMore information about the EcmaScript proposal that made this possible:\nhttps://github.com/tc39/proposal-error-cause\n\nFixes #3592\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-10-24T14:11:50-07:00",
          "tree_id": "d09b64bb941820b483375a7b716c161a7edb3083",
          "url": "https://github.com/aldousalvarez/cactus/commit/ff842d2a59ef898e734e1424ee6f26b52ba0af9b"
        },
        "date": 1730270947885,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 594,
            "range": "±1.62%",
            "unit": "ops/sec",
            "extra": "178 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 728,
            "range": "±3.03%",
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
          "id": "ff842d2a59ef898e734e1424ee6f26b52ba0af9b",
          "message": "build: migrate to Typescript target of ES2022 and use Error.cause\n\nProject-wide upgrade to Typescript target of ES2022 so that we can use\nthe new Error APIs.\n\nWherever possible we should now use the new `cause`\nproperty of the built-in `Error` type in combination\nwith the `asError(unknown)` utility function:\n```typescript\nimport { asError } from \"@hyperledger/cactus-common\";\n\ntry {\n    await performSomeImportantOperation();\n} catch (ex: unknown) {\n    const cause = asError(ex);\n    throw new Error(\"Something went wrong while doing something.\", { cause });\n}\n```\nMore information about the EcmaScript proposal that made this possible:\nhttps://github.com/tc39/proposal-error-cause\n\nFixes #3592\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-10-24T14:11:50-07:00",
          "tree_id": "d09b64bb941820b483375a7b716c161a7edb3083",
          "url": "https://github.com/aldousalvarez/cactus/commit/ff842d2a59ef898e734e1424ee6f26b52ba0af9b"
        },
        "date": 1730271778299,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 692,
            "range": "±2.88%",
            "unit": "ops/sec",
            "extra": "179 samples"
          }
        ]
      }
    ]
  }
}