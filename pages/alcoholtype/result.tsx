import AlcoholCard from '@components/AlocholType/ATCard';
import { GetServerSideProps, NextPage } from 'next';
import { AlcoholTypeProps } from '@api/model/alcType';
import styles from '@styles/AlcoholType/ATPageStyle.module.scss';
import layoutStyles from '@layouts/Layout.module.scss';
import SearchBar from '@components/AlocholType/ATSearchBar';
import { useRouter } from 'next/router';
import { getAlcTypes, getSAlcTypesSearchResult } from '../../api/alcType';
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const AlcoholTypePage: NextPage<{ ATListData: AlcoholTypeProps[] }> = ({ATListData}) => {
  const router = useRouter();
  return (
    <div className={layoutStyles.md}>
      <SearchBar />
      <h3 className={styles.cardListTitle}>검색결과</h3>
      <p className={styles.comment}>열심히 검색한 결과 <span>{ATListData.length}</span>개의 결과를 찾았어요.</p>
      <div className={styles.cardListMain}>
        {ATListData?.length > 0 ? ATListData.map((alcoholCard: AlcoholTypeProps) => (
          <AlcoholCard 
            key={alcoholCard.id}
            onClick={() =>
              router.push({
                pathname: `/alcoholtype/detail/${alcoholCard.id}`,
              })}
            {...alcoholCard} />
        )) : <div className={styles.nothingToShowView}>
            <FontAwesomeIcon className={styles.nothingToShowIcon} icon={faCircleExclamation}></FontAwesomeIcon>
          <p className={styles.nothingToShowText}>
            검색결과가 없습니다. 다른 검색어를 입력해주세요.
            </p>
            <p className={styles.nothingToShowSubText}>
              새로운 술 종류를 제안하고 싶다면 <a href="mailto:sujk912@gmail.com ?subject=[술종류문의] 새로운 술 종류 문의드립니다.">여기</a>를 눌러주세요.
            </p>
        </div>}
      </div>
    </div>
  )
}
  
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await getSAlcTypesSearchResult(1, context.query.word as string);
  return {
    props: {
      ATListData: data.data,
    },
  };
};

export default AlcoholTypePage;
