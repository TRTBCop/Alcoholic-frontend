import styles from './AhDetailModal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import AhButton from '@components/AlcoholHistory/AhButton';
import { useRouter } from 'next/router';

interface AhDetailModalProps {
  isShow: boolean;
  hideDetailModal: () => void;
}

const AlcoholHistoryDetailModal: React.FC<AhDetailModalProps> = ({
    isShow,
    hideDetailModal
  }
) => {
  const router = useRouter();

  /** 일지 수정하기 페이지로 이동 */
  const goModifiedPage = () => {
    router.push({
      pathname: `/alcoholhistory/write`,
      // 파라미터로 글 id 같이 전송
    })
  }

  return (
    <div className={`${styles.popupWrap} ${isShow && styles.on}`}>
      <div className={styles.ahDetailPopup}>
        <div className={styles.ahDetailPopupInner}>
          <h3 className={styles.ahDetailPopupTitle}>2022년 07월 22일</h3>
          <section className={styles.ahDetailPopupContent}>
            <article className={styles.ahDetailDrunkedType}>
              <h3>마신 술</h3>
              <div className={styles.ahDetailDrunkedContent}>
                <div className={styles.ahDetailDrunkedAddedItem}>
                  <figure className={styles.ahDetailDrunkedAddedImg}>
                    <img src="./images/test_1.jpg" />
                    <figcaption>
                      <p>Absolut Vanilia</p>
                      <span>보드카</span>
                    </figcaption>
                  </figure>
                  <ul className={styles.ahDetailDrunkedAddedContent}>
                    <li>마신 양 : 150 ml</li>
                    <li>
                      알코올 섭취량 : <strong>47.68</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article className={styles.ahDetailMemo}>
              <h3>메모 내용</h3>
              <div className={styles.ahDetailMemoContent}>
                <textarea name="ah_detail_memo" cols={50} rows={10} readOnly value={' 비싼 돈 주고 사먹었는데 너무 쓰다....'}></textarea>
              </div>
            </article>
            <article className={styles.ahDetailBtn}>
            <AhButton buttonType='btnType3' clickEvent={hideDetailModal}>닫기</AhButton>              
            <AhButton buttonType='btnType2' clickEvent={goModifiedPage}>수정</AhButton>              
            </article>
            <button onClick={hideDetailModal} className={styles.ahDetailPopupClose}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AlcoholHistoryDetailModal;
