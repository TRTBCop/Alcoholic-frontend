import { instance } from './index';
import { BaseApiResult } from './model/baseModel';
import { AlcHistoryDay } from './model/alcHistory';

const getAlcHistory = () => {
  return instance.get<BaseApiResult<AlcHistoryDay[]>>('/api/alc-history');
};

export { getAlcHistory };
