import { GetServerSideProps, NextPage } from 'next';
import AlcoholHistoryLayout from '@layouts/AlcoholHistoryLayout';
import AlcoholHistoryTitle from '@components/AlcoholHistory/AlcoholHistoryTtile';
import styles from '@styles/AlcoholHistory/AlcoholHistory.module.css';
import AlcoholHistoryWriteForm from '@components/AlcoholHistory/AlcoholHistoryWriteForm';

const AlcoholHistoryPage: NextPage = (props: any) => {
  console.log(props.test);
  return (
    <AlcoholHistoryLayout>
      <main className="main">
        {/* ############# 타이틀 ############# */}
        <AlcoholHistoryTitle titleName="당신의 술 일지" />
        {/* ############# 메인 ############# */}
        <section className={styles.hs_main_section}>
          <div className={styles.hs_write_container}>
            <AlcoholHistoryWriteForm />
          </div>
        </section>
      </main>
    </AlcoholHistoryLayout>
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
