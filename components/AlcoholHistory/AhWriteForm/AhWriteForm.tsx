import { useEffect, useState } from 'react';
import styles from './AhWriteForm.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import AhButton from '@components/AlcoholHistory/AhButton';
import { useRouter } from 'next/router';
import { AlcHistoryDaysDrink, AlcHistoryDrunked } from '@api/model/alcHistory';

interface AlcoholHistoryWriteFormProps {
  itemData: AlcHistoryDaysDrink | null;
}

interface FormData {
  writeDateYear: number;
  writeDateMonth: number;
  writeDateDay: number;
  alcoholList: AlcHistoryDrunked[];
  memo: string;
}

const AlcoholHistoryWriteForm: React.FC<AlcoholHistoryWriteFormProps> = ({ itemData }) => {
  const router = useRouter();

  /** 선택할 날짜 목록 */
  const [dateData, setDateData] = useState({
    years: [] as number[],
    months: Array.from({ length: 12 }, (v, i) => i + 1),
    days: Array.from({ length: 31 }, (v, i) => i + 1),
  });

  const [formData, setFormdata] = useState<FormData>({
    writeDateYear: 0,
    writeDateMonth: 0,
    writeDateDay: 0,
    alcoholList: [],
    memo: '',
  });

  useEffect(() => {
    initFormData();
  }, [itemData]);

  useEffect(() => {
    getSelectYears();
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, index?: number) => {
    const { value, name } = e.target;

    if (name === 'alcoholDrunked') {
      if (index === undefined) return;
      const tempAlcoholList = [...formData.alcoholList];
      tempAlcoholList[index].drunked = Number(value);
      setFormdata({
        ...formData,
        alcoholList: [...tempAlcoholList],
      });
    } else {
      setFormdata({
        ...formData,
        [name]: value,
      });
    }
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

  /** 폼 데이터 세팅 */
  const initFormData = () => {
    if (!itemData) return;

    const writeDate = new Date(itemData.write_date);

    setFormdata({
      writeDateYear: writeDate.getFullYear(),
      writeDateMonth: writeDate.getMonth() + 1,
      writeDateDay: writeDate.getDate(),
      alcoholList: itemData.alcohol_list,
      memo: itemData.memo,
    });
  };

  /** 히스토리 메인 페이지로 이동 */
  const goMainPage = () => {
    router.push({
      pathname: `/alcoholhistory/`,
    });
  };

  return (
    <article className={styles.hsWriteForm}>
      <section className={styles.hsWriteDrunkedDate}>
        <h3>음주일자</h3>
        <div className={styles.hsWriteDateContent}>
          <select name="writeDateYear" onChange={onChange} value={formData.writeDateYear}>
            <option value="">연도 선택</option>
            {dateData.years.map(year => (
              <option value={year} key={year}>
                {year}
              </option>
            ))}
          </select>
          <select name="writeDateMonth" onChange={onChange} value={formData.writeDateMonth}>
            <option value="">월 선택</option>
            {dateData.months.map(month => (
              <option value={month} key={month}>
                {month}
              </option>
            ))}
          </select>
          <select name="writeDateDay" onChange={onChange} value={formData.writeDateDay}>
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
          {formData.alcoholList.map((data, i) => (
            <div className={styles.hsWriteDrunkedAddedItem} key={i}>
              <figure className={styles.hsWriteDrunkedAddedImg}>
                <img src={data.alcohol_image} />
                <figcaption>
                  <p>{data.alcohol_name}</p>
                  <span>{data.alcohol_type}</span>
                </figcaption>
              </figure>
              <ul className={styles.hsWriteDrunkedAddedContent}>
                <li>
                  마신 양 : <input type="text" name="alcoholDrunked" value={data.drunked} onChange={e => onChange(e, i)} /> ml
                </li>
                <li>
                  알코올 섭취량 : <strong>47.68</strong>
                </li>
              </ul>
            </div>
          ))}

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
          <textarea
            name="memo"
            cols={50}
            rows={10}
            placeholder="간단한 메모 내용을 작성해주세요."
            value={formData.memo}
            onChange={onChange}
          ></textarea>
        </div>
      </section>
      <section className={styles.hsWriteBtn}>
        <AhButton buttonType="btnType2">작성완료</AhButton>
      </section>
      <AhButton buttonType="btnType3" clickEvent={goMainPage}>
        목록
      </AhButton>
    </article>
  );
};

export default AlcoholHistoryWriteForm;
