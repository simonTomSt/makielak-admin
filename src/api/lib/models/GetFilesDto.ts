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
 * @interface GetFilesDto
 */
export interface GetFilesDto {
    /**
     * 
     * @type {Array<string>}
     * @memberof GetFilesDto
     */
    ids: Array<string>;
}

/**
 * Check if a given object implements the GetFilesDto interface.
 */
export function instanceOfGetFilesDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "ids" in value;

    return isInstance;
}

export function GetFilesDtoFromJSON(json: any): GetFilesDto {
    return GetFilesDtoFromJSONTyped(json, false);
}

export function GetFilesDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetFilesDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ids': json['ids'],
    };
}

export function GetFilesDtoToJSON(value?: GetFilesDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ids': value.ids,
    };
}

