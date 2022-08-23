import { GetServerSideProps, NextPage } from 'next';
import AlcoholHistoryTitle from '@components/AlcoholHistory/AlcoholHistoryTtile';
import layoutStyles from '@layouts/Layout.module.css';
import styles from '@styles/AlcoholHistory/AlcoholHistory.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import AlcoholHistoryMainCard from '@components/AlcoholHistory/AlcoholHistoryMainCard';
import AlcoholHistoryDetailModal from '@components/AlcoholHistory/AlcoholHistoryDetailModal';
import Link from 'next/link';
import { getAlcHistory } from 'api/alcHistory';
import { AlcHistoryDay } from 'api/model/alcHistory';

interface AlcoholHistoryPageProps {
  weekData: AlcHistoryDay[];
}

const AlcoholHistoryPage: NextPage<AlcoholHistoryPageProps> = props => {
  const { weekData } = props;

  /** "yyyy년 mm월 dd일 x요일" 형식으로 날짜를 포맷 시킴 */
  const formatDate = (data: string) => {
    const weekList = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    const date = new Date(data);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const week = weekList[date.getDay()];

    return `${year}년 ${month <= 9 ? '0' + month : month}월 ${day <= 9 ? '0' + day : day}일 ${week}`;
  };

  return (
    <>
        {/* ############# 타이틀 ############# */}
        <AlcoholHistoryTitle titleName="당신의 술 일지" />
        {/* ############# 메인 ############# */}
        <section className={styles.hsMainSection}>
          <div className={layoutStyles.basic}>
            {/* 필터 버튼 및 글작성 */}
            <article className={styles.hsListBtnSection}>
              <Link
                href={{
                  pathname: '/alcoholhistory/write',
                }}
              >
                <button className="btnType1">
                  일지쓰기 <FontAwesomeIcon icon={faPencil} />
                </button>
              </Link>
            </article>
            {/* 일자별 술 일지 리스트 */}
            <article>
              {weekData.map((item, i) => (
                <div className={styles.hsMainContent} key={i}>
                  <h4>{formatDate(item.write_date)}</h4>
                  <ul>
                    {item.alcohol_list.map((alcoholData: any, j) => (
                      <AlcoholHistoryMainCard {...alcoholData} write_date={item.write_date} key={j} />
                    ))}
                  </ul>
                </div>
              ))}
            </article>
            {/* 더보기 버튼 */}
            <article className={styles.hsListMore}>
              <button>
                더보기 <FontAwesomeIcon icon={faAngleDown} />
              </button>
            </article>
          </div>
        </section>
      <AlcoholHistoryDetailModal is_show={false} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await getAlcHistory();

  return {
    props: {
      weekData: data.data,
    },
  };
};

export default AlcoholHistoryPage;
