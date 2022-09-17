import { instance } from './index';
import { BaseApiResult } from './model/baseModel';
import { AlcRecipe, AlcRecipeDetail } from './model/alcRecipe';

const getAlcRecipe = () => {
  return instance.get<BaseApiResult<AlcRecipe[]>>('/api/alc-recipe');
};

const getAlcRecipeDetail = (id: number) => {
  return instance.get<BaseApiResult<AlcRecipeDetail>>(`/api/alc-recipe/detail/${id}`);
};


export { getAlcRecipe, getAlcRecipeDetail };