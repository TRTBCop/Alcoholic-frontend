import { NextPage } from 'next';
import AlcoholHistoryLayout from '@layouts/AlcoholHistoryLayout';
import AlcoholHistoryTitle from '@components/AlcoholHistory/AlcoholHistoryTtile';
import styles from '@styles/AlcoholHistory/AlcoholHistory.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import AlcoholHistoryMainCard from '@components/AlcoholHistory/AlcoholHistoryMainCard';
import AlcoholHistoryDetailModal from '@components/AlcoholHistory/AlcoholHistoryDetailModal';
import Link from 'next/link';

// TEST CASE
const data = [
  {
    id: 'A005D',
    write_date: '2022-07-31',
    alcohol_list: [
      {
        alcohol_name: '핸드릭스 진',
        alcohol_type: '진',
        drunked: 464,
        alcohol_intake: 35.34,
        alcohol_image:
          'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160217_243%2Fflairbarista_1455689324870U6chD_JPEG%2F%25C7%25DA%25B5%25E5%25B8%25AF%25BD%25BA.jpg&type=sc960_832',
      },
    ],
  },
  {
    id: 'A005D',
    write_date: '2022-07-20',
    alcohol_list: [
      {
        alcohol_name: '핸드릭스 진',
        alcohol_type: '진',
        drunked: 464,
        alcohol_intake: 35.34,
        alcohol_image:
          'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160217_243%2Fflairbarista_1455689324870U6chD_JPEG%2F%25C7%25DA%25B5%25E5%25B8%25AF%25BD%25BA.jpg&type=sc960_832',
      },
    ],
  },
  {
    id: 'A005D',
    write_date: '2021-07-21',
    alcohol_list: [
      {
        alcohol_name: '핸드릭스 진',
        alcohol_type: '진',
        drunked: 464,
        alcohol_intake: 35.34,
        alcohol_image:
          'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160217_243%2Fflairbarista_1455689324870U6chD_JPEG%2F%25C7%25DA%25B5%25E5%25B8%25AF%25BD%25BA.jpg&type=sc960_832',
      },
    ],
  },
];

const AlcoholHistoryPage: NextPage = () => {
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
      <AlcoholHistoryLayout>
        <AlcoholHistoryTitle titleName="당신의 술 일지" />
        <section className={styles.hs_main_section}>
          <div className="container">
            <article className={styles.hs_list_btn_section}>
              <Link
                href={{
                  pathname: '/alcoholhistory/write',
                }}
              >
                <button className="btn_type_1">
                  일지쓰기 <FontAwesomeIcon icon={faPencil} />
                </button>
              </Link>
            </article>
            <article className={styles.hs_main_contents_section}>
              {data.map((item, i) => (
                <div className={styles.hs_main_content} key={i}>
                  <h4>{formatDate(item.write_date)}</h4>
                  <ul>
                    {item.alcohol_list.map((alcoholData: any, j) => (
                      <AlcoholHistoryMainCard {...alcoholData} write_date={item.write_date} key={j} />
                    ))}
                  </ul>
                </div>
              ))}
            </article>
            <article className={styles.hs_list_more}>
              <button>
                더보기 <FontAwesomeIcon icon={faAngleDown} />
              </button>
            </article>
          </div>
        </section>
      </AlcoholHistoryLayout>
      <AlcoholHistoryDetailModal is_show={false} />
    </>
  );
};

export default AlcoholHistoryPage;
