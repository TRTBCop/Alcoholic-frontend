import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AlcRecipeDetailReviews, UserInfo } from 'api/model/alcRecipe';
import Router, { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from './ARDetailContents.module.scss'

interface ARDetailInfoProps {
    id: number,
    writer: UserInfo,
    likes: number,
    views: number,
    title: string,
    image: string,
    content: string,
    createAt: string,
    hashTags?: string[],
    reviews?:AlcRecipeDetailReviews[]
}



const ARDetailContext: React.FC<ARDetailInfoProps>  = ({...detailInfo}: ARDetailInfoProps) => {
    const router = useRouter();

    useEffect(() => {
        console.log('user 값이 설정됨');
        return () => {
          console.log('user 가 바뀌기 전..');
        };
      }, [detailInfo]);
    
      
    const goEditPage = (id: number) => {
        router.push({
          pathname: `/alcoholhistory/write/${id}`
        });
    };

    return(
        <div className={styles.container}>
            <div className={styles.imgBox}>
                <p className={styles.postInfoView}>
                    <FontAwesomeIcon icon={faHeart} />
                    <span>{detailInfo.likes}</span>
                    <FontAwesomeIcon icon={faEye} />
                    <span>{detailInfo.views}</span>
                    <span>{detailInfo.createAt}</span>
                </p>
                <img src={detailInfo.image}/>
            </div>
            <div className={styles.titleBox}>
                <FontAwesomeIcon icon={faHeart} />
                <h1>{detailInfo.title}</h1>
            </div>
            <div className={styles.hashtagBox}>
                 {detailInfo.hashTags && detailInfo.hashTags.map((item) => (
                    <div key={item} className={styles.hashtag}># {item}</div>
                 ))}
            </div>
            <div className={styles.content}>
                <p>{detailInfo.content}</p>
            </div>
            <div className={styles.postEditBox}>
                <div className={styles.postEditBtn}>
                    <span onClick={()=>goEditPage(detailInfo.id)}>수정</span>
                    <span>|</span>
                    <span>삭제</span>
                </div>
                <hr></hr>
            </div>
            <div className={styles.writerInfoBox}>
                <img src={detailInfo.writer?.userProfileImg}/>
                <span>{detailInfo.writer?.userName}</span>
                <span>관리자</span>
                <hr></hr>
            </div>
        </div>
    )
};

export default ARDetailContext;