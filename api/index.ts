import { getCookie } from '@plugins/cookie';
import axios from 'axios';

//axios mock 사용 안하려면 주석처리 하세요
// import '@api/mock';

// axios 인스턴스 생성
const instance = axios.create({
  baseURL: process.env.BASE_URL,
});

// 👇 요청 타임아웃 설정
instance.defaults.timeout = 2500;

// 👇 요청 인터셉터 추가
instance.interceptors.request.use(
  (config: any) => {
    // 요청을 보내기 전에 수행할 로직
    const accessToken = getCookie('accessToken');
    if (accessToken) {
      config.headers['access-token'] = accessToken;
    }

    return config;
  },
  error => {
    // 요청 에러가 발생했을 때 수행할 로직
    console.log(error); // 디버깅
    return Promise.reject(error);
  },
);

// 👇 응답 인터셉터 추가
instance.interceptors.response.use(
  response => {
    //응답에 대한 로직 작성
    const res = response.data;
    return res;
  },
  error => {
    // 응답 에러가 발생했을 때 수행할 로직
    console.log(error); // 디버깅
    return Promise.reject(error);
  },
);

export { instance };
