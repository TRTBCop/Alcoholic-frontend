import { AlcHistoryDay } from '@api/model/alcHistory';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { BaseApiResult } from '../model/baseModel';

const mock = new MockAdapter(axios);

// TEST CASE
const data: AlcHistoryDay[] = [
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
    memo: '간단한 메모입니둥',
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
    ],
    memo: '간단한 메모입니둥',
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
    memo: '간단한 메모입니둥',
  },
];

mock.onGet('/api/alc-history').reply<BaseApiResult<AlcHistoryDay[]>>(200, {
  code: 200,
  success: true,
  message: '학생 정보 mock',
  data,
});
