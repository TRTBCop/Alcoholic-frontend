import type { NextPage } from 'next';
import styles from '@styles/MainPage/MainPage.module.scss';
import layoutStyles from '@layouts/Layout.module.scss';
import { FullPage, Slide } from 'react-full-page';
import mainLogo from '../public/assets/img/mainLogo.png';
import mainATlogo from '../public/assets/img/mainATlogo.png';
import mainAHlogo from '../public/assets/img/mainAHlogo.png';
import mainARlogo from '../public/assets/img/mainARlogo.png';
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
        <div className={`${styles.mainSlideInner} ${layoutStyles.mainContainer}`}>
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
              Alcohol Type
            </button>
            <button className={styles.mainBtn} onClick={() => goPage('/alcoholhistory')}>
              Alcohol History
            </button>
            <button className={styles.mainBtn} onClick={() => goPage('/alcoholrecipe')}>
              Alcohol Recipe
            </button>
          </div>
        </div>
      </Slide>
      <Slide className={`${styles.mainSlideItem} ${styles.right}`}>
        <div className={`${styles.mainSlideInner} ${layoutStyles.mainContainer}`}>
          <div className={styles.mainLogo}>
            <img src={mainATlogo.src} alt="" />
          </div>
          <h3 className={styles.mainText}>
            다양한 술들의 정보를
            <br />
            확인해 보세요 :)
          </h3>
          <div className={styles.mainBtnWrap}>
            <button className={styles.mainBtn} onClick={() => goPage('/alcoholtype')}>
              Alcohol Type
            </button>
          </div>
        </div>
      </Slide>
      <Slide className={styles.mainSlideItem}>
        <div className={`${styles.mainSlideInner} ${layoutStyles.mainContainer}`}>
          <div className={styles.mainLogo}>
            <img src={mainAHlogo.src} alt="" />
          </div>
          <h3 className={styles.mainText}>
            마신 술들의 일지를
            <br />
            작성해 보세요 :)
          </h3>
          <div className={styles.mainBtnWrap}>
            <button className={styles.mainBtn} onClick={() => goPage('/alcoholhistory')}>
              Alcohol History
            </button>
          </div>
        </div>
      </Slide>
      <Slide className={`${styles.mainSlideItem} ${styles.right}`}>
        <div className={`${styles.mainSlideInner} ${layoutStyles.mainContainer}`}>
          <div className={styles.mainLogo}>
            <img src={mainARlogo.src} alt="" />
          </div>
          <h3 className={styles.mainText}>
            여러 술들의 레시피 정보를
            <br />
            확인해 보세요 :)
          </h3>
          <div className={styles.mainBtnWrap}>
            <button className={styles.mainBtn} onClick={() => goPage('/alcoholrecipe')}>
              Alcohol Recipe
            </button>
          </div>
        </div>
      </Slide>
    </FullPage>
  );
};

Home.displayName = 'Main';

export default Home;
