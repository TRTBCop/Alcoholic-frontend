import axios from 'axios';

//axios mock 사용 안하려면 주석처리 하세요
import '../api/mock';

export const instance = axios.create({
  baseURL: 'http://localhost:3000/',
});
