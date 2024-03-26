/* eslint-disable no-unused-vars */
import request from '@/utils/request';

enum Api {
  USER_Register = '/user/register',
  USER_Login = '/user/login',
  USER_Friends = '/user/getFriends',
}

interface ResProps {
  code: 0 | -1;
  data: any;
  rows: any[];
  message: string;
}
export const register = (data: { nickname: string; email: string; password: string }): Promise<ResProps> =>
  request({ url: Api.USER_Register, method: 'POST', data });

export const login = (data: { username: string; password: string }): Promise<ResProps> =>
  request({ url: Api.USER_Login, method: 'POST', data });

export const getFriendList = (): Promise<ResProps> =>
  request({ url: Api.USER_Friends, method: 'POST' });

