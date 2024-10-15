/*
Hyperledger Cacti Plugin - Connector Ethereum

Can perform basic tasks on a Ethereum ledger

API version: 2.0.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package cactus-plugin-ledger-connector-ethereum

import (
	"encoding/json"
)

// checks if the WatchBlocksV1BlockData type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &WatchBlocksV1BlockData{}

// WatchBlocksV1BlockData struct for WatchBlocksV1BlockData
type WatchBlocksV1BlockData struct {
	Number string `json:"number"`
	Hash *string `json:"hash,omitempty"`
	ParentHash string `json:"parentHash"`
	Nonce string `json:"nonce"`
	Sha3Uncles string `json:"sha3Uncles"`
	LogsBloom *string `json:"logsBloom,omitempty"`
	TransactionsRoot *string `json:"transactionsRoot,omitempty"`
	StateRoot string `json:"stateRoot"`
	ReceiptsRoot *string `json:"receiptsRoot,omitempty"`
	Difficulty *string `json:"difficulty,omitempty"`
	MixHash *string `json:"mixHash,omitempty"`
	Miner string `json:"miner"`
	ExtraData string `json:"extraData"`
	GasLimit string `json:"gasLimit"`
	GasUsed string `json:"gasUsed"`
	Timestamp WatchBlocksV1BlockDataTimestamp `json:"timestamp"`
	Size string `json:"size"`
	TotalDifficulty string `json:"totalDifficulty"`
	Uncles []string `json:"uncles"`
	BaseFeePerGas *string `json:"baseFeePerGas,omitempty"`
	Transactions []Web3Transaction `json:"transactions"`
}

// NewWatchBlocksV1BlockData instantiates a new WatchBlocksV1BlockData object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewWatchBlocksV1BlockData(number string, parentHash string, nonce string, sha3Uncles string, stateRoot string, miner string, extraData string, gasLimit string, gasUsed string, timestamp WatchBlocksV1BlockDataTimestamp, size string, totalDifficulty string, uncles []string, transactions []Web3Transaction) *WatchBlocksV1BlockData {
	this := WatchBlocksV1BlockData{}
	this.Number = number
	this.ParentHash = parentHash
	this.Nonce = nonce
	this.Sha3Uncles = sha3Uncles
	this.StateRoot = stateRoot
	this.Miner = miner
	this.ExtraData = extraData
	this.GasLimit = gasLimit
	this.GasUsed = gasUsed
	this.Timestamp = timestamp
	this.Size = size
	this.TotalDifficulty = totalDifficulty
	this.Uncles = uncles
	this.Transactions = transactions
	return &this
}

// NewWatchBlocksV1BlockDataWithDefaults instantiates a new WatchBlocksV1BlockData object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewWatchBlocksV1BlockDataWithDefaults() *WatchBlocksV1BlockData {
	this := WatchBlocksV1BlockData{}
	return &this
}

// GetNumber returns the Number field value
func (o *WatchBlocksV1BlockData) GetNumber() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Number
}

// GetNumberOk returns a tuple with the Number field value
// and a boolean to check if the value has been set.
func (o *WatchBlocksV1BlockData) GetNumberOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Number, true
}

// SetNumber sets field value
func (o *WatchBlocksV1BlockData) SetNumber(v string) {
	o.Number = v
}

// GetHash returns the Hash field value if set, zero value otherwise.
func (o *WatchBlocksV1BlockData) GetHash() string {
	if o == nil || IsNil(o.Hash) {
		var ret string
		return ret
	}
	return *o.Hash
}

// GetHashOk returns a tuple with the Hash field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WatchBlocksV1BlockData) GetHashOk() (*string, bool) {
	if o == nil || IsNil(o.Hash) {
		return nil, false
	}
	return o.Hash, true
}

// HasHash returns a boolean if a field has been set.
func (o *WatchBlocksV1BlockData) HasHash() bool {
	if o != nil && !IsNil(o.Hash) {
		return true
	}

	return false
}

// SetHash gets a reference to the given string and assigns it to the Hash field.
func (o *WatchBlocksV1BlockData) SetHash(v string) {
	o.Hash = &v
}

// GetParentHash returns the ParentHash field value
func (o *WatchBlocksV1BlockData) GetParentHash() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.ParentHash
}

// GetParentHashOk returns a tuple with the ParentHash field value
// and a boolean to check if the value has been set.
func (o *WatchBlocksV1BlockData) GetParentHashOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.ParentHash, true
}

// SetParentHash sets field value
func (o *WatchBlocksV1BlockData) SetParentHash(v string) {
	o.ParentHash = v
}

// GetNonce returns the Nonce field value
func (o *WatchBlocksV1BlockData) GetNonce() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Nonce
}

// GetNonceOk returns a tuple with the Nonce field value
// and a boolean to check if the value has been set.
func (o *WatchBlocksV1BlockData) GetNonceOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Nonce, true
}

// SetNonce sets field value
func (o *WatchBlocksV1BlockData) SetNonce(v string) {
	o.Nonce = v
}

// GetSha3Uncles returns the Sha3Uncles field value
func (o *WatchBlocksV1BlockData) GetSha3Uncles() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Sha3Uncles
}

// GetSha3UnclesOk returns a tuple with the Sha3Uncles field value
// and a boolean to check if the value has been set.
func (o *WatchBlocksV1BlockData) GetSha3UnclesOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Sha3Uncles, true
}

// SetSha3Uncles sets field value
func (o *WatchBlocksV1BlockData) SetSha3Uncles(v string) {
	o.Sha3Uncles = v
}

// GetLogsBloom returns the LogsBloom field value if set, zero value otherwise.
func (o *WatchBlocksV1BlockData) GetLogsBloom() string {
	if o == nil || IsNil(o.LogsBloom) {
		var ret string
		return ret
	}
	return *o.LogsBloom
}

// GetLogsBloomOk returns a tuple with the LogsBloom field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WatchBlocksV1BlockData) GetLogsBloomOk() (*string, bool) {
	if o == nil || IsNil(o.LogsBloom) {
		return nil, false
	}
	return o.LogsBloom, true
}

// HasLogsBloom returns a boolean if a field has been set.
func (o *WatchBlocksV1BlockData) HasLogsBloom() bool {
	if o != nil && !IsNil(o.LogsBloom) {
		return true
	}

	return false
}

// SetLogsBloom gets a reference to the given string and assigns it to the LogsBloom field.
func (o *WatchBlocksV1BlockData) SetLogsBloom(v string) {
	o.LogsBloom = &v
}

// GetTransactionsRoot returns the TransactionsRoot field value if set, zero value otherwise.
func (o *WatchBlocksV1BlockData) GetTransactionsRoot() string {
	if o == nil || IsNil(o.TransactionsRoot) {
		var ret string
		return ret
	}
	return *o.TransactionsRoot
}

// GetTransactionsRootOk returns a tuple with the TransactionsRoot field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WatchBlocksV1BlockData) GetTransactionsRootOk() (*string, bool) {
	if o == nil || IsNil(o.TransactionsRoot) {
		return nil, false
	}
	return o.TransactionsRoot, true
}

// HasTransactionsRoot returns a boolean if a field has been set.
func (o *WatchBlocksV1BlockData) HasTransactionsRoot() bool {
	if o != nil && !IsNil(o.TransactionsRoot) {
		return true
	}

	return false
}

// SetTransactionsRoot gets a reference to the given string and assigns it to the TransactionsRoot field.
func (o *WatchBlocksV1BlockData) SetTransactionsRoot(v string) {
	o.TransactionsRoot = &v
}

// GetStateRoot returns the StateRoot field value
func (o *WatchBlocksV1BlockData) GetStateRoot() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.StateRoot
}

// GetStateRootOk returns a tuple with the StateRoot field value
// and a boolean to check if the value has been set.
func (o *WatchBlocksV1BlockData) GetStateRootOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.StateRoot, true
}

// SetStateRoot sets field value
func (o *WatchBlocksV1BlockData) SetStateRoot(v string) {
	o.StateRoot = v
}

// GetReceiptsRoot returns the ReceiptsRoot field value if set, zero value otherwise.
func (o *WatchBlocksV1BlockData) GetReceiptsRoot() string {
	if o == nil || IsNil(o.ReceiptsRoot) {
		var ret string
		return ret
	}
	return *o.ReceiptsRoot
}

// GetReceiptsRootOk returns a tuple with the ReceiptsRoot field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WatchBlocksV1BlockData) GetReceiptsRootOk() (*string, bool) {
	if o == nil || IsNil(o.ReceiptsRoot) {
		return nil, false
	}
	return o.ReceiptsRoot, true
}

// HasReceiptsRoot returns a boolean if a field has been set.
func (o *WatchBlocksV1BlockData) HasReceiptsRoot() bool {
	if o != nil && !IsNil(o.ReceiptsRoot) {
		return true
	}

	return false
}

// SetReceiptsRoot gets a reference to the given string and assigns it to the ReceiptsRoot field.
func (o *WatchBlocksV1BlockData) SetReceiptsRoot(v string) {
	o.ReceiptsRoot = &v
}

// GetDifficulty returns the Difficulty field value if set, zero value otherwise.
func (o *WatchBlocksV1BlockData) GetDifficulty() string {
	if o == nil || IsNil(o.Difficulty) {
		var ret string
		return ret
	}
	return *o.Difficulty
}

// GetDifficultyOk returns a tuple with the Difficulty field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WatchBlocksV1BlockData) GetDifficultyOk() (*string, bool) {
	if o == nil || IsNil(o.Difficulty) {
		return nil, false
	}
	return o.Difficulty, true
}

// HasDifficulty returns a boolean if a field has been set.
func (o *WatchBlocksV1BlockData) HasDifficulty() bool {
	if o != nil && !IsNil(o.Difficulty) {
		return true
	}

	return false
}

// SetDifficulty gets a reference to the given string and assigns it to the Difficulty field.
func (o *WatchBlocksV1BlockData) SetDifficulty(v string) {
	o.Difficulty = &v
}

// GetMixHash returns the MixHash field value if set, zero value otherwise.
func (o *WatchBlocksV1BlockData) GetMixHash() string {
	if o == nil || IsNil(o.MixHash) {
		var ret string
		return ret
	}
	return *o.MixHash
}

// GetMixHashOk returns a tuple with the MixHash field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WatchBlocksV1BlockData) GetMixHashOk() (*string, bool) {
	if o == nil || IsNil(o.MixHash) {
		return nil, false
	}
	return o.MixHash, true
}

// HasMixHash returns a boolean if a field has been set.
func (o *WatchBlocksV1BlockData) HasMixHash() bool {
	if o != nil && !IsNil(o.MixHash) {
		return true
	}

	return false
}

// SetMixHash gets a reference to the given string and assigns it to the MixHash field.
func (o *WatchBlocksV1BlockData) SetMixHash(v string) {
	o.MixHash = &v
}

// GetMiner returns the Miner field value
func (o *WatchBlocksV1BlockData) GetMiner() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Miner
}

// GetMinerOk returns a tuple with the Miner field value
// and a boolean to check if the value has been set.
func (o *WatchBlocksV1BlockData) GetMinerOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Miner, true
}

// SetMiner sets field value
func (o *WatchBlocksV1BlockData) SetMiner(v string) {
	o.Miner = v
}

// GetExtraData returns the ExtraData field value
func (o *WatchBlocksV1BlockData) GetExtraData() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.ExtraData
}

// GetExtraDataOk returns a tuple with the ExtraData field value
// and a boolean to check if the value has been set.
func (o *WatchBlocksV1BlockData) GetExtraDataOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.ExtraData, true
}

// SetExtraData sets field value
func (o *WatchBlocksV1BlockData) SetExtraData(v string) {
	o.ExtraData = v
}

// GetGasLimit returns the GasLimit field value
func (o *WatchBlocksV1BlockData) GetGasLimit() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.GasLimit
}

// GetGasLimitOk returns a tuple with the GasLimit field value
// and a boolean to check if the value has been set.
func (o *WatchBlocksV1BlockData) GetGasLimitOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.GasLimit, true
}

// SetGasLimit sets field value
func (o *WatchBlocksV1BlockData) SetGasLimit(v string) {
	o.GasLimit = v
}

// GetGasUsed returns the GasUsed field value
func (o *WatchBlocksV1BlockData) GetGasUsed() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.GasUsed
}

// GetGasUsedOk returns a tuple with the GasUsed field value
// and a boolean to check if the value has been set.
func (o *WatchBlocksV1BlockData) GetGasUsedOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.GasUsed, true
}

// SetGasUsed sets field value
func (o *WatchBlocksV1BlockData) SetGasUsed(v string) {
	o.GasUsed = v
}

// GetTimestamp returns the Timestamp field value
func (o *WatchBlocksV1BlockData) GetTimestamp() WatchBlocksV1BlockDataTimestamp {
	if o == nil {
		var ret WatchBlocksV1BlockDataTimestamp
		return ret
	}

	return o.Timestamp
}

// GetTimestampOk returns a tuple with the Timestamp field value
// and a boolean to check if the value has been set.
func (o *WatchBlocksV1BlockData) GetTimestampOk() (*WatchBlocksV1BlockDataTimestamp, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Timestamp, true
}

// SetTimestamp sets field value
func (o *WatchBlocksV1BlockData) SetTimestamp(v WatchBlocksV1BlockDataTimestamp) {
	o.Timestamp = v
}

// GetSize returns the Size field value
func (o *WatchBlocksV1BlockData) GetSize() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Size
}

// GetSizeOk returns a tuple with the Size field value
// and a boolean to check if the value has been set.
func (o *WatchBlocksV1BlockData) GetSizeOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Size, true
}

// SetSize sets field value
func (o *WatchBlocksV1BlockData) SetSize(v string) {
	o.Size = v
}

// GetTotalDifficulty returns the TotalDifficulty field value
func (o *WatchBlocksV1BlockData) GetTotalDifficulty() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.TotalDifficulty
}

// GetTotalDifficultyOk returns a tuple with the TotalDifficulty field value
// and a boolean to check if the value has been set.
func (o *WatchBlocksV1BlockData) GetTotalDifficultyOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.TotalDifficulty, true
}

// SetTotalDifficulty sets field value
func (o *WatchBlocksV1BlockData) SetTotalDifficulty(v string) {
	o.TotalDifficulty = v
}

// GetUncles returns the Uncles field value
func (o *WatchBlocksV1BlockData) GetUncles() []string {
	if o == nil {
		var ret []string
		return ret
	}

	return o.Uncles
}

// GetUnclesOk returns a tuple with the Uncles field value
// and a boolean to check if the value has been set.
func (o *WatchBlocksV1BlockData) GetUnclesOk() ([]string, bool) {
	if o == nil {
		return nil, false
	}
	return o.Uncles, true
}

// SetUncles sets field value
func (o *WatchBlocksV1BlockData) SetUncles(v []string) {
	o.Uncles = v
}

// GetBaseFeePerGas returns the BaseFeePerGas field value if set, zero value otherwise.
func (o *WatchBlocksV1BlockData) GetBaseFeePerGas() string {
	if o == nil || IsNil(o.BaseFeePerGas) {
		var ret string
		return ret
	}
	return *o.BaseFeePerGas
}

// GetBaseFeePerGasOk returns a tuple with the BaseFeePerGas field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WatchBlocksV1BlockData) GetBaseFeePerGasOk() (*string, bool) {
	if o == nil || IsNil(o.BaseFeePerGas) {
		return nil, false
	}
	return o.BaseFeePerGas, true
}

// HasBaseFeePerGas returns a boolean if a field has been set.
func (o *WatchBlocksV1BlockData) HasBaseFeePerGas() bool {
	if o != nil && !IsNil(o.BaseFeePerGas) {
		return true
	}

	return false
}

// SetBaseFeePerGas gets a reference to the given string and assigns it to the BaseFeePerGas field.
func (o *WatchBlocksV1BlockData) SetBaseFeePerGas(v string) {
	o.BaseFeePerGas = &v
}

// GetTransactions returns the Transactions field value
func (o *WatchBlocksV1BlockData) GetTransactions() []Web3Transaction {
	if o == nil {
		var ret []Web3Transaction
		return ret
	}

	return o.Transactions
}

// GetTransactionsOk returns a tuple with the Transactions field value
// and a boolean to check if the value has been set.
func (o *WatchBlocksV1BlockData) GetTransactionsOk() ([]Web3Transaction, bool) {
	if o == nil {
		return nil, false
	}
	return o.Transactions, true
}

// SetTransactions sets field value
func (o *WatchBlocksV1BlockData) SetTransactions(v []Web3Transaction) {
	o.Transactions = v
}

func (o WatchBlocksV1BlockData) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o WatchBlocksV1BlockData) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["number"] = o.Number
	if !IsNil(o.Hash) {
		toSerialize["hash"] = o.Hash
	}
	toSerialize["parentHash"] = o.ParentHash
	toSerialize["nonce"] = o.Nonce
	toSerialize["sha3Uncles"] = o.Sha3Uncles
	if !IsNil(o.LogsBloom) {
		toSerialize["logsBloom"] = o.LogsBloom
	}
	if !IsNil(o.TransactionsRoot) {
		toSerialize["transactionsRoot"] = o.TransactionsRoot
	}
	toSerialize["stateRoot"] = o.StateRoot
	if !IsNil(o.ReceiptsRoot) {
		toSerialize["receiptsRoot"] = o.ReceiptsRoot
	}
	if !IsNil(o.Difficulty) {
		toSerialize["difficulty"] = o.Difficulty
	}
	if !IsNil(o.MixHash) {
		toSerialize["mixHash"] = o.MixHash
	}
	toSerialize["miner"] = o.Miner
	toSerialize["extraData"] = o.ExtraData
	toSerialize["gasLimit"] = o.GasLimit
	toSerialize["gasUsed"] = o.GasUsed
	toSerialize["timestamp"] = o.Timestamp
	toSerialize["size"] = o.Size
	toSerialize["totalDifficulty"] = o.TotalDifficulty
	toSerialize["uncles"] = o.Uncles
	if !IsNil(o.BaseFeePerGas) {
		toSerialize["baseFeePerGas"] = o.BaseFeePerGas
	}
	toSerialize["transactions"] = o.Transactions
	return toSerialize, nil
}

type NullableWatchBlocksV1BlockData struct {
	value *WatchBlocksV1BlockData
	isSet bool
}

func (v NullableWatchBlocksV1BlockData) Get() *WatchBlocksV1BlockData {
	return v.value
}

func (v *NullableWatchBlocksV1BlockData) Set(val *WatchBlocksV1BlockData) {
	v.value = val
	v.isSet = true
}

func (v NullableWatchBlocksV1BlockData) IsSet() bool {
	return v.isSet
}

func (v *NullableWatchBlocksV1BlockData) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableWatchBlocksV1BlockData(val *WatchBlocksV1BlockData) *NullableWatchBlocksV1BlockData {
	return &NullableWatchBlocksV1BlockData{value: val, isSet: true}
}

func (v NullableWatchBlocksV1BlockData) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableWatchBlocksV1BlockData) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


