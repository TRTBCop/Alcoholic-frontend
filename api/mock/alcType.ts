import { mockInstance } from './instance';
import { BaseApiResult } from '../model/baseModel';
import { AlcoholDetailInfoProps, AlcoholTypeProps } from '@api/model/alcType';
import { AlcoholTypeReviewsProps } from './../model/alcType';

// TEST CASE
const alcoholData: AlcoholTypeProps[] = [
  {
    id: 1,
    name: 'Hendrick\'s Gin 어디까지 글자가 늘어나는 거예요??? 어디까지 늘어날까요?? 어디까지 늘어나는지 아시나요?? 어디까지 가능한가요?',
    category: '진',
    degree: 44,
    drinkSize: 700,
    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160217_243%2Fflairbarista_1455689324870U6chD_JPEG%2F%25C7%25DA%25B5%25E5%25B8%25AF%25BD%25BA.jpg&type=sc960_832',
    minPrice: 43490,
    maxPrice: 60000,
    hashtags: [
      '시원한 오이향',
      '깔끔함',
      '부드러워요',
      '시원한 오이향',
      '깔끔함',
      '부드러워요',
      '시원한 오이향',
      '깔끔함',
      '부드러워요',
      '시원한 오이향',
      '깔끔함',
      '부드러워요',
      '시원한 오이향',
      '깔끔함',
      '부드러워요',
    ],
  },
    {
      id: 2,
      name: 'Hendrick\'s Gin',
      category: '진',
      degree: 44,
      drinkSize: 700,
      image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160217_243%2Fflairbarista_1455689324870U6chD_JPEG%2F%25C7%25DA%25B5%25E5%25B8%25AF%25BD%25BA.jpg&type=sc960_832',
      minPrice: 43490,
      maxPrice: 60000,
      hashtags: [
        '시원한 오이향' ,
        '깔끔함',
        '부드러워요',
      ],
    },
  {
    id: 3,
    name: 'Hendrick\'s Gin',
    category: '진',
    degree: 44,
    drinkSize: 700,
    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160217_243%2Fflairbarista_1455689324870U6chD_JPEG%2F%25C7%25DA%25B5%25E5%25B8%25AF%25BD%25BA.jpg&type=sc960_832',
    minPrice: 43490,
    maxPrice: 60000,
    hashtags: [
      '시원한 오이향',
      '시원한 오이향',
      '시원한 오이향',
      '시원한 오이향',
      '시원한 오이향',
      '깔끔함',
      '부드러워요',
    ],
  }
];

const alcoholDetailData: AlcoholDetailInfoProps = {
  origin: '스코틀랜드',
  manufacturer: 'Hendrick\'s Gin',
  color: '투명',
  taste: '오이향',
  recipes: [
    { id: 'recipe1', name: '핸드릭스 진 토닉' },
    { id: 'recipe2', name: '핸드릭스 샤워 진' },
  ],
  };

