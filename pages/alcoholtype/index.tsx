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
      <h3 className={styles.cardListTitle}>당신을 위한 추천! {'>'} </h3>
      <div className={styles.cardListMain}>
        {ATListData.map((alcoholCard: AlcoholTypeProps) => (
          <AlcoholCard 
            key={alcoholCard.id}
            type={'md'} 
            onClick={() =>
              router.push({
                pathname: `/alcoholtype/detail/${alcoholCard.id}`,
              })}
            {...alcoholCard} />
            ))}
      </div>
      <h3 className={styles.cardListTitle}>요즘 핫해요 {'>'} </h3>
      <div className={styles.cardListMain}>
      {ATListData.map((alcoholCard: AlcoholTypeProps) => (
          <AlcoholCard
            key={alcoholCard.id}
            type={'md'} 
            onClick={() =>
              router.push({
                pathname: `/alcoholtype/detail`,
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
      alcoholData: data.data,
    },
  };
};

export default AlcoholTypePage;
