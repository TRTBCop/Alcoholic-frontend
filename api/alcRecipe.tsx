import { instance } from './index';
import { BaseApiResult } from './model/baseModel';
import { AlcRecipe, AlcRecipeDetail, AlcRecipeDetailReviews } from './model/alcRecipe';

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
  return instance.get<BaseApiResult<AlcRecipe[]>>(`/api/alc-recipe-search`, {
    params: {
      page,
      word,
    },
  });
};

const updateAlrecipe = (id: number, arData: AlcRecipeDetail) => {
  return instance.put<BaseApiResult<AlcRecipeDetail>>(`/api/alc-recipe/detail/${id}`, {
    params: {
      id,
      arData,
    },
  });
  
};

const updateAlrecipeReview = (id:number, data:AlcRecipeDetailReviews) => {
  return instance.put<BaseApiResult<AlcRecipe[]>>(`/api/alc-recipe-review`, {
    params: {
      id,
      data,
    },
  });
};

const deleteAlcRecipe = (id: number) => {
  return instance.put<BaseApiResult<null>>(`/api/alc-recipe`, {
    params: {
      id,
    },
  });
};

const deleteAlcRecipeReview = (id: number) => {
  return instance.put<BaseApiResult<null>>(`/api/alc-recipe/detail/${id}`, {
    params: {
      id,
    },
  });
};

const createAlcRecipe = (data : AlcRecipeDetail) => {
  return instance.post<BaseApiResult<null>>(`/api/alc-recipe/wirte`),{
    params:{
      data,
    }
  }
}


const createAlcRecipeReview = (data : AlcRecipeDetailReviews) => {
  return instance.post<BaseApiResult<null>>('/api/alc-recipe-review'),{
    params:{
      data,
    }
  }
}
export { getAlcRecipe, getAlcRecipeDetail,  getAlcRecipeEdit, getAlcRecipeSearch,
          updateAlrecipe, updateAlrecipeReview,deleteAlcRecipe,deleteAlcRecipeReview,
          createAlcRecipe, createAlcRecipeReview};