/* tslint:disable */
/* eslint-disable */
/**
 * Hyperledger Cactus Plugin - Object Store - IPFS 
 * Contains/describes the Hyperledger Cactus Object Store IPFS plugin.
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface GetObjectRequestV1
 */
export interface GetObjectRequestV1 {
    /**
     * The key for the entry to get from the object store.
     * @type {string}
     * @memberof GetObjectRequestV1
     */
    'key': string;
}
/**
 * 
 * @export
 * @interface GetObjectResponseV1
 */
export interface GetObjectResponseV1 {
    /**
     * The key that was used to retrieve the value from the object store.
     * @type {string}
     * @memberof GetObjectResponseV1
     */
    'key': string;
    /**
     * The value associated with the requested key in the object store as a string.
     * @type {string}
     * @memberof GetObjectResponseV1
     */
    'value': string;
}
/**
 * 
 * @export
 * @interface HasObjectRequestV1
 */
export interface HasObjectRequestV1 {
    /**
     * The key to check for presence in the object store.
     * @type {string}
     * @memberof HasObjectRequestV1
     */
    'key': string;
}
/**
 * 
 * @export
 * @interface HasObjectResponseV1
 */
export interface HasObjectResponseV1 {
    /**
     * The key that was used to check the presence of the value in the object store.
     * @type {string}
     * @memberof HasObjectResponseV1
     */
    'key': string;
    /**
     * Date and time encoded as JSON when the presence check was performed by the plugin backend.
     * @type {string}
     * @memberof HasObjectResponseV1
     */
    'checkedAt': string;
    /**
     * The boolean true or false indicating the presence or absence of an object under \'key\'.
     * @type {boolean}
     * @memberof HasObjectResponseV1
     */
    'isPresent': boolean;
}
/**
 * 
 * @export
 * @interface SetObjectRequestV1
 */
export interface SetObjectRequestV1 {
    /**
     * The key for the entry to set in the object store.
     * @type {string}
     * @memberof SetObjectRequestV1
     */
    'key': string;
    /**
     * The value that will be associated with the key in the object store.
     * @type {string}
     * @memberof SetObjectRequestV1
     */
    'value': string;
}
/**
 * 
 * @export
 * @interface SetObjectResponseV1
 */
export interface SetObjectResponseV1 {
    /**
     * The key that was used to set the value in the object store.
     * @type {string}
     * @memberof SetObjectResponseV1
     */
    'key': string;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Retrieves an object from the object store.
         * @param {GetObjectRequestV1} getObjectRequestV1 Request body to obtain an object via its key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getObjectV1: async (getObjectRequestV1: GetObjectRequestV1, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'getObjectRequestV1' is not null or undefined
            assertParamExists('getObjectV1', 'getObjectRequestV1', getObjectRequestV1)
            const localVarPath = `/api/v1/plugins/@hyperledger/cactus-plugin-object-store-ipfs/get-object`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(getObjectRequestV1, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Checks the presence of an object in the object store.
         * @param {HasObjectRequestV1} hasObjectRequestV1 Request body to check presence of an object under a key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        hasObjectV1: async (hasObjectRequestV1: HasObjectRequestV1, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'hasObjectRequestV1' is not null or undefined
            assertParamExists('hasObjectV1', 'hasObjectRequestV1', hasObjectRequestV1)
            const localVarPath = `/api/v1/plugins/@hyperledger/cactus-plugin-object-store-ipfs/has-object`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(hasObjectRequestV1, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Sets an object in the object store under the specified key.
         * @param {SetObjectRequestV1} setObjectRequestV1 Request body to set an object under a key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setObjectV1: async (setObjectRequestV1: SetObjectRequestV1, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'setObjectRequestV1' is not null or undefined
            assertParamExists('setObjectV1', 'setObjectRequestV1', setObjectRequestV1)
            const localVarPath = `/api/v1/plugins/@hyperledger/cactus-plugin-object-store-ipfs/set-object`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(setObjectRequestV1, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Retrieves an object from the object store.
         * @param {GetObjectRequestV1} getObjectRequestV1 Request body to obtain an object via its key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getObjectV1(getObjectRequestV1: GetObjectRequestV1, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetObjectResponseV1>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getObjectV1(getObjectRequestV1, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Checks the presence of an object in the object store.
         * @param {HasObjectRequestV1} hasObjectRequestV1 Request body to check presence of an object under a key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async hasObjectV1(hasObjectRequestV1: HasObjectRequestV1, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HasObjectResponseV1>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.hasObjectV1(hasObjectRequestV1, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Sets an object in the object store under the specified key.
         * @param {SetObjectRequestV1} setObjectRequestV1 Request body to set an object under a key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async setObjectV1(setObjectRequestV1: SetObjectRequestV1, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SetObjectResponseV1>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.setObjectV1(setObjectRequestV1, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @summary Retrieves an object from the object store.
         * @param {GetObjectRequestV1} getObjectRequestV1 Request body to obtain an object via its key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getObjectV1(getObjectRequestV1: GetObjectRequestV1, options?: any): AxiosPromise<GetObjectResponseV1> {
            return localVarFp.getObjectV1(getObjectRequestV1, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Checks the presence of an object in the object store.
         * @param {HasObjectRequestV1} hasObjectRequestV1 Request body to check presence of an object under a key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        hasObjectV1(hasObjectRequestV1: HasObjectRequestV1, options?: any): AxiosPromise<HasObjectResponseV1> {
            return localVarFp.hasObjectV1(hasObjectRequestV1, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Sets an object in the object store under the specified key.
         * @param {SetObjectRequestV1} setObjectRequestV1 Request body to set an object under a key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setObjectV1(setObjectRequestV1: SetObjectRequestV1, options?: any): AxiosPromise<SetObjectResponseV1> {
            return localVarFp.setObjectV1(setObjectRequestV1, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @summary Retrieves an object from the object store.
     * @param {GetObjectRequestV1} getObjectRequestV1 Request body to obtain an object via its key.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getObjectV1(getObjectRequestV1: GetObjectRequestV1, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getObjectV1(getObjectRequestV1, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Checks the presence of an object in the object store.
     * @param {HasObjectRequestV1} hasObjectRequestV1 Request body to check presence of an object under a key.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public hasObjectV1(hasObjectRequestV1: HasObjectRequestV1, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).hasObjectV1(hasObjectRequestV1, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Sets an object in the object store under the specified key.
     * @param {SetObjectRequestV1} setObjectRequestV1 Request body to set an object under a key.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public setObjectV1(setObjectRequestV1: SetObjectRequestV1, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).setObjectV1(setObjectRequestV1, options).then((request) => request(this.axios, this.basePath));
    }
}


