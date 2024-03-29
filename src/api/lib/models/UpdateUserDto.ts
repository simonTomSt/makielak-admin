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
 * @interface UpdateUserDto
 */
export interface UpdateUserDto {
    /**
     * 
     * @type {string}
     * @memberof UpdateUserDto
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateUserDto
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateUserDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateUserDto
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateUserDto
     */
    role?: UpdateUserDtoRoleEnum;
}


/**
 * @export
 */
export const UpdateUserDtoRoleEnum = {
    SuperAdmin: 'SUPER_ADMIN',
    Admin: 'ADMIN'
} as const;
export type UpdateUserDtoRoleEnum = typeof UpdateUserDtoRoleEnum[keyof typeof UpdateUserDtoRoleEnum];


/**
 * Check if a given object implements the UpdateUserDto interface.
 */
export function instanceOfUpdateUserDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function UpdateUserDtoFromJSON(json: any): UpdateUserDto {
    return UpdateUserDtoFromJSONTyped(json, false);
}

export function UpdateUserDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateUserDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'role': !exists(json, 'role') ? undefined : json['role'],
    };
}

export function UpdateUserDtoToJSON(value?: UpdateUserDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'email': value.email,
        'name': value.name,
        'password': value.password,
        'role': value.role,
    };
}

