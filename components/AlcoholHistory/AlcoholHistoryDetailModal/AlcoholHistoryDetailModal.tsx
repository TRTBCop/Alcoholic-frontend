import styles from './AlcoholHistoryDetailModal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

interface AlcoholHistoryDetailModalProps {
  is_show: boolean;
}

const AlcoholHistoryDetailModal: React.FC<AlcoholHistoryDetailModalProps> = (
  props = {
    is_show: false,
  },
) => {
  return (
    <div className={`${styles.popup_wrap} ${props.is_show && styles.on}`}>
      <div className={styles.hs_detail_popup}>
        <div className={styles.hs_detail_popup_inner}>
          <h3 className={styles.hs_detail_popup_title}>2022년 07월 22일</h3>
          <section className={styles.hs_detail_popup_content}>
            <article className={styles.hs_detail_drunked_type}>
              <h3>마신 술</h3>
              <div className={styles.hs_detail_drunked_content}>
                <div className={styles.hs_detail_drunked_added_item}>
                  <figure className={styles.hs_detail_drunked_added_img}>
                    <img src="./images/test_1.jpg" />
                    <figcaption>
                      <p>Absolut Vanilia</p>
                      <span>보드카</span>
                    </figcaption>
                  </figure>
                  <ul className={styles.hs_detail_drunked_added_content}>
                    <li>마신 양 : 150 ml</li>
                    <li>
                      알코올 섭취량 : <strong>47.68</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article className={styles.hs_detail_memo}>
              <h3>메모 내용</h3>
              <div className={styles.hs_detail_memo_content}>
                <textarea name="hs_detail_memo" cols={50} rows={10} readOnly value={' 비싼 돈 주고 사먹었는데 너무 쓰다....'}></textarea>
              </div>
            </article>
            <article className={styles.hs_detail_btn}>
              <button className="btn_type_3">닫기</button>
              <button className="btn_type_2">수정</button>
            </article>
            <button className={styles.hs_detail_popup_close}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AlcoholHistoryDetailModal;
