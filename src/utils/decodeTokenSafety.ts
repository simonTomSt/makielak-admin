import jwt_decode from 'jwt-decode';
import { DecodedToken } from './types';

export const decodeTokenSafety = (token?: string): DecodedToken =>
  token ? jwt_decode(token) : { payload: null, exp: 0 };
