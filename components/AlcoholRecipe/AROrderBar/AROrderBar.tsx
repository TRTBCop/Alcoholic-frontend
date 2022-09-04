import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AROrderBar.module.scss';

const AROrderBar =() =>{
    return(
        <div className={styles.orderBox}>
            <p>
                <span className={styles.ordertext}>최신순</span>
                <span>|</span>
                <span className={styles.ordertext}>추천순</span>
                <span className={styles.writetext}>글쓰기 <FontAwesomeIcon icon={faPen} /></span>
            </p>
            <div>
                <hr className={styles.m}></hr>
            </div>
        </div>
    );
};

export default AROrderBar;