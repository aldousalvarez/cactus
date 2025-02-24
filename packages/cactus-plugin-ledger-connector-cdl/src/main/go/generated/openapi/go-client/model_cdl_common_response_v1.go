/*
Hyperledger Cacti Plugin - Connector CDL

Can perform basic tasks on Fujitsu CDL service.

API version: 2.1.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package cactus-plugin-ledger-connector-cdl

import (
	"encoding/json"
)

// checks if the CDLCommonResponseV1 type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CDLCommonResponseV1{}

// CDLCommonResponseV1 struct for CDLCommonResponseV1
type CDLCommonResponseV1 struct {
	Detail interface{} `json:"detail,omitempty"`
	Result String `json:"result"`
}

// NewCDLCommonResponseV1 instantiates a new CDLCommonResponseV1 object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCDLCommonResponseV1(result String) *CDLCommonResponseV1 {
	this := CDLCommonResponseV1{}
	this.Result = result
	return &this
}

// NewCDLCommonResponseV1WithDefaults instantiates a new CDLCommonResponseV1 object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCDLCommonResponseV1WithDefaults() *CDLCommonResponseV1 {
	this := CDLCommonResponseV1{}
	return &this
}

// GetDetail returns the Detail field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *CDLCommonResponseV1) GetDetail() interface{} {
	if o == nil {
		var ret interface{}
		return ret
	}
	return o.Detail
}

// GetDetailOk returns a tuple with the Detail field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *CDLCommonResponseV1) GetDetailOk() (*interface{}, bool) {
	if o == nil || IsNil(o.Detail) {
		return nil, false
	}
	return &o.Detail, true
}

// HasDetail returns a boolean if a field has been set.
func (o *CDLCommonResponseV1) HasDetail() bool {
	if o != nil && IsNil(o.Detail) {
		return true
	}

	return false
}

// SetDetail gets a reference to the given interface{} and assigns it to the Detail field.
func (o *CDLCommonResponseV1) SetDetail(v interface{}) {
	o.Detail = v
}

// GetResult returns the Result field value
func (o *CDLCommonResponseV1) GetResult() String {
	if o == nil {
		var ret String
		return ret
	}

	return o.Result
}

// GetResultOk returns a tuple with the Result field value
// and a boolean to check if the value has been set.
func (o *CDLCommonResponseV1) GetResultOk() (*String, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Result, true
}

// SetResult sets field value
func (o *CDLCommonResponseV1) SetResult(v String) {
	o.Result = v
}

func (o CDLCommonResponseV1) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CDLCommonResponseV1) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if o.Detail != nil {
		toSerialize["detail"] = o.Detail
	}
	toSerialize["result"] = o.Result
	return toSerialize, nil
}

type NullableCDLCommonResponseV1 struct {
	value *CDLCommonResponseV1
	isSet bool
}

func (v NullableCDLCommonResponseV1) Get() *CDLCommonResponseV1 {
	return v.value
}

func (v *NullableCDLCommonResponseV1) Set(val *CDLCommonResponseV1) {
	v.value = val
	v.isSet = true
}

func (v NullableCDLCommonResponseV1) IsSet() bool {
	return v.isSet
}

func (v *NullableCDLCommonResponseV1) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCDLCommonResponseV1(val *CDLCommonResponseV1) *NullableCDLCommonResponseV1 {
	return &NullableCDLCommonResponseV1{value: val, isSet: true}
}

func (v NullableCDLCommonResponseV1) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCDLCommonResponseV1) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


