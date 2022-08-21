import { instance } from './index';
import { BaseApiResult } from './model/baseModel';
import { AlcHistoryWeek } from './model/alcHistory';

const getAlcHistory = () => {
  return instance.get<BaseApiResult<AlcHistoryWeek[]>>('/api/alc-history');
};

export { getAlcHistory };
