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
 * @interface DeletedUserResponseData
 */
export interface DeletedUserResponseData {
    /**
     * 
     * @type {boolean}
     * @memberof DeletedUserResponseData
     */
    deleted?: boolean;
}

/**
 * Check if a given object implements the DeletedUserResponseData interface.
 */
export function instanceOfDeletedUserResponseData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeletedUserResponseDataFromJSON(json: any): DeletedUserResponseData {
    return DeletedUserResponseDataFromJSONTyped(json, false);
}

export function DeletedUserResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeletedUserResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deleted': !exists(json, 'deleted') ? undefined : json['deleted'],
    };
}

export function DeletedUserResponseDataToJSON(value?: DeletedUserResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'deleted': value.deleted,
    };
}
