/*
Hyperledger Cactus Plugin - Connector Polkadot

Can perform basic tasks on a Polkadot parachain

API version: 2.0.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package cactus-plugin-ledger-connector-polkadot

import (
	"encoding/json"
	"fmt"
)

// DeployContractInkRequestStorageDepositLimit - struct for DeployContractInkRequestStorageDepositLimit
type DeployContractInkRequestStorageDepositLimit struct {
	Int32 *int32
	String *string
}

// int32AsDeployContractInkRequestStorageDepositLimit is a convenience function that returns int32 wrapped in DeployContractInkRequestStorageDepositLimit
func Int32AsDeployContractInkRequestStorageDepositLimit(v *int32) DeployContractInkRequestStorageDepositLimit {
	return DeployContractInkRequestStorageDepositLimit{
		Int32: v,
	}
}

// stringAsDeployContractInkRequestStorageDepositLimit is a convenience function that returns string wrapped in DeployContractInkRequestStorageDepositLimit
func StringAsDeployContractInkRequestStorageDepositLimit(v *string) DeployContractInkRequestStorageDepositLimit {
	return DeployContractInkRequestStorageDepositLimit{
		String: v,
	}
}


// Unmarshal JSON data into one of the pointers in the struct
func (dst *DeployContractInkRequestStorageDepositLimit) UnmarshalJSON(data []byte) error {
	var err error
	// this object is nullable so check if the payload is null or empty string
	if string(data) == "" || string(data) == "{}" {
		return nil
	}

	match := 0
	// try to unmarshal data into Int32
	err = newStrictDecoder(data).Decode(&dst.Int32)
	if err == nil {
		jsonInt32, _ := json.Marshal(dst.Int32)
		if string(jsonInt32) == "{}" { // empty struct
			dst.Int32 = nil
		} else {
			match++
		}
	} else {
		dst.Int32 = nil
	}

	// try to unmarshal data into String
	err = newStrictDecoder(data).Decode(&dst.String)
	if err == nil {
		jsonString, _ := json.Marshal(dst.String)
		if string(jsonString) == "{}" { // empty struct
			dst.String = nil
		} else {
			match++
		}
	} else {
		dst.String = nil
	}

	if match > 1 { // more than 1 match
		// reset to nil
		dst.Int32 = nil
		dst.String = nil

		return fmt.Errorf("data matches more than one schema in oneOf(DeployContractInkRequestStorageDepositLimit)")
	} else if match == 1 {
		return nil // exactly one match
	} else { // no match
		return fmt.Errorf("data failed to match schemas in oneOf(DeployContractInkRequestStorageDepositLimit)")
	}
}

// Marshal data from the first non-nil pointers in the struct to JSON
func (src DeployContractInkRequestStorageDepositLimit) MarshalJSON() ([]byte, error) {
	if src.Int32 != nil {
		return json.Marshal(&src.Int32)
	}

	if src.String != nil {
		return json.Marshal(&src.String)
	}

	return nil, nil // no data in oneOf schemas
}

// Get the actual instance
func (obj *DeployContractInkRequestStorageDepositLimit) GetActualInstance() (interface{}) {
	if obj == nil {
		return nil
	}
	if obj.Int32 != nil {
		return obj.Int32
	}

	if obj.String != nil {
		return obj.String
	}

	// all schemas are nil
	return nil
}

type NullableDeployContractInkRequestStorageDepositLimit struct {
	value *DeployContractInkRequestStorageDepositLimit
	isSet bool
}

func (v NullableDeployContractInkRequestStorageDepositLimit) Get() *DeployContractInkRequestStorageDepositLimit {
	return v.value
}

func (v *NullableDeployContractInkRequestStorageDepositLimit) Set(val *DeployContractInkRequestStorageDepositLimit) {
	v.value = val
	v.isSet = true
}

func (v NullableDeployContractInkRequestStorageDepositLimit) IsSet() bool {
	return v.isSet
}

func (v *NullableDeployContractInkRequestStorageDepositLimit) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDeployContractInkRequestStorageDepositLimit(val *DeployContractInkRequestStorageDepositLimit) *NullableDeployContractInkRequestStorageDepositLimit {
	return &NullableDeployContractInkRequestStorageDepositLimit{value: val, isSet: true}
}

func (v NullableDeployContractInkRequestStorageDepositLimit) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDeployContractInkRequestStorageDepositLimit) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


