/*
Hyperledger Cactus Plugin - Connector Besu

Can perform basic tasks on a Besu ledger

API version: 2.0.0-rc.4
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package cactus-plugin-ledger-connector-besu

import (
	"encoding/json"
)

// checks if the GetPastLogsV1Response type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GetPastLogsV1Response{}

// GetPastLogsV1Response struct for GetPastLogsV1Response
type GetPastLogsV1Response struct {
	Logs []EvmLog `json:"logs"`
}

// NewGetPastLogsV1Response instantiates a new GetPastLogsV1Response object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGetPastLogsV1Response(logs []EvmLog) *GetPastLogsV1Response {
	this := GetPastLogsV1Response{}
	this.Logs = logs
	return &this
}

// NewGetPastLogsV1ResponseWithDefaults instantiates a new GetPastLogsV1Response object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGetPastLogsV1ResponseWithDefaults() *GetPastLogsV1Response {
	this := GetPastLogsV1Response{}
	return &this
}

// GetLogs returns the Logs field value
func (o *GetPastLogsV1Response) GetLogs() []EvmLog {
	if o == nil {
		var ret []EvmLog
		return ret
	}

	return o.Logs
}

// GetLogsOk returns a tuple with the Logs field value
// and a boolean to check if the value has been set.
func (o *GetPastLogsV1Response) GetLogsOk() ([]EvmLog, bool) {
	if o == nil {
		return nil, false
	}
	return o.Logs, true
}

// SetLogs sets field value
func (o *GetPastLogsV1Response) SetLogs(v []EvmLog) {
	o.Logs = v
}

func (o GetPastLogsV1Response) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GetPastLogsV1Response) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["logs"] = o.Logs
	return toSerialize, nil
}

type NullableGetPastLogsV1Response struct {
	value *GetPastLogsV1Response
	isSet bool
}

func (v NullableGetPastLogsV1Response) Get() *GetPastLogsV1Response {
	return v.value
}

func (v *NullableGetPastLogsV1Response) Set(val *GetPastLogsV1Response) {
	v.value = val
	v.isSet = true
}

func (v NullableGetPastLogsV1Response) IsSet() bool {
	return v.isSet
}

func (v *NullableGetPastLogsV1Response) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGetPastLogsV1Response(val *GetPastLogsV1Response) *NullableGetPastLogsV1Response {
	return &NullableGetPastLogsV1Response{value: val, isSet: true}
}

func (v NullableGetPastLogsV1Response) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGetPastLogsV1Response) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

