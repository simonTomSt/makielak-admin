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
export const FileType = {
    Image: 'IMAGE',
    Pdf: 'PDF'
} as const;
export type FileType = typeof FileType[keyof typeof FileType];


export function FileTypeFromJSON(json: any): FileType {
    return FileTypeFromJSONTyped(json, false);
}

export function FileTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FileType {
    return json as FileType;
}

export function FileTypeToJSON(value?: FileType | null): any {
    return value as any;
}
