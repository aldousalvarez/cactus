window.BENCHMARK_DATA = {
  "lastUpdate": 1711957820937,
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
          "id": "fd8fc6f27e6b8bbe7da114828fcd2bcbc28234ad",
          "message": "ci: upgrade and pin to ubuntu-22.04 project-wide for CI runner images\n\n1. This does not upgrade all the container images that we build and publish\nas part of the project, it just upgrades the runner images that are being\nused by the continuous integration environment.\n2. I also deleted a .yaml file that I left in the diff of another pull request\nby accident. Apologies for the littering.\n3. Upgrade: as-in, I bumped the 20.04 versions to 22.04\n4. Pin: as-in, replaced `ubuntu-latest` with `ubuntu-22.04` everywhere.\n5. Reasoning: 24.04 is out now and so we have to keep up with the times\nbecause soon there'll be a stop to security patches even on what used to\nbe LTS (20.04). It is better to find out now if we have a problem with\nubuntu 22.04 rather than later when it's become urgent to upgrade.\n6. The risk of something breaking because of these upgrades is most likely\nlow since ubuntu is one of the most stable distributions out there.\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-03-13T10:44:33-07:00",
          "tree_id": "d747bb0bfd66ac7c295771e8ed11edef318f517f",
          "url": "https://github.com/aldousalvarez/cactus/commit/fd8fc6f27e6b8bbe7da114828fcd2bcbc28234ad"
        },
        "date": 1710399779142,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 595,
            "range": "±1.59%",
            "unit": "ops/sec",
            "extra": "176 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 380,
            "range": "±1.38%",
            "unit": "ops/sec",
            "extra": "182 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tomasz.awramski@fujitsu.com",
            "name": "Tomasz Awramski",
            "username": "rwat17"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "e42cac7de0fff333fd032073b89075b06823c5c2",
          "message": "refactor(gui): gui structure change to make adding more ledgers easier\n- change folder structure\n- each ledger-plugin now has separate folder and configuration\n- added status page for available plugins\n\nSigned-off-by: Tomasz Awramski <tomasz.awramski@fujitsu.com>",
          "timestamp": "2024-03-20T06:25:00-07:00",
          "tree_id": "a06d9140b30341d4b2f5397c2a14d54650508633",
          "url": "https://github.com/aldousalvarez/cactus/commit/e42cac7de0fff333fd032073b89075b06823c5c2"
        },
        "date": 1710999430344,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 600,
            "range": "±1.62%",
            "unit": "ops/sec",
            "extra": "178 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 377,
            "range": "±1.14%",
            "unit": "ops/sec",
            "extra": "183 samples"
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
          "id": "e87e57791024824bb19830c66b9f3d2eaed6d629",
          "message": "feat(core-api): add IPluginGrpcService type & user-defined type guard\n\n1. This will be used by the upcoming functionality of the API server that\nallows all plugins to register their own gRPC services as part of the API\nserver's own gRPC service.\n2. The above mechanism will largely be the same conceptually as the one\nwe have for HTTP and SocketIO endpoints already.\n3. It is optional for plugins to implement gRPC services and therefore\nthe interface is a standalone one instead of being baked into the more\ngeneric IPluginWebService interface for example.\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-03-21T10:12:36-07:00",
          "tree_id": "297b3df27500cbf4b1dbe5b5c5d872665072a06f",
          "url": "https://github.com/aldousalvarez/cactus/commit/e87e57791024824bb19830c66b9f3d2eaed6d629"
        },
        "date": 1711450282874,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 603,
            "range": "±1.74%",
            "unit": "ops/sec",
            "extra": "178 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 373,
            "range": "±1.24%",
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
          "id": "db1aef8d03ac6da84d6ea44fb13c700fd49ceaf2",
          "message": "docs(examples/cbdc): upgrade web3 from v1.5.2 to v1.10.1\n\n1. This had to be done because of security vulnerabilities in the old version.\n2. Originally the robots have attempted to send a pull request with the\nsame change but it somehow went haywire and upgraded dozens of other\nversions in dozens of other packcages not the intended one...\n3. So this was manually created to address that bug in GitHub's\ndependabot.\n4. The original commit message did not mention which vulnerabilities\nare  being fixed by it and I also cannot remember the specific ones but\nthe older versions of web3 were definitely being affected and therefore\nit is known to be a good idea what the bot has proposed even though it\ncouldn't explain itself.\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-03-30T09:44:29-07:00",
          "tree_id": "937bf4c285c6e14469bc5ac00c388429c184004c",
          "url": "https://github.com/aldousalvarez/cactus/commit/db1aef8d03ac6da84d6ea44fb13c700fd49ceaf2"
        },
        "date": 1711957819337,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 586,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "177 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 371,
            "range": "±1.24%",
            "unit": "ops/sec",
            "extra": "182 samples"
          }
        ]
      }
    ]
  }
}