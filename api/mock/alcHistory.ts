import { mockInstance } from './instance';
import { AlcHistoryDaysDrink } from '@api/model/alcHistory';
import { BaseApiResult } from '../model/baseModel';

// TEST CASE
const data: AlcHistoryDaysDrink[] = [
  {
    id: 'A005D',
    write_date: '2022-07-31',
    alcohol_list: [
      {
        alcohol_name: '핸드릭스 진',
        alcohol_type: '진',
        drunked: 464,
        alcohol_intake: 35.34,
        alcohol_image:
          'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160217_243%2Fflairbarista_1455689324870U6chD_JPEG%2F%25C7%25DA%25B5%25E5%25B8%25AF%25BD%25BA.jpg&type=sc960_832',
      },
    ],
    memo: '간단한 메모입니둥1',
  },
  {
    id: 'A005D',
    write_date: '2022-07-20',
    alcohol_list: [
      {
        alcohol_name: '핸드릭스 진',
        alcohol_type: '진',
        drunked: 464,
        alcohol_intake: 35.34,
        alcohol_image:
          'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160217_243%2Fflairbarista_1455689324870U6chD_JPEG%2F%25C7%25DA%25B5%25E5%25B8%25AF%25BD%25BA.jpg&type=sc960_832',
      },
      {
        alcohol_name: '핸드릭스 진',
        alcohol_type: '진',
        drunked: 464,
        alcohol_intake: 35.34,
        alcohol_image:
          'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160217_243%2Fflairbarista_1455689324870U6chD_JPEG%2F%25C7%25DA%25B5%25E5%25B8%25AF%25BD%25BA.jpg&type=sc960_832',
      },
      {
        alcohol_name: '핸드릭스 진',
        alcohol_type: '진',
        drunked: 464,
        alcohol_intake: 35.34,
        alcohol_image:
          'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160217_243%2Fflairbarista_1455689324870U6chD_JPEG%2F%25C7%25DA%25B5%25E5%25B8%25AF%25BD%25BA.jpg&type=sc960_832',
      },
      {
        alcohol_name: '핸드릭스 진',
        alcohol_type: '진',
        drunked: 464,
        alcohol_intake: 35.34,
        alcohol_image:
          'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160217_243%2Fflairbarista_1455689324870U6chD_JPEG%2F%25C7%25DA%25B5%25E5%25B8%25AF%25BD%25BA.jpg&type=sc960_832',
      },
      {
        alcohol_name: '핸드릭스 진',
        alcohol_type: '진',
        drunked: 464,
        alcohol_intake: 35.34,
        alcohol_image:
          'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160217_243%2Fflairbarista_1455689324870U6chD_JPEG%2F%25C7%25DA%25B5%25E5%25B8%25AF%25BD%25BA.jpg&type=sc960_832',
      },
    ],
    memo: '간단한 메모입니둥2',
  },
  {
    id: 'A005D',
    write_date: '2021-07-21',
    alcohol_list: [
      {
        alcohol_name: '핸드릭스 진',
        alcohol_type: '진',
        drunked: 464,
        alcohol_intake: 35.34,
        alcohol_image:
          'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160217_243%2Fflairbarista_1455689324870U6chD_JPEG%2F%25C7%25DA%25B5%25E5%25B8%25AF%25BD%25BA.jpg&type=sc960_832',
      },
    ],
    memo: '간단한 메모입니둥3',
  },
];

mockInstance.onGet('/api/alc-history').reply<BaseApiResult<AlcHistoryDaysDrink[]>>(200, {
  code: 200,
  success: true,
  message: '술 기록 리스트 mock',
  data,
});

mockInstance.onGet(/\/api\/alc-history\//).reply<BaseApiResult<AlcHistoryDaysDrink>>(200, {
  code: 200,
  success: true,
  message: '술 기록 상세 mock',
  data: data[0],
});
