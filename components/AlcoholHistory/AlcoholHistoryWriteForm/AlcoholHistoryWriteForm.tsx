import { useEffect, useState } from 'react';
import styles from './AlcoholHistoryWriteForm.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const AlcoholHistoryWriteForm: React.FC = () => {
  const [dateData, setDateData] = useState({
    years: [] as number[],
    months: Array.from({ length: 12 }, (v, i) => i + 1),
    days: Array.from({ length: 31 }, (v, i) => i + 1),
  });

  const [formData, setFormdata] = useState({
    write_date_year: 0,
    write_date_month: 0,
    write_date_day: 0,
  });

  useEffect(() => {
    getSelectYears();
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value, name } = e.target;

    setFormdata({
      ...formData,
      [name]: value,
    });
  };

  /** 오늘을 기준으로 5년 전까지 선택 가능하게 */
  const getSelectYears = () => {
    let year = new Date().getFullYear();

    let years: number[] = [];
    for (let i = 0; i < 5; i++) {
      years.push(year);
      year--;
    }
    setDateData({
      ...dateData,
      years: years.reverse(),
    });
  };

  return (
    <article className={styles.hsWriteForm}>
      <section className={styles.hsWriteDrunkedDate}>
        <h3>음주일자</h3>
        <div className={styles.hsWriteDateContent}>
          <select name="write_date_year" onChange={onChange}>
            <option value="">연도 선택</option>
            {dateData.years.map(year => (
              <option value={year} key={year}>
                {year}
              </option>
            ))}
          </select>
          <select name="write_date_month" onChange={onChange}>
            <option value="">월 선택</option>
            {dateData.months.map(month => (
              <option value={month} key={month}>
                {month}
              </option>
            ))}
          </select>
          <select name="write_date_day" onChange={onChange}>
            <option value="">일 선택</option>
            {dateData.days.map(day => (
              <option value={day} key={day}>
                {day}
              </option>
            ))}
          </select>
        </div>
      </section>
      <section className={styles.hsWriteDrunkedType}>
        <h3>음주 종류</h3>
        <div className={styles.hsWriteDrunkedContent}>
          <div className={styles.hsWriteDrunkedAddedItem}>
            <figure className={styles.hsWriteDrunkedAddedImg}>
              <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160217_243%2Fflairbarista_1455689324870U6chD_JPEG%2F%25C7%25DA%25B5%25E5%25B8%25AF%25BD%25BA.jpg&type=sc960_832" />
              <figcaption>
                <p>Absolut Vanilia</p>
                <span>보드카</span>
              </figcaption>
            </figure>
            <ul className={styles.hsWriteDrunkedAddedContent}>
              <li>
                마신 양 : <input type="text" /> ml
              </li>
              <li>
                알코올 섭취량 : <strong>47.68</strong>
              </li>
            </ul>
          </div>
          <div className={styles.hsWriteDrunkedAddBtn}>
            <button>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      </section>
      <section className={styles.hsWriteDrunkedMemo}>
        <h3>메모 내용</h3>
        <div className={styles.hsWriteMemoContent}>
          <textarea name="hs_write_memo" id="hs_write_memo" cols={50} rows={10} placeholder="간단한 메모 내용을 작성해주세요."></textarea>
        </div>
      </section>
      <section className={styles.hsWriteBtn}>
        <button className="btnType2">작성완료</button>
      </section>
      <Link
        href={{
          pathname: '/alcoholhistory',
        }}
      >
        <button className="btnType3">목록</button>
      </Link>
    </article>
  );
};

export default AlcoholHistoryWriteForm;
