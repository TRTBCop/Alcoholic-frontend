import styles from './AhDetailModal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import AhButton from '@components/AlcoholHistory/AhButton';
import { useRouter } from 'next/router';
import { AlcHistoryDaysDrink } from '@api/model/alcHistory';

interface AhDetailModalProps {
  itemData: AlcHistoryDaysDrink | null;
  isShow: boolean;
  hideDetailModal: () => void;
}

const AlcoholHistoryDetailModal: React.FC<AhDetailModalProps> = ({ itemData, isShow, hideDetailModal }) => {
  const router = useRouter();

  /** 일지 수정하기 페이지로 이동 */
  const goModifiedPage = (id: string) => {
    router.push({
      pathname: `/alcoholhistory/write`,
      query: {
        id,
      },
    });
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

  return (
    <div className={`${styles.popupWrap} ${isShow && styles.on}`}>
      <div className={styles.ahDetailPopup}>
        <div className={styles.ahDetailPopupInner}>
          {itemData ? (
            <>
              {/* ########### 팝업 타이틀 ########### */}
              <h3 className={styles.ahDetailPopupTitle}>
                {formatDate(itemData.write_date)}
                {/* <button onClick={hideDetailModal} className={styles.ahDetailPopupClose}>
                  <FontAwesomeIcon icon={faXmark} />
                </button> */}
              </h3>
              <section className={styles.ahDetailPopupContent}>
                {/* ########### 마신 술 리스트 ########### */}
                <article className={styles.ahDetailDrunkedType}>
                  <h3>마신 술</h3>
                  <div className={styles.ahDetailDrunkedContent}>
                    {itemData.alcohol_list.map((data, i) => (
                      <div className={styles.ahDetailDrunkedAddedItem} key={i}>
                        <figure className={styles.ahDetailDrunkedAddedImg}>
                          <img src={data.alcohol_image} />
                          <figcaption>
                            <p>{data.alcohol_name}</p>
                            <span>{data.alcohol_type}</span>
                          </figcaption>
                        </figure>
                        <ul className={styles.ahDetailDrunkedAddedContent}>
                          <li>마신 양 : {data.drunked} ml</li>
                          <li>
                            알코올 섭취량 : <strong>{data.alcohol_intake}</strong>
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </article>
                {/* ########### 메모 내용 ########### */}
                <article className={styles.ahDetailMemo}>
                  <h3>메모 내용</h3>
                  <div className={styles.ahDetailMemoContent}>
                    <textarea name="ah_detail_memo" cols={50} rows={10} readOnly value={itemData.memo}></textarea>
                  </div>
                </article>
                {/* ########### 버튼 영역 ########### */}
                <article className={styles.ahDetailBtn}>
                  <AhButton buttonType="btnType3" clickEvent={hideDetailModal}>
                    닫기
                  </AhButton>
                  <AhButton buttonType="btnType2" clickEvent={() => goModifiedPage(itemData.id)}>
                    수정
                  </AhButton>
                </article>
              </section>
            </>
          ) : (
            <div> 데이터가 없습니다.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlcoholHistoryDetailModal;
