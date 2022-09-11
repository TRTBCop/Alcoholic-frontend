import styles from './MainLayout.module.scss';
import mainLogo from '../public/assets/img/testLogo1.png';
import { useRouter } from 'next/router';

const Layout: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {
  const router = useRouter();

  const goPage = (pathname: string) => {
    router.push({
      pathname,
    });
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.mainLogo} onClick={() => goPage('/')}>
            <img src={mainLogo.src} alt="" />
          </div>
          <nav>
            <ul>
              <li>
                <a onClick={() => goPage('/alcoholtype')}>Alcohol Type</a>
              </li>
              <li>
                <a onClick={() => goPage('/alcoholhistory')}>Alcohol History</a>
              </li>
              <li>
                <a onClick={() => goPage('/alcoholrecipe')}>Alcohol Recipe</a>
              </li>
            </ul>
            <div className={styles.loginWrap}>
              <button>로그인</button>
              <button>회원가입</button>
            </div>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
