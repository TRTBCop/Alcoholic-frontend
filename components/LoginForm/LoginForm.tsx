import styles from './LoginForm.module.scss';
import mainLogo from '../../public/assets/logo/Alcoholic/AlcoholicLogo.png';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { authService } from '@plugins/firebase/__init__';
import { tokenLogin } from '@api/auth';
import { useRouter } from 'next/router';
import { setToken } from '@plugins/cookie';

const LoginForm: React.FC = () => {
  const router = useRouter();

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result: any = await signInWithPopup(authService, provider);

      const accessToken = result.user.stsTokenManager.accessToken;
      const refreshToken = result.user.stsTokenManager.refreshToken;
      console.log(result, 123);
      setToken(accessToken, refreshToken);

      if (accessToken) {
        const data = await tokenLogin();
        console.log(data);
        if (data.data.code === 200) {
          router.push('/');
        } else {
          alert('구글 로그인에 실패 하였습니다.');
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.login_form}>
      <h3>로그인</h3>
      <p>
        알코올에 홀린 사람 <br />
        알코홀릭
      </p>
      <div className={styles.logo}>
        <img src={mainLogo.src} alt="메인로고" />
      </div>
      <div className={styles.button_wrap}>
        <button className={styles.kakao_login_btn}>카카오로 1초만에 시작하기</button>
        <button className={styles.google_login_btn} onClick={googleLogin}>
          구글계정으로 시작하기
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
