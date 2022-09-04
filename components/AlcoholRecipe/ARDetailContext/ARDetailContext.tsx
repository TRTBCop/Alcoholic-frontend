import { faEyeSlash, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AlcRecipeTags } from 'api/model/alcRecipe';
import { GetServerSideProps } from 'next';
import styles from './ARDetailContext.module.scss'

interface ARDetailInfoProps {
    id: number,
    WriterId: number,
    likes: number,
    views: number,
    title: string,
    image: string,
    content: string,
    createAt: string,
    hashTags: AlcRecipeTags[]
    writerImg: string,
    wirterName: string,
}

const ARDetailContext: React.FC<ARDetailInfoProps>  = ({...detailInfo}: ARDetailInfoProps) => {
    return(
        <div className={styles.container}>
            <p className={styles.titleinfo}>
                <span>
                    <FontAwesomeIcon icon={faHeart} />
                    {detailInfo.likes}
                </span>
                <span>
                    <FontAwesomeIcon icon={faEyeSlash} />
                    {detailInfo.views}
                </span>
                <span>{detailInfo.createAt}</span>
            </p>
            <div className={styles.imgBox}>
                <img className={styles.img}>그림</img>
            </div>
            <div>
                <FontAwesomeIcon icon={faHeart} />
                <h1>{detailInfo.title}</h1>
            </div>
            <div className={styles.hashtagBox}>
                 {detailInfo.hashTags && detailInfo.hashTags.map((item) => (
                    <div key={item.id} className={styles.hashtag}># {item.tagName}</div>
                 ))}
            </div>
            <div className={styles.content}>
                <p>{detailInfo.content}</p>
            </div>
            <div className={styles.boardEditbox}>
                <p>
                    <span>수정</span>
                    <span>|</span>
                    <span>삭제</span>
                </p>
                <hr></hr>
            </div>
            <div className={styles.writerInfo}>
                <img src={detailInfo.writerImg}></img>
                <span>{detailInfo.wirterName}</span>
                <hr></hr>
            </div>
        </div>
    )
};

export default ARDetailContext;