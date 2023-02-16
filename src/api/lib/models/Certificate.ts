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
import type { FileDto } from './FileDto';
import {
    FileDtoFromJSON,
    FileDtoFromJSONTyped,
    FileDtoToJSON,
} from './FileDto';

/**
 * 
 * @export
 * @interface Certificate
 */
export interface Certificate {
    /**
     * 
     * @type {string}
     * @memberof Certificate
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Certificate
     */
    url: string;
    /**
     * 
     * @type {FileDto}
     * @memberof Certificate
     */
    image: FileDto;
}

/**
 * Check if a given object implements the Certificate interface.
 */
export function instanceOfCertificate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "url" in value;
    isInstance = isInstance && "image" in value;

    return isInstance;
}

export function CertificateFromJSON(json: any): Certificate {
    return CertificateFromJSONTyped(json, false);
}

export function CertificateFromJSONTyped(json: any, ignoreDiscriminator: boolean): Certificate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'url': json['url'],
        'image': FileDtoFromJSON(json['image']),
    };
}

export function CertificateToJSON(value?: Certificate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'url': value.url,
        'image': FileDtoToJSON(value.image),
    };
}
