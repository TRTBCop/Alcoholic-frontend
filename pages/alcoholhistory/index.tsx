import { GetServerSideProps, NextPage } from 'next';
import AhTitle from '@components/AlcoholHistory/AhTtile';
import AhButton from '@components/AlcoholHistory/AhButton';
import layoutStyles from '@layouts/Layout.module.scss';
import styles from '@styles/AlcoholHistory/AlcoholHistory.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faAngleDown, faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import AhMainCard from '@components/AlcoholHistory/AhMainCard';
import AhDetailModal from '@components/AlcoholHistory/AhDetailModal';
import { getAlcHistory } from '@api/alcHistory';
import { AlcHistoryDaysDrink } from '@api/model/alcHistory';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import cookies from 'next-cookies';
import { setToken } from '@plugins/cookie';

interface AlcoholHistoryPageProps {
  daysDrinkData: AlcHistoryDaysDrink[];
}

const AlcoholHistoryPage: NextPage<AlcoholHistoryPageProps> = ({ daysDrinkData }) => {
  const router = useRouter();

  const [ahListData, setAhListData] = useState<AlcHistoryDaysDrink[]>([...daysDrinkData]);

  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    if (currentPage === 1) return;
    getAlcHistoryList(currentPage);
  }, [currentPage]);

  const getAlcHistoryList = async (page = 1) => {
    try {
      const { data } = await getAlcHistory(page);
      setAhListData(currentVal => [...currentVal, ...data.data]);
    } catch (err) {
      console.log(err);
    }
  };

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
    setDetailModalItemData(itemData);
    setIsShowDetailModal(true);
  };

  /** 상세 모달을 숨김 */
  const hideDetailModal = () => {
    setDetailModalItemData(null);
    setIsShowDetailModal(false);
  };

  /** 모달 창의 show 여부 */
  const [isShowDetailModal, setIsShowDetailModal] = useState<boolean>(false);

  useEffect(() => {
    if (isShowDetailModal) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.removeAttribute('style');
    };
  }, [isShowDetailModal]);

  /** 상세 모달에서 보여질 정보 */
  const [detailModalItemData, setDetailModalItemData] = useState<AlcHistoryDaysDrink | null>(null);

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
            {ahListData.length > 0 ? (
              ahListData.map((item, i) => (
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
              ))
            ) : (
              <div className={styles.noData}>
                <FontAwesomeIcon icon={faNoteSticky} />
                기록이 없습니다
              </div>
            )}
          </article>
          {/* 더보기 버튼 */}
          {ahListData.length > 0 && (
            <article className={styles.ahListMore}>
              <button onClick={() => setCurrentPage(value => value + 1)}>
                더보기 <FontAwesomeIcon icon={faAngleDown} />
              </button>
            </article>
          )}
        </div>
      </section>
      <AhDetailModal itemData={detailModalItemData} isShow={isShowDetailModal} hideDetailModal={hideDetailModal} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const allCookies = cookies(context);
  if (allCookies.accessToken && allCookies.refreshToken) {
    setToken(allCookies.accessToken, allCookies.refreshToken);
    try {
      const { data } = await getAlcHistory();
      return {
        props: {
          daysDrinkData: data.data,
        },
      };
    } catch (err) {
      console.log(err);
      return {
        props: {
          daysDrinkData: null,
        },
      };
    }
  } else {
    return {
      props: {
        daysDrinkData: null,
      },
    };
  }
};

export default AlcoholHistoryPage;
