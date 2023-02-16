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


/**
 * 
 * @export
 */
export const ContentType = {
    HomePage: 'HOME_PAGE',
    AboutUs: 'ABOUT_US',
    Services: 'SERVICES',
    Certificates: 'CERTIFICATES',
    Contact: 'CONTACT',
    Footer: 'FOOTER'
} as const;
export type ContentType = typeof ContentType[keyof typeof ContentType];


export function ContentTypeFromJSON(json: any): ContentType {
    return ContentTypeFromJSONTyped(json, false);
}

export function ContentTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContentType {
    return json as ContentType;
}

export function ContentTypeToJSON(value?: ContentType | null): any {
    return value as any;
}

