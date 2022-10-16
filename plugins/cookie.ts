import { instance } from '@api/index';
import { HeadersDefaults } from 'axios';
import cookie from 'react-cookies';

const setToken = (accessToken: string, refreshToken: string) => {
  instance.defaults.headers['access-token' as keyof HeadersDefaults] = accessToken as any;
  const expires = new Date();
  expires.setDate(Date.now() + 1000 * 60 * 60 * 24);

  cookie.save('accessToken', accessToken, {
    path: '/',
    expires,
  });
  cookie.save('refreshToken', refreshToken, {
    path: '/',
    expires,
  });
};

const setCookie = (name: string, value: string) => {
  const expires = new Date();
  expires.setDate(Date.now() + 1000 * 60 * 60 * 24); // 쿠키 저장 시간 1일

  cookie.save(name, value, {
    path: '/',
    expires,
  });
};

const getCookie = (name: string) => {
  return cookie.load(name);
};

export { setToken, setCookie, getCookie };
