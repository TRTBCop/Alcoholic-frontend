import { mockInstance } from './instance';
import { BaseApiResult } from '../model/baseModel';
import { AlcRecipe, AlcRecipeDetail, UserInfo } from 'api/model/alcRecipe';

const alcRecipeData: AlcRecipe[] = [
  {
    id: 0,
    likes: 1,
    views: 1000,
    recipeName: '갓파더',
    createAt: '2022-09-01',
    recipeImg:'https://mblogthumb-phinf.pstatic.net/20140509_94/ss6042404_1399608811485geC9m_JPEG/Godfather.jpg?type=w2',
    hashTags: [
      '계피',
      '클래식',
      '묵직함',
      '커피',
      ],
  },

  {
    id: 1,
    likes: 1,
    views: 1000,
    recipeName: '잭콕',
    createAt: '2022-09-01',
    recipeImg:'https://t1.daumcdn.net/cfile/blog/234259345179E1BA0E',
    hashTags: [
      '계피',
      '클래식',
      '묵직함',
      '커피',
    ],
  },
  {
    id: 2,
    likes: 1,
    views: 1000,
    recipeName: '네그로니',
    createAt: '2022-09-01',
    recipeImg:
      'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbdrM1b%2FbtrbtnkETh0%2FSx29CY2nqyzbUjFW5KTh90%2Fimg.jpg',
    hashTags: [
        '계피',
        '클래식',
        '묵직함',
        '커피',
    ],
  },
  {
    id: 3,
    likes: 1,
    views: 1000,
    recipeName: '갓파더222',
    createAt: '2022-09-30',
    recipeImg:
      'https://mblogthumb-phinf.pstatic.net/20140509_94/ss6042404_1399608811485geC9m_JPEG/Godfather.jpg?type=w2',
    hashTags: [
        '계피',
        '클래식',
        '묵직함',
        '커피',
    ],
  },
  {
    id: 4,
    likes: 1,
    views: 1000,
    recipeName: '갓파더333',
    createAt: '2022-09-01',
    recipeImg:
      'https://mblogthumb-phinf.pstatic.net/20140509_94/ss6042404_1399608811485geC9m_JPEG/Godfather.jpg?type=w2',
    hashTags: [
        '계피',
        '클래식',
        '묵직함',
        '커피',
    ],
  },
];

const user : UserInfo[] = [
  {
      id: 0,
      userName: "AlcWriter01",
      userProfileImg:"https://cdn.icon-icons.com/icons2/1993/PNG/512/account_avatar_face_man_people_profile_user_icon_123197.png"
  },
  {
      id: 1,
      userName: "AlcWriter02",
      userProfileImg:"https://cdn.icon-icons.com/icons2/1993/PNG/512/account_avatar_face_man_people_profile_user_icon_123197.png"
  },
  {
      id: 2,
      userName: "알콜중독0",
      userProfileImg:"https://cdn.icon-icons.com/icons2/1993/PNG/512/account_avatar_face_man_people_profile_user_icon_123197.png"
  },
  {
      id: 3,
      userName: "알콜중독1",
      userProfileImg:"https://cdn.icon-icons.com/icons2/1993/PNG/512/account_avatar_face_man_people_profile_user_icon_123197.png"
  },
  {
      id: 4,
      userName: "알콜중독333",
      userProfileImg:"https://cdn.icon-icons.com/icons2/1993/PNG/512/account_avatar_face_man_people_profile_user_icon_123197.png"
  },
]

