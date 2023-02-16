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
 * @interface DeleteFileDto
 */
export interface DeleteFileDto {
    /**
     * 
     * @type {string}
     * @memberof DeleteFileDto
     */
    id: string;
}

/**
 * Check if a given object implements the DeleteFileDto interface.
 */
export function instanceOfDeleteFileDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function DeleteFileDtoFromJSON(json: any): DeleteFileDto {
    return DeleteFileDtoFromJSONTyped(json, false);
}

export function DeleteFileDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteFileDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
    };
}

export function DeleteFileDtoToJSON(value?: DeleteFileDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
    };
}
