import { instance } from './index';
import { BaseApiResult } from './model/baseModel';
import { AlcRecipe } from './model/alcRecipe';

const getAlcRecipe = () => {
  return instance.get<BaseApiResult<AlcRecipe[]>>('/api/alc-recipe');
};



export { getAlcRecipe };