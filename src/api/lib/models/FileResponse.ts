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
import type { FileResponseData } from './FileResponseData';
import {
    FileResponseDataFromJSON,
    FileResponseDataFromJSONTyped,
    FileResponseDataToJSON,
} from './FileResponseData';

/**
 * 
 * @export
 * @interface FileResponse
 */
export interface FileResponse {
    /**
     * 
     * @type {FileResponseData}
     * @memberof FileResponse
     */
    data?: FileResponseData;
    /**
     * 
     * @type {number}
     * @memberof FileResponse
     */
    statusCode?: number;
    /**
     * 
     * @type {string}
     * @memberof FileResponse
     */
    error?: string;
}

/**
 * Check if a given object implements the FileResponse interface.
 */
export function instanceOfFileResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FileResponseFromJSON(json: any): FileResponse {
    return FileResponseFromJSONTyped(json, false);
}

export function FileResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FileResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : FileResponseDataFromJSON(json['data']),
        'statusCode': !exists(json, 'statusCode') ? undefined : json['statusCode'],
        'error': !exists(json, 'error') ? undefined : json['error'],
    };
}

export function FileResponseToJSON(value?: FileResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': FileResponseDataToJSON(value.data),
        'statusCode': value.statusCode,
        'error': value.error,
    };
}

