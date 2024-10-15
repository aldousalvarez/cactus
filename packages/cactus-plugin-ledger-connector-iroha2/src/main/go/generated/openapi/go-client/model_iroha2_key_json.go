/*
Hyperledger Cactus Plugin - Connector Iroha V2

Can perform basic tasks on a Iroha V2 ledger

API version: 2.0.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package cactus-plugin-ledger-connector-iroha2

import (
	"encoding/json"
)

// checks if the Iroha2KeyJson type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &Iroha2KeyJson{}

// Iroha2KeyJson Private/Public key JSON containing payload and digest function.
type Iroha2KeyJson struct {
	DigestFunction string `json:"digestFunction"`
	Payload string `json:"payload"`
}

// NewIroha2KeyJson instantiates a new Iroha2KeyJson object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewIroha2KeyJson(digestFunction string, payload string) *Iroha2KeyJson {
	this := Iroha2KeyJson{}
	this.DigestFunction = digestFunction
	this.Payload = payload
	return &this
}

// NewIroha2KeyJsonWithDefaults instantiates a new Iroha2KeyJson object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewIroha2KeyJsonWithDefaults() *Iroha2KeyJson {
	this := Iroha2KeyJson{}
	return &this
}

// GetDigestFunction returns the DigestFunction field value
func (o *Iroha2KeyJson) GetDigestFunction() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.DigestFunction
}

// GetDigestFunctionOk returns a tuple with the DigestFunction field value
// and a boolean to check if the value has been set.
func (o *Iroha2KeyJson) GetDigestFunctionOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.DigestFunction, true
}

// SetDigestFunction sets field value
func (o *Iroha2KeyJson) SetDigestFunction(v string) {
	o.DigestFunction = v
}

// GetPayload returns the Payload field value
func (o *Iroha2KeyJson) GetPayload() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Payload
}

// GetPayloadOk returns a tuple with the Payload field value
// and a boolean to check if the value has been set.
func (o *Iroha2KeyJson) GetPayloadOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Payload, true
}

// SetPayload sets field value
func (o *Iroha2KeyJson) SetPayload(v string) {
	o.Payload = v
}

func (o Iroha2KeyJson) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o Iroha2KeyJson) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["digestFunction"] = o.DigestFunction
	toSerialize["payload"] = o.Payload
	return toSerialize, nil
}

type NullableIroha2KeyJson struct {
	value *Iroha2KeyJson
	isSet bool
}

func (v NullableIroha2KeyJson) Get() *Iroha2KeyJson {
	return v.value
}

func (v *NullableIroha2KeyJson) Set(val *Iroha2KeyJson) {
	v.value = val
	v.isSet = true
}

func (v NullableIroha2KeyJson) IsSet() bool {
	return v.isSet
}

func (v *NullableIroha2KeyJson) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableIroha2KeyJson(val *Iroha2KeyJson) *NullableIroha2KeyJson {
	return &NullableIroha2KeyJson{value: val, isSet: true}
}

func (v NullableIroha2KeyJson) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableIroha2KeyJson) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


