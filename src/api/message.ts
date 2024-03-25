/* eslint-disable no-unused-vars */
import request from '@/utils/request';

enum Api {
  SEND_USER_MESSAGE = '/user/sendUserMsg',
}

interface ResProps {
  code: 0 | -1;
  data: any;
  rows: any[];
  message: string;
}

export const sendUserMsg = (data: { fromId: string; targetId: string, text: string }): Promise<ResProps> =>
  request({ url: Api.SEND_USER_MESSAGE, method: 'POST', data });

