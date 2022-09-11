import type { NextPage } from 'next';
import styles from '@styles/MainPage/MainPage.module.scss';
import layoutStyles from '@layouts/MainLayout.module.scss';
import { FullPage, Slide } from 'react-full-page';
import mainLogo from '../public/assets/img/testLogo.png';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();

  const goPage = (pathname: string) => {
    router.push({
      pathname,
    });
  };

  return (
    <FullPage>
      <Slide className={styles.mainSlideItem}>
        <div className={`${styles.mainSlideInner} ${layoutStyles.container}`}>
          <div className={styles.mainLogo}>
            <img src={mainLogo.src} alt="" />
          </div>
          <h3 className={styles.mainText}>
            건강한 음주를 위한
            <br />
            작은 습관
          </h3>
          <div className={styles.mainBtnWrap}>
            <button className={styles.mainBtn} onClick={() => goPage('/alcoholtype')}>
              술 목록
            </button>
            <button className={styles.mainBtn} onClick={() => goPage('/alcoholhistory')}>
              일지 쓰기
            </button>
            <button className={styles.mainBtn} onClick={() => goPage('/alcoholrecipe')}>
              레시피 보기
            </button>
          </div>
        </div>
      </Slide>
      <Slide className={styles.mainSlideItem}></Slide>
      <Slide className={styles.mainSlideItem}></Slide>
    </FullPage>
  );
};

Home.displayName = 'Main';

export default Home;
