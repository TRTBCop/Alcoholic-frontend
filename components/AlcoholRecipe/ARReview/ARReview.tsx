import { UserInfo } from 'api/model/alcRecipeDetail';
import { prototype } from 'events';
import styles from './ARReview.module.scss'

interface ARReviewPropsInfo {
    id: number;
    user: UserInfo;
    reviewContents:string;
    createAt:string;
}

const ARReview : React.FC<ARReviewPropsInfo> = ({...props})=>{
    return(
        <div className={styles.ReviewBox}>
            <div className={styles.ReviewHeaderBox}>
                <span className={styles.ReviewUserName}>{props.user?.userName}</span>
                <button className={styles.ReivewButton}></button>
            </div>
            <div className={styles.ReviewContentsbox}>
                <div className={styles.ReviewContents}>{props.reviewContents}</div>
            </div>
            <div className={styles.ReviewCreateAt}>{props.createAt}</div>
            <div>
                <hr></hr>
            </div>
        </div>
    )
};

export default ARReview;