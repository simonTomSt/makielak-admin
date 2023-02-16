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
 * @interface AboutUsStructureDto
 */
export interface AboutUsStructureDto {
    /**
     * 
     * @type {string}
     * @memberof AboutUsStructureDto
     */
    headerTitle: string;
    /**
     * 
     * @type {FileDto}
     * @memberof AboutUsStructureDto
     */
    headerImage: FileDto;
    /**
     * 
     * @type {string}
     * @memberof AboutUsStructureDto
     */
    firstPartContent: string;
    /**
     * 
     * @type {Array<FileDto>}
     * @memberof AboutUsStructureDto
     */
    firstPartImages: Array<FileDto>;
    /**
     * 
     * @type {string}
     * @memberof AboutUsStructureDto
     */
    secondPartContent: string;
    /**
     * 
     * @type {Array<FileDto>}
     * @memberof AboutUsStructureDto
     */
    secondPartImages: Array<FileDto>;
}

/**
 * Check if a given object implements the AboutUsStructureDto interface.
 */
export function instanceOfAboutUsStructureDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "headerTitle" in value;
    isInstance = isInstance && "headerImage" in value;
    isInstance = isInstance && "firstPartContent" in value;
    isInstance = isInstance && "firstPartImages" in value;
    isInstance = isInstance && "secondPartContent" in value;
    isInstance = isInstance && "secondPartImages" in value;

    return isInstance;
}

export function AboutUsStructureDtoFromJSON(json: any): AboutUsStructureDto {
    return AboutUsStructureDtoFromJSONTyped(json, false);
}

export function AboutUsStructureDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AboutUsStructureDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'headerTitle': json['headerTitle'],
        'headerImage': FileDtoFromJSON(json['headerImage']),
        'firstPartContent': json['firstPartContent'],
        'firstPartImages': ((json['firstPartImages'] as Array<any>).map(FileDtoFromJSON)),
        'secondPartContent': json['secondPartContent'],
        'secondPartImages': ((json['secondPartImages'] as Array<any>).map(FileDtoFromJSON)),
    };
}

export function AboutUsStructureDtoToJSON(value?: AboutUsStructureDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'headerTitle': value.headerTitle,
        'headerImage': FileDtoToJSON(value.headerImage),
        'firstPartContent': value.firstPartContent,
        'firstPartImages': ((value.firstPartImages as Array<any>).map(FileDtoToJSON)),
        'secondPartContent': value.secondPartContent,
        'secondPartImages': ((value.secondPartImages as Array<any>).map(FileDtoToJSON)),
    };
}

