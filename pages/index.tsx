import type { NextPage } from 'next';
import styles from '@styles/MainPage/MainPage.module.scss';
import { FullPage, Slide } from 'react-full-page';
import mainLogo from '../public/assets/img/testLogo.png';

const Home: NextPage = () => {
  return (
    <FullPage>
      <Slide className={styles.mainSlideItem}>
        <div className={styles.mainSlideInner}>
          <div className={styles.mainLogo}>
            <img src={mainLogo.src} alt="" />
          </div>
          <h3 className={styles.mainText}>
            건강한 음주를 위한
            <br />
            작은 습관
          </h3>
          <div className={styles.mainBtnWrap}>
            <button className={styles.mainBtn}>일지 쓰기</button>
            <button className={styles.mainBtn}>레시피 보기</button>
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