const alcRecipeDetailData: AlcRecipeDetail[] = [
  {
      id: 0,
      writer:  {
        id: 0,
        userName: "AlcWriter01",
        userProfileImg:"https://cdn.icon-icons.com/icons2/1993/PNG/512/account_avatar_face_man_people_profile_user_icon_123197.png"
      },
      likes: 1011,
      views: 992,
      title: "갓파더",
      image: 'https://mblogthumb-phinf.pstatic.net/20140509_94/ss6042404_1399608811485geC9m_JPEG/Godfather.jpg?type=w2',
      content: ' 위스키 베이스로, 다른 많은 칵테일처럼 이름의 정확한 유래는 불명이다. 국내에서는 영화 대부에서 비토 콜레오네가 마신 칵테일이라는 데서 왔다는 설이 떠돌고 있지만, 영화에 갓파더를 마시는 장면은 없다. 디사론노 사에서는 비토 역을 맡았던 배우 말론 브란도가 좋아한 칵테일이라고 주장하지만 확실한 근거가 있는 것은 아니다. 만들어진 시기는 1970년대로 영화 대부 이후에 나온 칵테일이다. 1950년대에 이미 만들었다는 주장을 한 사람이 있었으나 근거가 없어서 정설로 받아들여지지는 않는다. 영화에서 위스키를 마시는 비토 콜리오네를 보고 이탈리아 리큐르를 섞어서 만들었기에 갓파더라는 이름이 붙었다는 설이 그나마 신빙성이 있다. 위스키 - 3/2 oz (50ml) /n 디사론노 - 3/4oz (25ml) /n 오렌지 트위스트',
      createAt:"2022-03-14",
      hashTags: [
        '계피',
        '클래식',
        '묵직함',
        '커피',
      ],
      reviews:[
        {
          id: 0,
          user: "알콜중독0",
          reviewContents: "갓파더 맛있어요1111.",
          createAt:"2022-03-14"
        },
        {
          id: 1,
          user: "알콜중독0",

          reviewContents: "갓파더 맛있어요2222.",
          createAt:"2022-03-14"
        },      
        {
          id: 2,
          user: "알콜중독0",
          reviewContents: "갓파더 맛있어요3333.",
          createAt:"2022-03-14"
        }
      ]
  },
  {
    id: 1,
    writer:  {
      id: 0,
      userName: "AlcWriter01",
      userProfileImg:"https://cdn.icon-icons.com/icons2/1993/PNG/512/account_avatar_face_man_people_profile_user_icon_123197.png"
    },
    likes: 1,
    views: 1000,
    title: "잭콕",
    image: 'https://w.namu.la/s/6a76f4d37ce9de0015a56dd7a2b15e703767ecc327417a44f8b0db9fe6ec9ce08ae740ff67c2e30bfe966b24be4392f69b0a9169e09cef9eb9587fc890b0a605f144c75f67b100e50a7cde2831eb9aee0074105ad6ec9de6817f4f8eab32fac1',
    content: "안녕하세요 갓마더 래시피 정보입니다. ",
    createAt:"2022-05-16",
    hashTags: [
      '콜라',
      '초보자',
      '상큼함',
      '레몬',
    ],
    reviews:[
        {
            id: 0,
            user: "알콜중독0",
            reviewContents: "잭콕 맛있어요.",
            createAt:"2022-03-14"
        },
        {
            id: 1,
            user: "알콜중독0",
            reviewContents: "잭콕 맛있어요2222.",
            createAt:"2022-03-14"
        },      {
            id: 2,
             user: "알콜중독0",
            reviewContents: "잭콕 맛있어요3333.",
            createAt:"2022-03-14"
        }
    ]
  },
  {
    id: 2,
    writer:  {
      id: 0,
      userName: "AlcWriter01",
      userProfileImg:"https://cdn.icon-icons.com/icons2/1993/PNG/512/account_avatar_face_man_people_profile_user_icon_123197.png"
    },
    likes: 1,
    views: 1000,
    title: "네그로니",
    image: 'https://w.namu.la/s/6a76f4d37ce9de0015a56dd7a2b15e703767ecc327417a44f8b0db9fe6ec9ce08ae740ff67c2e30bfe966b24be4392f69b0a9169e09cef9eb9587fc890b0a605f144c75f67b100e50a7cde2831eb9aee0074105ad6ec9de6817f4f8eab32fac1',
    content: "안녕하세요 갓마더 래시피 정보입니다. ",
    createAt:"2022-05-16",
    hashTags: [
      '콜라',
      '초보자',
      '상큼함',
      '레몬',
    ],
    reviews:[
        {
            id: 0,
            user: "알콜중독0",
            reviewContents: "잭콕 맛있어요.",
            createAt:"2022-03-14"
        },
        {
            id: 1,
            user: "알콜중독0",
            reviewContents: "잭콕 맛있어요2222.",
            createAt:"2022-03-14"
        },      {
            id: 2,
             user: "알콜중독0",
            reviewContents: "잭콕 맛있어요3333.",
            createAt:"2022-03-14"
        }
    ]
  },
  {
    id: 3,
    writer:  {
      id: 0,
      userName: "AlcWriter01",
      userProfileImg:"https://cdn.icon-icons.com/icons2/1993/PNG/512/account_avatar_face_man_people_profile_user_icon_123197.png"
    },
    likes: 1,
    views: 1000,
    title: "잭콕",
    image: 'https://w.namu.la/s/6a76f4d37ce9de0015a56dd7a2b15e703767ecc327417a44f8b0db9fe6ec9ce08ae740ff67c2e30bfe966b24be4392f69b0a9169e09cef9eb9587fc890b0a605f144c75f67b100e50a7cde2831eb9aee0074105ad6ec9de6817f4f8eab32fac1',
    content: "안녕하세요 갓마더 래시피 정보입니다. ",
    createAt:"2022-05-16",
    hashTags: [
      '콜라',
      '초보자',
      '상큼함',
      '레몬',
    ],
    reviews:[
        {
            id: 0,
            user: "알콜중독0",
            reviewContents: "잭콕 맛있어요.",
            createAt:"2022-03-14"
        },
        {
            id: 1,
            user: "알콜중독0",
            reviewContents: "잭콕 맛있어요2222.",
            createAt:"2022-03-14"
        },      {
            id: 2,
             user: "알콜중독0",
            reviewContents: "잭콕 맛있어요3333.",
            createAt:"2022-03-14"
        }
    ]
  },
]

