import { NextPage } from 'next';
import AhTitle from '@components/AlcoholHistory/AhTtile';
import layoutStyles from '@layouts/Layout.module.scss';
import styles from '@styles/AlcoholHistory/AlcoholHistory.module.scss';
import AhWriteForm from '@components/AlcoholHistory/AhWriteForm';
import { GetServerSideProps } from 'next';

const AlcoholHistoryPage: NextPage = (props: any) => {
  console.log(props.test);
  return (
    <>
      <main className="main">
        {/* ############# 타이틀 ############# */}
        <AhTitle titleName="당신의 술 일지" />
        {/* ############# 메인 ############# */}
        <section className={styles.hs_main_section}>
          <div className={layoutStyles.ahWriteContainer}>
            <AhWriteForm />
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
