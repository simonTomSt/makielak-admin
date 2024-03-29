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
 * @interface UserDto
 */
export interface UserDto {
    /**
     * 
     * @type {string}
     * @memberof UserDto
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof UserDto
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof UserDto
     */
    password: string;
    /**
     * 
     * @type {string}
     * @memberof UserDto
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof UserDto
     */
    role: UserDtoRoleEnum;
}


/**
 * @export
 */
export const UserDtoRoleEnum = {
    SuperAdmin: 'SUPER_ADMIN',
    Admin: 'ADMIN'
} as const;
export type UserDtoRoleEnum = typeof UserDtoRoleEnum[keyof typeof UserDtoRoleEnum];


/**
 * Check if a given object implements the UserDto interface.
 */
export function instanceOfUserDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "password" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "role" in value;

    return isInstance;
}

export function UserDtoFromJSON(json: any): UserDto {
    return UserDtoFromJSONTyped(json, false);
}

export function UserDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'email': json['email'],
        'password': json['password'],
        'name': json['name'],
        'role': json['role'],
    };
}

export function UserDtoToJSON(value?: UserDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'email': value.email,
        'password': value.password,
        'name': value.name,
        'role': value.role,
    };
}

