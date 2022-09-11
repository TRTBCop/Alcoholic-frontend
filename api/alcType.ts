import { instance } from './index';
import { BaseApiResult } from './model/baseModel';
import { AlcoholTypeProps, AlcoholDetailInfoProps, AlcoholTypeReviewsProps } from './model/alcType';

/** AlcoholType List 읽어오는 함수 */
export const getAlcTypes = (page = 1) => {
  const data = instance.get<BaseApiResult<AlcoholTypeProps[]>>('/api/alc-types', {
    params: {
      page,
    },
  });
  return data;
};

/** 검색에 대한 AlcoholType List 읽어오는 함수 */
export const getSAlcTypesSearchResult = (page = 1, word:string) => {
  const data = instance.get<BaseApiResult<AlcoholTypeProps[]>>(`/api/alc-types-search`, {
    params: {
      word,
      page,
    },
  });
  return data;
};

/** AlcoholType 하나를 읽어오는 함수 */
export const getAlcType = (id: string) => {
  const data = instance.get<BaseApiResult<AlcoholTypeProps>>('/api/alc-type');
  return data;
};

/** AlcoholType Detail을 읽어오는 함수 */
export const getAlcTypeDetail = (id: string) => {
  return instance.get<BaseApiResult<AlcoholDetailInfoProps>>(`/api/alc-type-detail/${id}`);
};

/** Alc Type Review들을 읽어오는 함수 */
export const getAlcTypeReviews = (id: string) => {
  return instance.get<BaseApiResult<AlcoholTypeReviewsProps>>(`/api/alc-type-reviews/${id}`);
}

/** Alc Type Similar List를 반환하는 함수(최대 3개만 보내줄 것) */
export const getAlcTypeSimilar = (id: string) => {
  const data = instance.get<BaseApiResult<AlcoholTypeProps[]>>(`/api/alc-type-relevant/${id}`);
  return data;
};
