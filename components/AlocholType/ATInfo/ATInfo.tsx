import { AlcoholTypeProps } from '@api/model/alcType';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ATInfo.module.scss';

const AlcoholTypeInfo: React.FC<AlcoholTypeProps> = ({ ...info }: AlcoholTypeProps) => {
    function changeNumberToMoney (num: number) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    /** 공유를 위해 현재 url을 복사하는 함수 */
    function copyLink () {
        let url = window.document.location.href;
        let copyFrom = document.createElement('textarea');
        copyFrom.textContent = url;
        let bodyElm = document.getElementsByTagName('body')[0];
        bodyElm.appendChild(copyFrom);
        copyFrom.select();
        let retVal = document.execCommand('copy');
        bodyElm.removeChild(copyFrom);
        alert('링크가 복사되었습니다.');
    }

    return (
        <section className={styles.container}>
            <img className={styles.alcoholImage} src={info.image} />
            <div className={styles.rightBox} >
            <div className={styles.alcoholInfoBox} >
                    <p className={styles.title}>{info.name}</p>
                    <p className={styles.basic}>{info.category}</p>
                    <p className={styles.basic}>{info.degree}%</p>
                    <p className={styles.basic}>{info.drinkSize}ml
                        (<span>
                            {info.minPrice && changeNumberToMoney(info.minPrice)}₩~ {info.maxPrice && changeNumberToMoney(info.maxPrice)}₩
                        </span>)
                    </p>
                </div>
                <div className={styles.shareLinkBox}>
                    <img className={styles.logo}src={'/assets/logo/kakaoTalkLogo.png'} />
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} onClick={copyLink} />
                </div>
            </div>
        </section>
    )

};

export default AlcoholTypeInfo;