/* tslint:disable */
/* eslint-disable */
/**
 * Makielak API
 * This is a makielak API documentation.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TokenResponseData
 */
export interface TokenResponseData {
    /**
     * 
     * @type {string}
     * @memberof TokenResponseData
     */
    token?: string;
}

/**
 * Check if a given object implements the TokenResponseData interface.
 */
export function instanceOfTokenResponseData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TokenResponseDataFromJSON(json: any): TokenResponseData {
    return TokenResponseDataFromJSONTyped(json, false);
}

export function TokenResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'token': !exists(json, 'token') ? undefined : json['token'],
    };
}

export function TokenResponseDataToJSON(value?: TokenResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'token': value.token,
    };
}

