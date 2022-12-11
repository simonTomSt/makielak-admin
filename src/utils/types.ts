import { UserOutDto } from 'api';

export type DecodedToken = {
  payload: UserOutDto | null;
  exp: number;
};
