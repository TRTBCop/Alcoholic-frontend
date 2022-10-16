import { useEffect, useState } from 'react';
import styles from './AhWriteForm.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import AhButton from '@components/AlcoholHistory/AhButton';
import { useRouter } from 'next/router';
import { AlcHistoryDaysDrink, AlcHistoryDrunked, AlcHistoryFormData } from '@api/model/alcHistory';
import { updateAlcHistory, addAlcHistory, deleteAlcHistory } from '@api/alcHistory';
import AhAtSelectModal from '@components/AlcoholHistory/AhAtSelectModal';

interface AlcoholHistoryWriteFormProps {
  itemData: AlcHistoryDaysDrink | null;
}

const AlcoholHistoryWriteForm: React.FC<AlcoholHistoryWriteFormProps> = ({ itemData }) => {
  const router = useRouter();

  /** 선택할 날짜 목록 */
  const [dateData, setDateData] = useState({
    years: [] as number[],
    months: Array.from({ length: 12 }, (v, i) => i + 1),
    days: Array.from({ length: 31 }, (v, i) => i + 1),
  });

  const [formData, setFormdata] = useState<AlcHistoryFormData>({
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

  const addAlcoholList = (data: AlcHistoryDrunked) => {
    setFormdata(value => {
      value.alcoholList.push(data);
      return { ...value };
    });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, index?: number) => {
    const { value, name } = e.target;

    if (name === 'alcoholDrunked') {
      if (index === undefined) return;
      const tempAlcoholList = [...formData.alcoholList];
      tempAlcoholList[index].drunked = Number(value) === 0 ? 0 : Number(value);
      tempAlcoholList[index].alcohol_intake = tempAlcoholList[index].drunked * tempAlcoholList[index].alcohol_degree * 0.7947;

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

  const deleteAHitem = async () => {
    try {
      if (confirm('정말 삭제 하시나요?')) {
        if (!itemData?.id) return;
        const { data } = await deleteAlcHistory(itemData.id);
        if (data.code === 200) {
          alert('삭제되었어요');
          router.push('/alcoholhistory');
        } else {
          alert(`삭제가 정상적으로 진행되지 않았어요 에러코드: ${data.code}`);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateAHitem = async () => {
    try {
      if (formValidation()) {
        if (!itemData?.id) return;

        const { data } = await updateAlcHistory(itemData.id, formData);
        if (data.code === 200) {
          alert('일지를 수정 했어요');
          router.push('/alcoholhistory');
        } else {
          alert(`일지 수정이 정상적으로 진행되지 않았어요 에러코드: ${data.code}`);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const addAHitem = async () => {
    try {
      if (formValidation()) {
        const { data } = await addAlcHistory(formData);

        if (data.code === 200) {
          alert('일지를 등록 했어요');
          router.push('/alcoholhistory');
        } else {
          alert(`일지 작성이 정상적으로 진행되지 않았어요 에러코드: ${data.code}`);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const formValidation = () => {
    if (!formData.writeDateDay || !formData.writeDateMonth || !formData.writeDateYear) {
      alert('날짜를 모두 입력하세요');
      return false;
    }

    if (formData.alcoholList.length <= 0) {
      alert('마신 술은 한 가지 이상 등록해 주세요');
      return false;
    }

    let checkTemp = false;
    formData.alcoholList.forEach(data => {
      if (data.drunked <= 0 || !data.drunked) checkTemp = true;
    });
    if (checkTemp) {
      alert('마신 술의 양을 기입해 주세요');
      return false;
    }

    return true;
  };

  /** 히스토리 메인 페이지로 이동 */
  const goMainPage = () => {
    router.push({
      pathname: `/alcoholhistory/`,
    });
  };

  const [atSelectModal, setAtSelectModal] = useState(false);

  const showAtSelectModal = () => {
    setAtSelectModal(true);
  };

  const hideAtSelectModal = () => {
    setAtSelectModal(false);
  };

  return (
    <>
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
                    마신 양 : <input type="number" name="alcoholDrunked" value={data.drunked} onChange={e => onChange(e, i)} /> ml
                  </li>
                  <li>
                    알코올 섭취량 : <strong>{data.alcohol_intake.toFixed(2)}</strong>
                  </li>
                </ul>
              </div>
            ))}

            <div className={styles.hsWriteDrunkedAddBtn} onClick={showAtSelectModal}>
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
          {itemData ? (
            <>
              <AhButton buttonType="btnType2" clickEvent={updateAHitem}>
                수정
              </AhButton>
              <AhButton buttonType="btnType4" clickEvent={deleteAHitem}>
                삭제
              </AhButton>
            </>
          ) : (
            <AhButton buttonType="btnType2" clickEvent={addAHitem}>
              작성완료
            </AhButton>
          )}
        </section>
        <AhButton buttonType="btnType3" clickEvent={goMainPage}>
          목록
        </AhButton>
      </article>
      <AhAtSelectModal show={atSelectModal} hideAtSelectModal={hideAtSelectModal} addAlcoholList={addAlcoholList} />
    </>
  );
};

export default AlcoholHistoryWriteForm;
