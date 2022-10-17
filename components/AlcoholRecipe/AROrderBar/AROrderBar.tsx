import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Router, { useRouter } from 'next/router';
import styles from './AROrderBar.module.scss';

const AROrderBar : React.FC = () =>{
    const router = useRouter();

    const goWritePage = () => {
        router.push({
          pathname: `/alcoholrecipe/write`,
        });
    };
    
    return(
        <div className={styles.orderBox}>
            <p>
                <button className={styles.button}>
                    <span className={styles.ordertext}>최신순</span>
                </button>
                <button className={styles.button}>
                    <span className={styles.ordertext}>추천순</span>
                </button>

                <span className={styles.writetext} onClick={goWritePage}>글쓰기 <FontAwesomeIcon icon={faPen}/></span>
            </p>
            <div>
                <hr className={styles.m}></hr>
            </div>
        </div>
    );
};

export default AROrderBar;