import AlcoholCard from '@components/AlocholType/ATCard';
import { NextPage } from 'next';
import { AlcoholTypeEntity } from 'types/entity';
import styles from '@styles/AlcoholType/Alcoholtype.module.scss';
import layoutStyles from '@layouts/Layout.module.scss';
import SearchBar from '@components/AlocholType/ATSearchBar';
import { useRouter } from 'next/router';

// TEST CASE
const alcoholCardTest = [
  {
      id: 1,
      name: 'Hendrick\'s Gin',
      category: '진',
      degree: 44,
      drinkSize: 700,
      image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160217_243%2Fflairbarista_1455689324870U6chD_JPEG%2F%25C7%25DA%25B5%25E5%25B8%25AF%25BD%25BA.jpg&type=sc960_832',
      minPrice: 43490,
      maxPrice: 60000,
      hashtags: [
        '시원한 오이향' ,
        '깔끔함',
        '부드러워요',
      ]
    },
    {
      id: 2,
      name: 'Hendrick\'s Gin',
      category: '진',
      degree: 44,
      drinkSize: 700,
      image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160217_243%2Fflairbarista_1455689324870U6chD_JPEG%2F%25C7%25DA%25B5%25E5%25B8%25AF%25BD%25BA.jpg&type=sc960_832',
      minPrice: 43490,
      maxPrice: 60000,
      hashtags: [
        '시원한 오이향' ,
        '깔끔함',
        '부드러워요',
      ]
    },
    {
      id: 3,
      name: 'Hendrick\'s Gin',
      category: '진',
      degree: 44,
      drinkSize: 700,
      image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160217_243%2Fflairbarista_1455689324870U6chD_JPEG%2F%25C7%25DA%25B5%25E5%25B8%25AF%25BD%25BA.jpg&type=sc960_832',
      minPrice: 43490,
      maxPrice: 60000,
      hashtags: [
        '시원한 오이향' ,
        '시원한 오이향' ,
        '시원한 오이향' ,
        '시원한 오이향' ,
        '시원한 오이향' ,
        '깔끔함',
        '부드러워요',
      ]
    },
];
  
const AlcoholTypePage: NextPage = () => {
  const router = useRouter();

  return (
    <div className={layoutStyles.md}>
      <SearchBar />
      <h3 className={styles.cardListTitle}>당신을 위한 추천! {'>'} </h3>
      <div className={styles.cardListMain}>
        {alcoholCardTest.map((alcoholCard: AlcoholTypeEntity) => (
          <AlcoholCard 
            key={alcoholCard.id}
            type={'md'} 
            onClick={() =>
              router.push({
                pathname: `/alcoholtype/detail/${alcoholCard.id}`,
                query: { id: alcoholCard.id }
              })}
            {...alcoholCard} />
            ))}
      </div>
      <h3 className={styles.cardListTitle}>요즘 핫해요 {'>'} </h3>
      <div className={styles.cardListMain}>
      {alcoholCardTest.map((alcoholCard: AlcoholTypeEntity) => (
          <AlcoholCard
            key={alcoholCard.id}
            type={'md'} 
            onClick={() =>
              router.push({
                pathname: `/alcoholtype/detail`,
                query: { id: alcoholCard.id }
              })}
            {...alcoholCard} />
          ))}
      </div>
    </div>
  )}

export default AlcoholTypePage;