mockInstance.onGet('/api/alc-recipe').reply<BaseApiResult<AlcRecipe[]>>(200, {
  code: 200,
  success: true,
  message: '칵테일 레시피 리스트 조회 요청 mock',
  data: alcRecipeData,
});

mockInstance.onGet(/api\/alc-recipe\/detail\//).reply<BaseApiResult<AlcRecipeDetail>>(200, {
  code: 200,
  success: true,
  message: '칵테일 레시피 디테일 조회 요청 mock',
  data: alcRecipeDetailData[0],
});

//보류
mockInstance.onGet(/api\/alc-recipe\/write\//).reply<BaseApiResult<AlcRecipeDetail>>(200, {
  code: 200,
  success: true,
  message: '칵테일 레시피 디테일 조회 요청 mock',
  data: alcRecipeDetailData[0],
});

mockInstance.onGet('/api/alc-recipe-search').reply<BaseApiResult<AlcRecipe[]>>(200, {
  code: 200,
  success: true,
  message: '칵테일 레시피 검색 조회 요청 mock',
  data: alcRecipeData,
});


mockInstance.onPut(/api\/alc-recipe\/detail\//).reply<BaseApiResult<null>>(200, {
  code: 200,
  success: true,
  message: '칵테일 레시피 정보 수정 요청 mock',
  data: null,
});


mockInstance.onPut('/api/alc-recipe-review').reply<BaseApiResult<null>>(200, {
  code: 200,
  success: true,
  message: '리뷰 정보 수정 요청 mock',
  data: null,
});

mockInstance.onDelete(/api\/alc-recipe\/detail\//).reply<BaseApiResult<null>>(200, {
  code: 200,
  success: true,
  message: '칵테일 레시피 정보 삭제 요청 mock',
  data: null,
});


mockInstance.onDelete('/api/alc-recipe-review').reply<BaseApiResult<null>>(200, {
  code: 200,
  success: true,
  message: '리뷰 정보 삭제 요청 mock',
  data: null,
});


mockInstance.onPost('/api/alc-recipe/wirte').reply<BaseApiResult<null>>(200, {
  code: 200,
  success: true,
  message: '칵테일 레시피 생성 요청 mock',
  data: null,
});

mockInstance.onPost('/api/alc-recipe-review').reply<BaseApiResult<null>>(200, {
  code: 200,
  success: true,
  message: '리뷰 정보 생성 요청 mock',
  data: null,
});

