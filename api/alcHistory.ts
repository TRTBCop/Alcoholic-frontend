import { instance } from './index';
import { BaseApiResult } from './model/baseModel';
import { AlcHistoryDaysDrink } from './model/alcHistory';

const getAlcHistory = (page = 1) => {
  return instance.get<BaseApiResult<AlcHistoryDaysDrink[]>>('/api/alc-history', {
    params: {
      page,
    },
  });
};

const getAlcHistoryDetail = (id: string) => {
  return instance.get<BaseApiResult<AlcHistoryDaysDrink>>(`/api/alc-history/${id}`);
};

export { getAlcHistory, getAlcHistoryDetail };
