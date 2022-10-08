import styles from './LoginForm.module.scss';
import mainLogo from '../../public/assets/logo/Alcoholic/AlcoholicLogo.png';

const LoginForm: React.FC = () => {
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
        <button className={styles.google_login_btn}>구글계정으로 시작하기</button>
      </div>
    </div>
  );
};

export default LoginForm;