const alcoholReviewData: AlcoholTypeReviewsProps = {
  likesCount: 120,
  hatesCount: 8,
  hashtags: [
      '시원한 오이향',
      '깔끔함',
      '부드러워요',
      '핸드릭스 진토닉',
      '혼술',
  ],
  reviews: [
      {
          id: 1,
          username: '애주가라면호로록',
          content: '핸드릭스 진 특유의 시원한고 깔끔한 맛이 너무 좋아요. 오이향도 너무 좋아서 종종 오이를 편으로 썰어 함께 먹는 편입니다.',
          createdAt: '2022-07-21',
          liked: true,
      },
      {
          id: 2,
          username: '마시쓰',
          content: '핸드릭스 진 특유의 시원한고 깔끔한 맛이 너무 좋아요. 오이향도 너무 좋아서 종종 오이를 편으로 썰어 함께 먹는 편입니다.',
          createdAt: '2022-07-11',
          liked: true,
      },
      {
          id: 3,
          username: '술을 잘몰라요',
          content: '나는 나쁜 사람',
          createdAt: '2022-07-16',
          liked: false,
      },
      {
          id: 4,
          username: '홀릭커1029',
          content: '오늘 처음 가입해봤는데 익숙한 술이 있길래 리뷰 남겨요. 저는 어렸을 적부터 술을 먹었던 건 아닙니다. 언제 먹기 시작했는지는 더보기로 가릴 예정입니다.궁금하시다고요? 어쩔 수 없어요.',
          createdAt: '2022-03-10',
          liked: false,
      },
  
  ],
};
const alcoholReviewDataAll: AlcoholTypeReviewsProps = {
  likesCount: 120,
  hatesCount: 8,
  hashtags: [
      '시원한 오이향',
      '깔끔함',
      '부드러워요',
      '핸드릭스 진토닉',
      '혼술',
  ],
  reviews: [
      {
          id: 1,
          username: '애주가라면호로록',
          content: '핸드릭스 진 특유의 시원한고 깔끔한 맛이 너무 좋아요. 오이향도 너무 좋아서 종종 오이를 편으로 썰어 함께 먹는 편입니다.',
          createdAt: '2022-07-21',
          liked: true,
      },
      {
          id: 2,
          username: '마시쓰',
          content: '핸드릭스 진 특유의 시원한고 깔끔한 맛이 너무 좋아요. 오이향도 너무 좋아서 종종 오이를 편으로 썰어 함께 먹는 편입니다.',
          createdAt: '2022-07-11',
          liked: true,
      },
      {
          id: 3,
          username: '술을 잘몰라요',
          content: '나는 나쁜 사람',
          createdAt: '2022-07-16',
          liked: false,
      },
      {
          id: 4,
          username: '홀릭커1029',
          content: '오늘 처음 가입해봤는데 익숙한 술이 있길래 리뷰 남겨요. 저는 어렸을 적부터 술을 먹었던 건 아닙니다. 언제 먹기 시작했는지는 더보기로 가릴 예정입니다.궁금하시다고요? 어쩔 수 없어요.',
          createdAt: '2022-03-10',
          liked: false,
      },
      {
          id: 5,
          username: '애주가라면호로록',
          content: '핸드릭스 진 특유의 시원한고 깔끔한 맛이 너무 좋아요. 오이향도 너무 좋아서 종종 오이를 편으로 썰어 함께 먹는 편입니다.',
          createdAt: '2022-07-21',
          liked: true,
      },
      {
          id: 6,
          username: '마시쓰',
          content: '핸드릭스 진 특유의 시원한고 깔끔한 맛이 너무 좋아요. 오이향도 너무 좋아서 종종 오이를 편으로 썰어 함께 먹는 편입니다.',
          createdAt: '2022-07-11',
          liked: true,
      },
      {
          id: 7,
          username: '술을 잘몰라요',
          content: '나는 나쁜 사람',
          createdAt: '2022-07-16',
          liked: false,
      },
      {
          id: 8,
          username: '홀릭커1029',
          content: '오늘 처음 가입해봤는데 익숙한 술이 있길래 리뷰 남겨요. 저는 어렸을 적부터 술을 먹었던 건 아닙니다. 언제 먹기 시작했는지는 더보기로 가릴 예정입니다.궁금하시다고요? 어쩔 수 없어요.',
          createdAt: '2022-03-10',
          liked: false,
      },
      {
          id: 9,
          username: '애주가라면호로록',
          content: '핸드릭스 진 특유의 시원한고 깔끔한 맛이 너무 좋아요. 오이향도 너무 좋아서 종종 오이를 편으로 썰어 함께 먹는 편입니다.',
          createdAt: '2022-07-21',
          liked: true,
      },
      {
          id: 10,
          username: '마시쓰',
          content: '핸드릭스 진 특유의 시원한고 깔끔한 맛이 너무 좋아요. 오이향도 너무 좋아서 종종 오이를 편으로 썰어 함께 먹는 편입니다.',
          createdAt: '2022-07-11',
          liked: true,
      },
      {
          id: 11,
          username: '술을 잘몰라요',
          content: '나는 나쁜 사람',
          createdAt: '2022-07-16',
          liked: false,
      },
      {
          id: 12,
          username: '홀릭커1029',
          content: '오늘 처음 가입해봤는데 익숙한 술이 있길래 리뷰 남겨요. 저는 어렸을 적부터 술을 먹었던 건 아닙니다. 언제 먹기 시작했는지는 더보기로 가릴 예정입니다.궁금하시다고요? 어쩔 수 없어요.',
          createdAt: '2022-03-10',
          liked: false,
      },
      {
          id: 13,
          username: '애주가라면호로록',
          content: '핸드릭스 진 특유의 시원한고 깔끔한 맛이 너무 좋아요. 오이향도 너무 좋아서 종종 오이를 편으로 썰어 함께 먹는 편입니다.',
          createdAt: '2022-07-21',
          liked: true,
      },
      {
          id: 14,
          username: '마시쓰',
          content: '핸드릭스 진 특유의 시원한고 깔끔한 맛이 너무 좋아요. 오이향도 너무 좋아서 종종 오이를 편으로 썰어 함께 먹는 편입니다.',
          createdAt: '2022-07-11',
          liked: true,
      },
      {
          id: 15,
          username: '술을 잘몰라요',
          content: '나는 나쁜 사람',
          createdAt: '2022-07-16',
          liked: false,
      },
      {
          id: 16,
          username: '홀릭커1029',
          content: '오늘 처음 가입해봤는데 익숙한 술이 있길래 리뷰 남겨요. 저는 어렸을 적부터 술을 먹었던 건 아닙니다. 언제 먹기 시작했는지는 더보기로 가릴 예정입니다.궁금하시다고요? 어쩔 수 없어요.',
          createdAt: '2022-03-10',
          liked: false,
    },
    {
      id: 17,
      username: '애주가라면호로록',
      content: '핸드릭스 진 특유의 시원한고 깔끔한 맛이 너무 좋아요. 오이향도 너무 좋아서 종종 오이를 편으로 썰어 함께 먹는 편입니다.',
      createdAt: '2022-07-21',
      liked: true,
  },
  {
      id: 18,
      username: '마시쓰',
      content: '핸드릭스 진 특유의 시원한고 깔끔한 맛이 너무 좋아요. 오이향도 너무 좋아서 종종 오이를 편으로 썰어 함께 먹는 편입니다.',
      createdAt: '2022-07-11',
      liked: true,
  },
  
  ],
};


