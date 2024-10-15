/*
Hyperledger Cacti Plugin - Connector Corda

Can perform basic tasks on a Corda ledger

API version: 2.0.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package cactus-plugin-ledger-connector-corda

import (
	"encoding/json"
)

// checks if the CordaX500Name type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CordaX500Name{}

// CordaX500Name struct for CordaX500Name
type CordaX500Name struct {
	CommonName *string `json:"commonName,omitempty"`
	OrganisationUnit *string `json:"organisationUnit,omitempty"`
	Organisation string `json:"organisation"`
	Locality string `json:"locality"`
	State *string `json:"state,omitempty"`
	Country string `json:"country"`
	X500Principal X500Principal `json:"x500Principal"`
}

// NewCordaX500Name instantiates a new CordaX500Name object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCordaX500Name(organisation string, locality string, country string, x500Principal X500Principal) *CordaX500Name {
	this := CordaX500Name{}
	this.Organisation = organisation
	this.Locality = locality
	this.Country = country
	this.X500Principal = x500Principal
	return &this
}

// NewCordaX500NameWithDefaults instantiates a new CordaX500Name object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCordaX500NameWithDefaults() *CordaX500Name {
	this := CordaX500Name{}
	return &this
}

// GetCommonName returns the CommonName field value if set, zero value otherwise.
func (o *CordaX500Name) GetCommonName() string {
	if o == nil || IsNil(o.CommonName) {
		var ret string
		return ret
	}
	return *o.CommonName
}

// GetCommonNameOk returns a tuple with the CommonName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CordaX500Name) GetCommonNameOk() (*string, bool) {
	if o == nil || IsNil(o.CommonName) {
		return nil, false
	}
	return o.CommonName, true
}

// HasCommonName returns a boolean if a field has been set.
func (o *CordaX500Name) HasCommonName() bool {
	if o != nil && !IsNil(o.CommonName) {
		return true
	}

	return false
}

// SetCommonName gets a reference to the given string and assigns it to the CommonName field.
func (o *CordaX500Name) SetCommonName(v string) {
	o.CommonName = &v
}

// GetOrganisationUnit returns the OrganisationUnit field value if set, zero value otherwise.
func (o *CordaX500Name) GetOrganisationUnit() string {
	if o == nil || IsNil(o.OrganisationUnit) {
		var ret string
		return ret
	}
	return *o.OrganisationUnit
}

// GetOrganisationUnitOk returns a tuple with the OrganisationUnit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CordaX500Name) GetOrganisationUnitOk() (*string, bool) {
	if o == nil || IsNil(o.OrganisationUnit) {
		return nil, false
	}
	return o.OrganisationUnit, true
}

// HasOrganisationUnit returns a boolean if a field has been set.
func (o *CordaX500Name) HasOrganisationUnit() bool {
	if o != nil && !IsNil(o.OrganisationUnit) {
		return true
	}

	return false
}

// SetOrganisationUnit gets a reference to the given string and assigns it to the OrganisationUnit field.
func (o *CordaX500Name) SetOrganisationUnit(v string) {
	o.OrganisationUnit = &v
}

// GetOrganisation returns the Organisation field value
func (o *CordaX500Name) GetOrganisation() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Organisation
}

// GetOrganisationOk returns a tuple with the Organisation field value
// and a boolean to check if the value has been set.
func (o *CordaX500Name) GetOrganisationOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Organisation, true
}

// SetOrganisation sets field value
func (o *CordaX500Name) SetOrganisation(v string) {
	o.Organisation = v
}

// GetLocality returns the Locality field value
func (o *CordaX500Name) GetLocality() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Locality
}

// GetLocalityOk returns a tuple with the Locality field value
// and a boolean to check if the value has been set.
func (o *CordaX500Name) GetLocalityOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Locality, true
}

// SetLocality sets field value
func (o *CordaX500Name) SetLocality(v string) {
	o.Locality = v
}

// GetState returns the State field value if set, zero value otherwise.
func (o *CordaX500Name) GetState() string {
	if o == nil || IsNil(o.State) {
		var ret string
		return ret
	}
	return *o.State
}

// GetStateOk returns a tuple with the State field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CordaX500Name) GetStateOk() (*string, bool) {
	if o == nil || IsNil(o.State) {
		return nil, false
	}
	return o.State, true
}

// HasState returns a boolean if a field has been set.
func (o *CordaX500Name) HasState() bool {
	if o != nil && !IsNil(o.State) {
		return true
	}

	return false
}

// SetState gets a reference to the given string and assigns it to the State field.
func (o *CordaX500Name) SetState(v string) {
	o.State = &v
}

// GetCountry returns the Country field value
func (o *CordaX500Name) GetCountry() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Country
}

// GetCountryOk returns a tuple with the Country field value
// and a boolean to check if the value has been set.
func (o *CordaX500Name) GetCountryOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Country, true
}

// SetCountry sets field value
func (o *CordaX500Name) SetCountry(v string) {
	o.Country = v
}

// GetX500Principal returns the X500Principal field value
func (o *CordaX500Name) GetX500Principal() X500Principal {
	if o == nil {
		var ret X500Principal
		return ret
	}

	return o.X500Principal
}

// GetX500PrincipalOk returns a tuple with the X500Principal field value
// and a boolean to check if the value has been set.
func (o *CordaX500Name) GetX500PrincipalOk() (*X500Principal, bool) {
	if o == nil {
		return nil, false
	}
	return &o.X500Principal, true
}

// SetX500Principal sets field value
func (o *CordaX500Name) SetX500Principal(v X500Principal) {
	o.X500Principal = v
}

func (o CordaX500Name) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CordaX500Name) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CommonName) {
		toSerialize["commonName"] = o.CommonName
	}
	if !IsNil(o.OrganisationUnit) {
		toSerialize["organisationUnit"] = o.OrganisationUnit
	}
	toSerialize["organisation"] = o.Organisation
	toSerialize["locality"] = o.Locality
	if !IsNil(o.State) {
		toSerialize["state"] = o.State
	}
	toSerialize["country"] = o.Country
	toSerialize["x500Principal"] = o.X500Principal
	return toSerialize, nil
}

type NullableCordaX500Name struct {
	value *CordaX500Name
	isSet bool
}

func (v NullableCordaX500Name) Get() *CordaX500Name {
	return v.value
}

func (v *NullableCordaX500Name) Set(val *CordaX500Name) {
	v.value = val
	v.isSet = true
}

func (v NullableCordaX500Name) IsSet() bool {
	return v.isSet
}

func (v *NullableCordaX500Name) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCordaX500Name(val *CordaX500Name) *NullableCordaX500Name {
	return &NullableCordaX500Name{value: val, isSet: true}
}

func (v NullableCordaX500Name) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCordaX500Name) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


