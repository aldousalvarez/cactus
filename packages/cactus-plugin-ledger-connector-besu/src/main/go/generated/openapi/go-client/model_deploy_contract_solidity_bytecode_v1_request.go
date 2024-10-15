/*
Hyperledger Cactus Plugin - Connector Besu

Can perform basic tasks on a Besu ledger

API version: 2.0.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package cactus-plugin-ledger-connector-besu

import (
	"encoding/json"
)

// checks if the DeployContractSolidityBytecodeV1Request type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &DeployContractSolidityBytecodeV1Request{}

// DeployContractSolidityBytecodeV1Request struct for DeployContractSolidityBytecodeV1Request
type DeployContractSolidityBytecodeV1Request struct {
	// The contract name for retrieve the contracts json on the keychain.
	ContractName string `json:"contractName"`
	// The application binary interface of the solidity contract
	ContractAbi []interface{} `json:"contractAbi"`
	ConstructorArgs []interface{} `json:"constructorArgs"`
	Web3SigningCredential Web3SigningCredential `json:"web3SigningCredential"`
	// See https://ethereum.stackexchange.com/a/47556 regarding the maximum length of the bytecode
	Bytecode string `json:"bytecode"`
	// The keychainId for retrieve the contracts json.
	KeychainId string `json:"keychainId"`
	Gas *float32 `json:"gas,omitempty"`
	GasPrice *string `json:"gasPrice,omitempty"`
	// The amount of milliseconds to wait for a transaction receipt with theaddress of the contract(which indicates successful deployment) beforegiving up and crashing.
	TimeoutMs *float32 `json:"timeoutMs,omitempty"`
	PrivateTransactionConfig *BesuPrivateTransactionConfig `json:"privateTransactionConfig,omitempty"`
}

// NewDeployContractSolidityBytecodeV1Request instantiates a new DeployContractSolidityBytecodeV1Request object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewDeployContractSolidityBytecodeV1Request(contractName string, contractAbi []interface{}, constructorArgs []interface{}, web3SigningCredential Web3SigningCredential, bytecode string, keychainId string) *DeployContractSolidityBytecodeV1Request {
	this := DeployContractSolidityBytecodeV1Request{}
	this.ContractName = contractName
	this.ContractAbi = contractAbi
	this.ConstructorArgs = constructorArgs
	this.Web3SigningCredential = web3SigningCredential
	this.Bytecode = bytecode
	this.KeychainId = keychainId
	var timeoutMs float32 = 60000
	this.TimeoutMs = &timeoutMs
	return &this
}

// NewDeployContractSolidityBytecodeV1RequestWithDefaults instantiates a new DeployContractSolidityBytecodeV1Request object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewDeployContractSolidityBytecodeV1RequestWithDefaults() *DeployContractSolidityBytecodeV1Request {
	this := DeployContractSolidityBytecodeV1Request{}
	var timeoutMs float32 = 60000
	this.TimeoutMs = &timeoutMs
	return &this
}

// GetContractName returns the ContractName field value
func (o *DeployContractSolidityBytecodeV1Request) GetContractName() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.ContractName
}

// GetContractNameOk returns a tuple with the ContractName field value
// and a boolean to check if the value has been set.
func (o *DeployContractSolidityBytecodeV1Request) GetContractNameOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.ContractName, true
}

// SetContractName sets field value
func (o *DeployContractSolidityBytecodeV1Request) SetContractName(v string) {
	o.ContractName = v
}

// GetContractAbi returns the ContractAbi field value
func (o *DeployContractSolidityBytecodeV1Request) GetContractAbi() []interface{} {
	if o == nil {
		var ret []interface{}
		return ret
	}

	return o.ContractAbi
}

// GetContractAbiOk returns a tuple with the ContractAbi field value
// and a boolean to check if the value has been set.
func (o *DeployContractSolidityBytecodeV1Request) GetContractAbiOk() ([]interface{}, bool) {
	if o == nil {
		return nil, false
	}
	return o.ContractAbi, true
}

// SetContractAbi sets field value
func (o *DeployContractSolidityBytecodeV1Request) SetContractAbi(v []interface{}) {
	o.ContractAbi = v
}

// GetConstructorArgs returns the ConstructorArgs field value
func (o *DeployContractSolidityBytecodeV1Request) GetConstructorArgs() []interface{} {
	if o == nil {
		var ret []interface{}
		return ret
	}

	return o.ConstructorArgs
}

// GetConstructorArgsOk returns a tuple with the ConstructorArgs field value
// and a boolean to check if the value has been set.
func (o *DeployContractSolidityBytecodeV1Request) GetConstructorArgsOk() ([]interface{}, bool) {
	if o == nil {
		return nil, false
	}
	return o.ConstructorArgs, true
}

// SetConstructorArgs sets field value
func (o *DeployContractSolidityBytecodeV1Request) SetConstructorArgs(v []interface{}) {
	o.ConstructorArgs = v
}

// GetWeb3SigningCredential returns the Web3SigningCredential field value
func (o *DeployContractSolidityBytecodeV1Request) GetWeb3SigningCredential() Web3SigningCredential {
	if o == nil {
		var ret Web3SigningCredential
		return ret
	}

	return o.Web3SigningCredential
}

// GetWeb3SigningCredentialOk returns a tuple with the Web3SigningCredential field value
// and a boolean to check if the value has been set.
func (o *DeployContractSolidityBytecodeV1Request) GetWeb3SigningCredentialOk() (*Web3SigningCredential, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Web3SigningCredential, true
}

// SetWeb3SigningCredential sets field value
func (o *DeployContractSolidityBytecodeV1Request) SetWeb3SigningCredential(v Web3SigningCredential) {
	o.Web3SigningCredential = v
}

// GetBytecode returns the Bytecode field value
func (o *DeployContractSolidityBytecodeV1Request) GetBytecode() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Bytecode
}

// GetBytecodeOk returns a tuple with the Bytecode field value
// and a boolean to check if the value has been set.
func (o *DeployContractSolidityBytecodeV1Request) GetBytecodeOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Bytecode, true
}

// SetBytecode sets field value
func (o *DeployContractSolidityBytecodeV1Request) SetBytecode(v string) {
	o.Bytecode = v
}

// GetKeychainId returns the KeychainId field value
func (o *DeployContractSolidityBytecodeV1Request) GetKeychainId() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.KeychainId
}

// GetKeychainIdOk returns a tuple with the KeychainId field value
// and a boolean to check if the value has been set.
func (o *DeployContractSolidityBytecodeV1Request) GetKeychainIdOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.KeychainId, true
}

// SetKeychainId sets field value
func (o *DeployContractSolidityBytecodeV1Request) SetKeychainId(v string) {
	o.KeychainId = v
}

// GetGas returns the Gas field value if set, zero value otherwise.
func (o *DeployContractSolidityBytecodeV1Request) GetGas() float32 {
	if o == nil || IsNil(o.Gas) {
		var ret float32
		return ret
	}
	return *o.Gas
}

// GetGasOk returns a tuple with the Gas field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DeployContractSolidityBytecodeV1Request) GetGasOk() (*float32, bool) {
	if o == nil || IsNil(o.Gas) {
		return nil, false
	}
	return o.Gas, true
}

// HasGas returns a boolean if a field has been set.
func (o *DeployContractSolidityBytecodeV1Request) HasGas() bool {
	if o != nil && !IsNil(o.Gas) {
		return true
	}

	return false
}

// SetGas gets a reference to the given float32 and assigns it to the Gas field.
func (o *DeployContractSolidityBytecodeV1Request) SetGas(v float32) {
	o.Gas = &v
}

// GetGasPrice returns the GasPrice field value if set, zero value otherwise.
func (o *DeployContractSolidityBytecodeV1Request) GetGasPrice() string {
	if o == nil || IsNil(o.GasPrice) {
		var ret string
		return ret
	}
	return *o.GasPrice
}

// GetGasPriceOk returns a tuple with the GasPrice field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DeployContractSolidityBytecodeV1Request) GetGasPriceOk() (*string, bool) {
	if o == nil || IsNil(o.GasPrice) {
		return nil, false
	}
	return o.GasPrice, true
}

// HasGasPrice returns a boolean if a field has been set.
func (o *DeployContractSolidityBytecodeV1Request) HasGasPrice() bool {
	if o != nil && !IsNil(o.GasPrice) {
		return true
	}

	return false
}

// SetGasPrice gets a reference to the given string and assigns it to the GasPrice field.
func (o *DeployContractSolidityBytecodeV1Request) SetGasPrice(v string) {
	o.GasPrice = &v
}

// GetTimeoutMs returns the TimeoutMs field value if set, zero value otherwise.
func (o *DeployContractSolidityBytecodeV1Request) GetTimeoutMs() float32 {
	if o == nil || IsNil(o.TimeoutMs) {
		var ret float32
		return ret
	}
	return *o.TimeoutMs
}

// GetTimeoutMsOk returns a tuple with the TimeoutMs field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DeployContractSolidityBytecodeV1Request) GetTimeoutMsOk() (*float32, bool) {
	if o == nil || IsNil(o.TimeoutMs) {
		return nil, false
	}
	return o.TimeoutMs, true
}

// HasTimeoutMs returns a boolean if a field has been set.
func (o *DeployContractSolidityBytecodeV1Request) HasTimeoutMs() bool {
	if o != nil && !IsNil(o.TimeoutMs) {
		return true
	}

	return false
}

// SetTimeoutMs gets a reference to the given float32 and assigns it to the TimeoutMs field.
func (o *DeployContractSolidityBytecodeV1Request) SetTimeoutMs(v float32) {
	o.TimeoutMs = &v
}

// GetPrivateTransactionConfig returns the PrivateTransactionConfig field value if set, zero value otherwise.
func (o *DeployContractSolidityBytecodeV1Request) GetPrivateTransactionConfig() BesuPrivateTransactionConfig {
	if o == nil || IsNil(o.PrivateTransactionConfig) {
		var ret BesuPrivateTransactionConfig
		return ret
	}
	return *o.PrivateTransactionConfig
}

// GetPrivateTransactionConfigOk returns a tuple with the PrivateTransactionConfig field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DeployContractSolidityBytecodeV1Request) GetPrivateTransactionConfigOk() (*BesuPrivateTransactionConfig, bool) {
	if o == nil || IsNil(o.PrivateTransactionConfig) {
		return nil, false
	}
	return o.PrivateTransactionConfig, true
}

// HasPrivateTransactionConfig returns a boolean if a field has been set.
func (o *DeployContractSolidityBytecodeV1Request) HasPrivateTransactionConfig() bool {
	if o != nil && !IsNil(o.PrivateTransactionConfig) {
		return true
	}

	return false
}

// SetPrivateTransactionConfig gets a reference to the given BesuPrivateTransactionConfig and assigns it to the PrivateTransactionConfig field.
func (o *DeployContractSolidityBytecodeV1Request) SetPrivateTransactionConfig(v BesuPrivateTransactionConfig) {
	o.PrivateTransactionConfig = &v
}

func (o DeployContractSolidityBytecodeV1Request) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o DeployContractSolidityBytecodeV1Request) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["contractName"] = o.ContractName
	toSerialize["contractAbi"] = o.ContractAbi
	toSerialize["constructorArgs"] = o.ConstructorArgs
	toSerialize["web3SigningCredential"] = o.Web3SigningCredential
	toSerialize["bytecode"] = o.Bytecode
	toSerialize["keychainId"] = o.KeychainId
	if !IsNil(o.Gas) {
		toSerialize["gas"] = o.Gas
	}
	if !IsNil(o.GasPrice) {
		toSerialize["gasPrice"] = o.GasPrice
	}
	if !IsNil(o.TimeoutMs) {
		toSerialize["timeoutMs"] = o.TimeoutMs
	}
	if !IsNil(o.PrivateTransactionConfig) {
		toSerialize["privateTransactionConfig"] = o.PrivateTransactionConfig
	}
	return toSerialize, nil
}

type NullableDeployContractSolidityBytecodeV1Request struct {
	value *DeployContractSolidityBytecodeV1Request
	isSet bool
}

func (v NullableDeployContractSolidityBytecodeV1Request) Get() *DeployContractSolidityBytecodeV1Request {
	return v.value
}

func (v *NullableDeployContractSolidityBytecodeV1Request) Set(val *DeployContractSolidityBytecodeV1Request) {
	v.value = val
	v.isSet = true
}

func (v NullableDeployContractSolidityBytecodeV1Request) IsSet() bool {
	return v.isSet
}

func (v *NullableDeployContractSolidityBytecodeV1Request) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDeployContractSolidityBytecodeV1Request(val *DeployContractSolidityBytecodeV1Request) *NullableDeployContractSolidityBytecodeV1Request {
	return &NullableDeployContractSolidityBytecodeV1Request{value: val, isSet: true}
}

func (v NullableDeployContractSolidityBytecodeV1Request) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDeployContractSolidityBytecodeV1Request) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


