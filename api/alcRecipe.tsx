import { instance } from './index';
import { BaseApiResult } from './model/baseModel';
import { AlcRecipe, AlcRecipeDetail } from './model/alcRecipe';

const getAlcRecipe = (page = 1) => {
  return instance.get<BaseApiResult<AlcRecipe[]>>('/api/alc-recipe', {
    params: {
      page,
    },
  });
};

const getAlcRecipeDetail = (id: string) => {
  return instance.get<BaseApiResult<AlcRecipeDetail>>(`/api/alc-recipe/detail/${id}`);
};

const getAlcRecipeEdit = (id: string) => {
  return instance.get<BaseApiResult<AlcRecipeDetail>>(`/api/alc-recipe/writer/${id}`);
};

const getAlcRecipeSearch = (page = 1, word:string) => {
  const data = instance.get<BaseApiResult<AlcRecipe[]>>(`/api/alc-recipe-search`, {
    params: {
      word,
      page,
    },
  });
  return data;
};

export { getAlcRecipe, getAlcRecipeDetail,  getAlcRecipeEdit, getAlcRecipeSearch};