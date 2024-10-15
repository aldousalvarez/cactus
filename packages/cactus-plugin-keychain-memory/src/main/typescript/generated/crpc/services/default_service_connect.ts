//
//Hyperledger Cactus Plugin - Keychain Memory 
//
//Contains/describes the Hyperledger Cacti Keychain Memory plugin.
//
//The version of the OpenAPI document: 2.0.0
//
//Generated by OpenAPI Generator: https://openapi-generator.tech

// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=ts"
// @generated from file services/default_service.proto (package org.hyperledger.cacti.plugin.keychain.memory.services.defaultservice, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { DeleteKeychainEntryV1Request, GetKeychainEntryV1Request, GetPrometheusMetricsV1Response, HasKeychainEntryV1Request, SetKeychainEntryV1Request } from "./default_service_pb.js";
import { DeleteKeychainEntryResponseV1PB } from "../models/delete_keychain_entry_response_v1_pb_pb.js";
import { Empty, MethodKind } from "@bufbuild/protobuf";
import { GetKeychainEntryResponseV1PB } from "../models/get_keychain_entry_response_v1_pb_pb.js";
import { HasKeychainEntryResponseV1PB } from "../models/has_keychain_entry_response_v1_pb_pb.js";
import { SetKeychainEntryResponseV1PB } from "../models/set_keychain_entry_response_v1_pb_pb.js";

/**
 * @generated from service org.hyperledger.cacti.plugin.keychain.memory.services.defaultservice.DefaultService
 */
export const DefaultService = {
  typeName: "org.hyperledger.cacti.plugin.keychain.memory.services.defaultservice.DefaultService",
  methods: {
    /**
     * @generated from rpc org.hyperledger.cacti.plugin.keychain.memory.services.defaultservice.DefaultService.DeleteKeychainEntryV1
     */
    deleteKeychainEntryV1: {
      name: "DeleteKeychainEntryV1",
      I: DeleteKeychainEntryV1Request,
      O: DeleteKeychainEntryResponseV1PB,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc org.hyperledger.cacti.plugin.keychain.memory.services.defaultservice.DefaultService.GetKeychainEntryV1
     */
    getKeychainEntryV1: {
      name: "GetKeychainEntryV1",
      I: GetKeychainEntryV1Request,
      O: GetKeychainEntryResponseV1PB,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc org.hyperledger.cacti.plugin.keychain.memory.services.defaultservice.DefaultService.GetPrometheusMetricsV1
     */
    getPrometheusMetricsV1: {
      name: "GetPrometheusMetricsV1",
      I: Empty,
      O: GetPrometheusMetricsV1Response,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc org.hyperledger.cacti.plugin.keychain.memory.services.defaultservice.DefaultService.HasKeychainEntryV1
     */
    hasKeychainEntryV1: {
      name: "HasKeychainEntryV1",
      I: HasKeychainEntryV1Request,
      O: HasKeychainEntryResponseV1PB,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc org.hyperledger.cacti.plugin.keychain.memory.services.defaultservice.DefaultService.SetKeychainEntryV1
     */
    setKeychainEntryV1: {
      name: "SetKeychainEntryV1",
      I: SetKeychainEntryV1Request,
      O: SetKeychainEntryResponseV1PB,
      kind: MethodKind.Unary,
    },
  }
} as const;

