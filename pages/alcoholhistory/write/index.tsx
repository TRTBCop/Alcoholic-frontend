import { NextPage } from 'next';
import AhTitle from '@components/AlcoholHistory/AhTtile';
import layoutStyles from '@layouts/Layout.module.scss';
import styles from '@styles/AlcoholHistory/AlcoholHistory.module.scss';
import AhWriteForm from '@components/AlcoholHistory/AhWriteForm';
import { GetServerSideProps } from 'next';
import { getAlcHistoryDetail } from '@api/alcHistory';
import { AlcHistoryDaysDrink } from '@api/model/alcHistory';

interface AlcoholHistoryWritePageProps {
  itemData: AlcHistoryDaysDrink | null;
}

const AlcoholHistoryWritePage: NextPage<AlcoholHistoryWritePageProps> = ({ itemData }) => {
  return (
    <>
      <main className="main">
        {/* ############# 타이틀 ############# */}
        <AhTitle titleName="당신의 술 일지" />
        {/* ############# 메인 ############# */}
        <section className={styles.hs_main_section}>
          <div className={layoutStyles.ahWriteContainer}>
            <AhWriteForm itemData={itemData} />
          </div>
        </section>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  if (context.query.id) {
    const { data } = await getAlcHistoryDetail(context.query.id as string);
    return {
      props: {
        itemData: data.data,
      },
    };
  } else {
    return {
      props: {
        itemData: null,
      },
    };
  }
};

export default AlcoholHistoryWritePage;