/** AlcoholType List를 반환 */
mockInstance.onGet('/api/alc-types').reply<BaseApiResult<AlcoholTypeProps[]>>(200, {
  code: 200,
  success: true,
  message: 'alctype mock',
  data: alcoholData,
}
);

/** AlcoholType 하나를 반환 */
mockInstance.onGet('/api/alc-type').reply<BaseApiResult<AlcoholTypeProps>>(200, {
  code: 200,
  success: true,
  message: 'alctype mock',
  data: alcoholData[0],
}
);

/** AlcoholType Detail을 반환 */
mockInstance.onGet(/\/api\/alc-type-detail\//).reply<BaseApiResult<AlcoholDetailInfoProps>>(200, {
  code: 200,
  success: true,
  message: 'alctype detail mock',
  data: alcoholDetailData,
});

/** Alc Type Review들을 반환 */
mockInstance.onGet(/\/api\/alc-type-reviews\//).reply<BaseApiResult<AlcoholTypeReviewsProps>>(200, {
  code: 200,
  success: true,
  message: 'alctype review mock',
  data: alcoholReviewData,
});

/** Alc Type Review들을 반환 */
mockInstance.onGet(/\/api\/alc-type-reviews-all\//).reply<BaseApiResult<AlcoholTypeReviewsProps>>(200, {
  code: 200,
  success: true,
  message: 'alctype all reviews mock',
  data: alcoholReviewDataAll,
});

/** Alc Type Similar List를 반환 ㄴ*/
mockInstance.onGet(/\/api\/alc-type-relevant\//).reply<BaseApiResult<AlcoholTypeProps[]>>(200, {
  code: 200,
  success: true,
  message: 'alctype relevant mock',
  data: [...alcoholData, ...alcoholData],
}
);

/** 검색결과로 AlcoholType List를 반환 */
mockInstance.onGet('/api/alc-types-search').reply<BaseApiResult<AlcoholTypeProps[]>>(200, {
  code: 200,
  success: true,
  message: 'alctype search mock',
  data: alcoholData,
}
);