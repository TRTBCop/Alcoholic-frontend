import { NextPage } from 'next';
import AlcoholHistoryTitle from '@components/AlcoholHistory/AlcoholHistoryTtile';
import layoutStyles from '@layouts/Layout.module.css';
import styles from '@styles/AlcoholHistory/AlcoholHistory.module.css';
import AlcoholHistoryWriteForm from '@components/AlcoholHistory/AlcoholHistoryWriteForm';
import { GetServerSideProps } from 'next';

const AlcoholHistoryPage: NextPage = (props: any) => {
  console.log(props.test);
  return (
    <>
      <main className="main">
        {/* ############# 타이틀 ############# */}
        <AlcoholHistoryTitle titleName="당신의 술 일지" />
        {/* ############# 메인 ############# */}
        <section className={styles.hs_main_section}>
          <div className={layoutStyles.ahWriteContainer}>
            <AlcoholHistoryWriteForm />
          </div>
        </section>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {
      test: context.query,
    },
  };
};

export default AlcoholHistoryPage;
