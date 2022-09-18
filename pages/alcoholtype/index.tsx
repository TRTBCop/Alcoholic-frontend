import AlcoholCard from '@components/AlocholType/ATCard';
import { GetServerSideProps, NextPage } from 'next';
import { AlcoholTypeProps } from '@api/model/alcType';
import styles from '@styles/AlcoholType/ATPageStyle.module.scss';
import layoutStyles from '@layouts/Layout.module.scss';
import SearchBar from '@components/AlocholType/ATSearchBar';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getAlcTypes } from './../../api/alcType';


const AlcoholTypePage: NextPage<{ ATListData: AlcoholTypeProps[] }> = ({ATListData}) => {
  const router = useRouter();

  return (
    <div className={layoutStyles.md}>
      <SearchBar />
      <h3 className={styles.cardListTitle}>당신을 위한 추천! 😉</h3>
      <p className={styles.comment}>당신에게 맞는 술을 추천해드려요</p>
      <div className={styles.cardListMain}>
        {ATListData?.map((alcoholCard: AlcoholTypeProps) => (
          <AlcoholCard 
            key={alcoholCard.id}
            onClick={() =>
              router.push({
                pathname: `/alcoholtype/detail/${alcoholCard.id}`,
              })}
            {...alcoholCard} />
            ))}
      </div>
      <h3 className={styles.cardListTitle}>요즘 핫해요 🔥</h3>
      <p className={styles.comment}>최근 들어 사람들이 많이 찾는 술이예요</p>
      <div className={styles.cardListMain}>
      {ATListData?.map((alcoholCard: AlcoholTypeProps) => (
          <AlcoholCard
            key={alcoholCard.id}
            onClick={() =>
              router.push({
                pathname: `/alcoholtype/detail/${alcoholCard.id}`,
              })}
            {...alcoholCard} />
          ))}
      </div>
    </div>
  )
}
  
export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await getAlcTypes();
  return {
    props: {
      ATListData: data.data,
    },
  };
};

export default AlcoholTypePage;
