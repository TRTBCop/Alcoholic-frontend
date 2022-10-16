import { instance } from './index';
import { BaseApiResult } from './model/baseModel';
import { LoginReturnModel } from './model/auth';

/** AlcoholType List 읽어오는 함수 */
export const tokenLogin = () => {
  const data = instance.post<BaseApiResult<LoginReturnModel>>('/api/auth/token');
  return data;
};
