import { NextPage } from 'next';
import AlcoholHistoryLayout from '@layouts/AlcoholHistoryLayout';
import AlcoholHistoryTitle from '@components/AlcoholHistory/AlcoholHistoryTtile';
import styles from '@styles/AlcoholHistory/AlcoholHistory.module.css';
import AlcoholHistoryWriteForm from '@components/AlcoholHistory/AlcoholHistoryWriteForm';

const AlcoholHistoryPage: NextPage = () => {
  return (
    <AlcoholHistoryLayout>
      <main className="main">
        <AlcoholHistoryTitle titleName="당신의 술 일지" />
        <section className={styles.hs_main_section}>
          <div className={styles.hs_write_container}>
            <AlcoholHistoryWriteForm />
          </div>
        </section>
      </main>
    </AlcoholHistoryLayout>
  );
};

export default AlcoholHistoryPage;
