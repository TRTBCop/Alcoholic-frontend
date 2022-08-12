import AlcoholCard from '@components/AlocholType/AlcoholCard';
import { NextPage } from 'next';
import { AlcoholTypeEntity } from 'types/entity';
import styles from '@styles/AlcoholType/Alcoholtype.module.css';
import SearchBar from '@components/AlocholType/SearchBar';

// TEST CASE
const alcoholCardTest = [
    {
      name: '핸드릭스 진',
      category: '진',
      degree: 44,
      drinkSize: 700,
      image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160217_243%2Fflairbarista_1455689324870U6chD_JPEG%2F%25C7%25DA%25B5%25E5%25B8%25AF%25BD%25BA.jpg&type=sc960_832',
      minPrice: 43490,
      maxPrice: 60000,
      hashtags: [
        '시원한 오이향' ,
        '깔끔함',
        '핸드릭스 진토닉',
        '부드러워요',
      ]
    },
    {
      name: '핸드릭스 진',
      category: '진',
      degree: 44,
      drinkSize: 700,
      image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160217_243%2Fflairbarista_1455689324870U6chD_JPEG%2F%25C7%25DA%25B5%25E5%25B8%25AF%25BD%25BA.jpg&type=sc960_832',
      minPrice: 43490,
      maxPrice: 60000,
      hashtags: [
        '시원한 오이향' ,
        '깔끔함',
        '핸드릭스 진토닉',
        '부드러워요',
      ]
    },
    {
      name: '핸드릭스 진',
      category: '진',
      degree: 44,
      drinkSize: 700,
      image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160217_243%2Fflairbarista_1455689324870U6chD_JPEG%2F%25C7%25DA%25B5%25E5%25B8%25AF%25BD%25BA.jpg&type=sc960_832',
      minPrice: 43490,
      maxPrice: 60000,
      hashtags: [
        '시원한 오이향' ,
        '깔끔함',
        '핸드릭스 진토닉',
        '부드러워요',
      ]
    },
  ];
const AlcoholTypePage: NextPage = () => {
  return (
    <>
      <SearchBar />
      <h3>당신을 위한 추천! {'>'} </h3>
      <div className={styles.cardListMain}>
      {alcoholCardTest.map((alcoholCard: AlcoholTypeEntity) => (
        <AlcoholCard key={alcoholCard.id} type={'md'} {...alcoholCard} />
      ))}
      </div>
      <h3>요즘 핫해요 {'>'} </h3>
      <div className={styles.cardListMain}>
      {alcoholCardTest.map((alcoholCard: AlcoholTypeEntity) => (
        <AlcoholCard key={alcoholCard.id} type={'md'} {...alcoholCard} />
      ))}
      </div>
    </>
  )}

export default AlcoholTypePage;
