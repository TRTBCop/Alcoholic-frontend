import { GetServerSideProps, NextPage } from 'next';
import AhTitle from '@components/AlcoholHistory/AhTtile';
import AhButton from '@components/AlcoholHistory/AhButton';
import layoutStyles from '@layouts/Layout.module.scss';
import styles from '@styles/AlcoholHistory/AlcoholHistory.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import AhMainCard from '@components/AlcoholHistory/AhMainCard';
import AhDetailModal from '@components/AlcoholHistory/AhDetailModal';
import { getAlcHistory } from '@api/alcHistory';
import { AlcHistoryDaysDrink } from '@api/model/alcHistory';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface AlcoholHistoryPageProps {
  daysDrinkData: AlcHistoryDaysDrink[];
}

const AlcoholHistoryPage: NextPage<AlcoholHistoryPageProps> = props => {
  const { daysDrinkData } = props;
  const router = useRouter();

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

  /** 일지 작성하기 페이지로 이동 */
  const goWritePage = () => {
    router.push({
      pathname: `/alcoholhistory/write`,
    });
  };

  /** 상세 모달 오픈 */
  const showDetailModal = (itemData: AlcHistoryDaysDrink) => {
    seDetailModalItemDatal(itemData);
    setIsShowDetailModal(true);
  };

  /** 상세 모달을 숨김 */
  const hideDetailModal = () => {
    seDetailModalItemDatal(null);
    setIsShowDetailModal(false);
  };

  /** 모달 창의 show 여부 */
  const [isShowDetailModal, setIsShowDetailModal] = useState<boolean>(false);

  /** 상세 모달에서 보여질 정보 */
  const [detailModalItemData, seDetailModalItemDatal] = useState<AlcHistoryDaysDrink | null>(null);

  return (
    <>
      {/* ############# 타이틀 ############# */}
      <AhTitle titleName="당신의 술 일지" />
      {/* ############# 메인 ############# */}
      <section>
        <div className={layoutStyles.md}>
          {/* 필터 버튼 및 글작성 */}
          <article className={styles.ahListBtnSection}>
            <AhButton buttonType="btnType1" clickEvent={goWritePage}>
              일지쓰기 <FontAwesomeIcon icon={faPencil} />
            </AhButton>
          </article>
          {/* 일자별 술 일지 리스트 */}
          <article>
            {daysDrinkData.map((item, i) => (
              <div className={styles.ahMainContent} key={i}>
                <h4>{formatDate(item.write_date)}</h4>
                <ul>
                  {item.alcohol_list.map((alcoholData, j) => (
                    <li onClick={() => showDetailModal(item)} key={j}>
                      <AhMainCard {...alcoholData} write_date={item.write_date} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </article>
          {/* 더보기 버튼 */}
          <article className={styles.ahListMore}>
            <button>
              더보기 <FontAwesomeIcon icon={faAngleDown} />
            </button>
          </article>
        </div>
      </section>
      <AhDetailModal itemData={detailModalItemData} isShow={isShowDetailModal} hideDetailModal={hideDetailModal} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await getAlcHistory();

  return {
    props: {
      daysDrinkData: data.data,
    },
  };
};

export default AlcoholHistoryPage;
