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
 * @interface GetContentByNameDto
 */
export interface GetContentByNameDto {
    /**
     * 
     * @type {string}
     * @memberof GetContentByNameDto
     */
    name: GetContentByNameDtoNameEnum;
}


/**
 * @export
 */
export const GetContentByNameDtoNameEnum = {
    HomePage: 'HOME_PAGE',
    AboutUs: 'ABOUT_US',
    Services: 'SERVICES',
    Certificates: 'CERTIFICATES',
    Contact: 'CONTACT',
    Footer: 'FOOTER'
} as const;
export type GetContentByNameDtoNameEnum = typeof GetContentByNameDtoNameEnum[keyof typeof GetContentByNameDtoNameEnum];


/**
 * Check if a given object implements the GetContentByNameDto interface.
 */
export function instanceOfGetContentByNameDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function GetContentByNameDtoFromJSON(json: any): GetContentByNameDto {
    return GetContentByNameDtoFromJSONTyped(json, false);
}

export function GetContentByNameDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetContentByNameDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function GetContentByNameDtoToJSON(value?: GetContentByNameDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}

