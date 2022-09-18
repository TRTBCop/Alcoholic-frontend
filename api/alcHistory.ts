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

const updateAlcHistory = (id: string, data: AlcHistoryDaysDrink) => {
  return instance.put<BaseApiResult<null>>('/api/alc-history', {
    params: {
      id,
      data,
    },
  });
};

const addAlcHistory = (data: AlcHistoryDaysDrink) => {
  return instance.post<BaseApiResult<null>>('/api/alc-history', {
    params: {
      data,
    },
  });
};

const deleteAlcHistory = (id: string) => {
  return instance.delete<BaseApiResult<null>>('/api/alc-history', {
    params: {
      id,
    },
  });
};

export { getAlcHistory, getAlcHistoryDetail, updateAlcHistory, addAlcHistory, deleteAlcHistory };
