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
import type { Certificate } from './Certificate';
import {
    CertificateFromJSON,
    CertificateFromJSONTyped,
    CertificateToJSON,
} from './Certificate';
import type { FileDto } from './FileDto';
import {
    FileDtoFromJSON,
    FileDtoFromJSONTyped,
    FileDtoToJSON,
} from './FileDto';

/**
 * 
 * @export
 * @interface CertificatesStructureDto
 */
export interface CertificatesStructureDto {
    /**
     * 
     * @type {string}
     * @memberof CertificatesStructureDto
     */
    headerTitle: string;
    /**
     * 
     * @type {FileDto}
     * @memberof CertificatesStructureDto
     */
    headerImage: FileDto;
    /**
     * 
     * @type {Array<Certificate>}
     * @memberof CertificatesStructureDto
     */
    certificates: Array<Certificate>;
    /**
     * 
     * @type {Array<Certificate>}
     * @memberof CertificatesStructureDto
     */
    declarations: Array<Certificate>;
}

/**
 * Check if a given object implements the CertificatesStructureDto interface.
 */
export function instanceOfCertificatesStructureDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "headerTitle" in value;
    isInstance = isInstance && "headerImage" in value;
    isInstance = isInstance && "certificates" in value;
    isInstance = isInstance && "declarations" in value;

    return isInstance;
}

export function CertificatesStructureDtoFromJSON(json: any): CertificatesStructureDto {
    return CertificatesStructureDtoFromJSONTyped(json, false);
}

export function CertificatesStructureDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CertificatesStructureDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'headerTitle': json['headerTitle'],
        'headerImage': FileDtoFromJSON(json['headerImage']),
        'certificates': ((json['certificates'] as Array<any>).map(CertificateFromJSON)),
        'declarations': ((json['declarations'] as Array<any>).map(CertificateFromJSON)),
    };
}

export function CertificatesStructureDtoToJSON(value?: CertificatesStructureDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'headerTitle': value.headerTitle,
        'headerImage': FileDtoToJSON(value.headerImage),
        'certificates': ((value.certificates as Array<any>).map(CertificateToJSON)),
        'declarations': ((value.declarations as Array<any>).map(CertificateToJSON)),
    };
}

