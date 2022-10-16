import { ChangeEvent, useEffect, useRef, useState } from 'react';
import styles from './AhAtSelectModal.module.scss';
import atStyles from '@styles/AlcoholType/ATPageStyle.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation, faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import data from '../../AlocholType/ATSearchBar/ListData.json';
import { AlcoholTypeProps } from '@api/model/alcType';
import AlcoholCard from '@components/AlocholType/ATCard';
import { AlcHistoryDrunked } from '@api/model/alcHistory';

interface Props {
  show: boolean;
  hideAtSelectModal: () => void;
  addAlcoholList: (data: AlcHistoryDrunked) => void;
}

const AhAtSelectModal: React.FC<Props> = props => {
  /* 팝업창이 보일 때 body 스크롤 막음 */
  useEffect(() => {
    if (props.show) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.removeAttribute('style');
    };
  }, [props.show]);

  const inputuseRef = useRef<HTMLInputElement>(null);

  interface SearchData {
    id: number;
    text: string;
  }

  const [inputText, setInputText] = useState('');
  function inputChanged(e: ChangeEvent<HTMLInputElement>): void {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  }

  /** Fetching FilteredData  */
  const [filteredData, setFilteredData] = useState<SearchData[]>([]);
  useEffect(() => {
    setFilteredData(
      data.filter(el => {
        if (inputText === '') return null;
        else return el.text.toLowerCase().includes(inputText);
      }),
    );
  }, [inputText]);

  // 검색 결과 요청
  const searchButtonClicked = (): void => {
    if (inputText === '') return;
    // 검색 요청 api 쏘기
    setSearchResultData([...testData]);
  };

  // TEST CASE
  const testData: AlcoholTypeProps[] = [
    {
      id: 1,
      name: "Hendrick's Gin 어디까지 글자가 늘어나는 거예요??? 어디까지 늘어날까요?? 어디까지 늘어나는지 아시나요?? 어디까지 가능한가요?",
      category: '진',
      degree: 44,
      drinkSize: 700,
      image:
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160217_243%2Fflairbarista_1455689324870U6chD_JPEG%2F%25C7%25DA%25B5%25E5%25B8%25AF%25BD%25BA.jpg&type=sc960_832',
      minPrice: 43490,
      maxPrice: 60000,
      hashtags: [
        '시원한 오이향',
        '깔끔함',
        '부드러워요',
        '시원한 오이향',
        '깔끔함',
        '부드러워요',
        '시원한 오이향',
        '깔끔함',
        '부드러워요',
        '시원한 오이향',
        '깔끔함',
        '부드러워요',
        '시원한 오이향',
        '깔끔함',
        '부드러워요',
      ],
    },
    {
      id: 2,
      name: "Hendrick's Gin",
      category: '진',
      degree: 44,
      drinkSize: 700,
      image:
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160217_243%2Fflairbarista_1455689324870U6chD_JPEG%2F%25C7%25DA%25B5%25E5%25B8%25AF%25BD%25BA.jpg&type=sc960_832',
      minPrice: 43490,
      maxPrice: 60000,
      hashtags: ['시원한 오이향', '깔끔함', '부드러워요'],
    },
    {
      id: 3,
      name: "Hendrick's Gin",
      category: '진',
      degree: 44,
      drinkSize: 700,
      image:
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160217_243%2Fflairbarista_1455689324870U6chD_JPEG%2F%25C7%25DA%25B5%25E5%25B8%25AF%25BD%25BA.jpg&type=sc960_832',
      minPrice: 43490,
      maxPrice: 60000,
      hashtags: ['시원한 오이향', '시원한 오이향', '시원한 오이향', '시원한 오이향', '시원한 오이향', '깔끔함', '부드러워요'],
    },
  ];

  const [searchResultData, setSearchResultData] = useState<AlcoholTypeProps[]>([...testData]);

  const addAlcoholList = (data: AlcoholTypeProps) => {
    if (confirm(`${data.name}을(를) 등록 하시겠습니까?`)) {
      props.addAlcoholList({
        alcohol_name: data.name,
        alcohol_type: data.category,
        drunked: 0,
        alcohol_intake: 0,
        alcohol_image: data.image,
        alcohol_degree: data.degree,
      });
      props.hideAtSelectModal();
    }
  };

  return (
    <div className={`${styles.popupWrap} ${props.show && styles.on}`}>
      <div className={styles.popup}>
        <button onClick={props.hideAtSelectModal} className={styles.closeBtn}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div className={styles.popupinner}>
          <h2>마신 술 검색</h2>
          {/* serchbar */}
          <div className={styles.searchBarBox}>
            <div className={styles.searchBar}>
              <input
                ref={inputuseRef}
                type="text"
                placeholder="Search"
                className={filteredData.length > 1 ? styles.searchInputActive : styles.searchInput}
                onChange={inputChanged}
                onKeyDown={e => {
                  if (e.key === 'Enter') searchButtonClicked();
                }}
              />
              <button className={styles.searchButton} onClick={searchButtonClicked}>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
            {filteredData.length > 1 ? (
              <ul className={styles.searchListActive}>
                {filteredData?.map((item: SearchData) => (
                  <li
                    key={item.id}
                    onClick={() => {
                      inputuseRef.current!.value = item.text;
                      setInputText(item.text);
                      inputuseRef.current?.focus();
                    }}
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
            ) : (
              <ul className={styles.searchList}> </ul>
            )}
          </div>
          {/* 검색 결과 */}
          <h3 className={atStyles.cardListTitle}>검색결과</h3>
          <p className={atStyles.comment}>
            열심히 검색한 결과 <span>{searchResultData.length}</span>개의 결과를 찾았어요.
          </p>
          <div className={atStyles.cardListMain}>
            {searchResultData.length > 0 ? (
              searchResultData.map((alcoholCard: AlcoholTypeProps) => (
                <AlcoholCard
                  key={alcoholCard.id}
                  onClick={() => {
                    addAlcoholList(alcoholCard);
                  }}
                  {...alcoholCard}
                />
              ))
            ) : (
              <div className={atStyles.nothingToShowView}>
                <FontAwesomeIcon className={atStyles.nothingToShowIcon} icon={faCircleExclamation}></FontAwesomeIcon>
                <p className={atStyles.nothingToShowText}>검색결과가 없습니다. 다른 검색어를 입력해주세요.</p>
                <p className={atStyles.nothingToShowSubText}>
                  새로운 술 종류를 제안하고 싶다면 <a href="mailto:sujk912@gmail.com ?subject=[술종류문의] 새로운 술 종류 문의드립니다.">여기</a>를
                  눌러주세요.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AhAtSelectModal;
