import { mockInstance } from './instance';
import { BaseApiResult } from '../model/baseModel';
import { AlcRecipe } from 'api/model/alcRecipe';

const data: AlcRecipe[] = [
  {
    id: 1,
    recipeName: '갓파더',
    createAt: '2022-09-01',
    recipeImg:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160217_243%2Fflairbarista_1455689324870U6chD_JPEG%2F%25C7%25DA%25B5%25E5%25B8%25AF%25BD%25BA.jpg&type=sc960_832',
    hashTags: [
      { id: 1, tagName: '계피' },
      { id: 2, tagName: '클래식' },
      { id: 3, tagName: '묵직함' },
      { id: 4, tagName: '계피' },
    ],
  },

  {
    id: 2,
    recipeName: '갓파더',
    createAt: '2022-09-01',
    recipeImg:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160217_243%2Fflairbarista_1455689324870U6chD_JPEG%2F%25C7%25DA%25B5%25E5%25B8%25AF%25BD%25BA.jpg&type=sc960_832',
    hashTags: [
      { id: 1, tagName: '계피' },
      { id: 2, tagName: '클래식' },
      { id: 3, tagName: '묵직함' },
      { id: 4, tagName: '계피' },
    ],
  },
  {
    id: 3,
    recipeName: '갓파더',
    createAt: '2022-09-01',
    recipeImg:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160217_243%2Fflairbarista_1455689324870U6chD_JPEG%2F%25C7%25DA%25B5%25E5%25B8%25AF%25BD%25BA.jpg&type=sc960_832',
    hashTags: [
      { id: 1, tagName: '계피' },
      { id: 2, tagName: '클래식' },
      { id: 3, tagName: '묵직함' },
      { id: 4, tagName: '계피' },
    ],
  },
  {
    id: 4,
    recipeName: '갓파더',
    createAt: '2022-09-01',
    recipeImg:
      'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160217_243%2Fflairbarista_1455689324870U6chD_JPEG%2F%25C7%25DA%25B5%25E5%25B8%25AF%25BD%25BA.jpg&type=sc960_832',
    hashTags: [
      { id: 1, tagName: '계피' },
      { id: 2, tagName: '클래식' },
      { id: 3, tagName: '묵직함' },
      { id: 4, tagName: '계피' },
    ],
  },
];

mockInstance.onGet('/api/alc-recipe').reply<BaseApiResult<AlcRecipe[]>>(200, {
  code: 200,
  success: true,
  message: 'mock-test-data-recipe',
  data,
});
