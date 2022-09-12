import styles from './AppHeader.module.scss';
import layoutStyles from '@layouts/Layout.module.scss';
import mainLogo from '../../../public/assets/img/testLogo1.png';
import { useRouter } from 'next/router';

type HeaderType = 'default' | 'main';

interface AppHeaderProps {
  headerType: HeaderType;
}

const AppHeader: React.FC<AppHeaderProps> = ({ headerType }) => {
  const router = useRouter();

  const goPage = (pathname: string) => {
    router.push({
      pathname,
    });
  };

  return (
    <header className={`${styles.header} ${headerType === 'main' && styles.main}`}>
      <div className={layoutStyles.mainContainer}>
        <div className={styles.mainLogo} onClick={() => goPage('/')}>
          <img src={mainLogo.src} alt="MainLogo" />
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
  );
};

export default AppHeader;
