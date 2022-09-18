import styles from './AppHeader.module.scss';
import layoutStyles from '@layouts/Layout.module.scss';
/** 배경 색, 상태에 따라 골라쓰면 됩니당*/
import mainLogo from '../../../public/assets/logo/Alcoholic/AlcoholicLogo.png';
import whiteMainLogo from '../../../public/assets/logo/Alcoholic/AlcoholicLogo_white.png';
import OnlyWhiteMainLogo from '../../../public/assets/logo/Alcoholic/AlcoholicLogo_onlyWhite.png';
import OnlyBlackMainLogo from '../../../public/assets/logo/Alcoholic/AlcoholicLogo_onlyBlack.png';
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
          {headerType === 'main' ? (<img src={whiteMainLogo.src} alt="whiteMainLogo" />) : (<img src={mainLogo.src} alt="mainLogo" />)}
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
