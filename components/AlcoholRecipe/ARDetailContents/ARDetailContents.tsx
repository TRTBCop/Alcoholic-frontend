import { deleteAlcRecipe } from '@api/alcRecipe';
import { faEye, faHeart, faHeartCircleCheck} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AlcRecipeDetailReviews, UserInfo } from 'api/model/alcRecipe';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import profile from '../../../public/assets/img/ProfileDafult.png'
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
          pathname: `/alcoholrecipe/write/${id}`
        });
    };

    const deleteRecipe = async () => {
        try{
            if (confirm('복구 할수 없습니다 삭제 하시겠습니까?')) {
                const { data } = await deleteAlcRecipe (detailInfo.id);
                if (data.code === 200) {
                  alert('삭제 완료');
                  router.push('/alcoholhistory');
                } else {
                  alert(`삭제가 정상적으로 진행되지 않았어요 에러코드: ${data.code}`);
                }
              }
        }catch(err){
            console.log(err);
        }
    }

    return(
        <div className={styles.container}>
            <p className={styles.postInfoView}>
                    <span><FontAwesomeIcon icon={faHeart} /></span>
                    <span>{detailInfo.likes}</span>
                    <span><FontAwesomeIcon icon={faEye} /></span>
                    <span>{detailInfo.views}</span>
                    <span>{detailInfo.createAt}</span>
            </p>
            <img className={styles.titleImg} src={detailInfo.image}/>
            <div className={styles.titleBox}>
                <button>
                    <span><FontAwesomeIcon icon={faHeartCircleCheck} /></span>
                </button>
                <button>
                    <span><FontAwesomeIcon icon={faHeart} /></span>
                </button>
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
                    <span onClick ={deleteRecipe}>삭제</span>
                </div>
                <hr></hr>
            </div>
            <div className={styles.writerInfoBox}>
                {
                    detailInfo.writer?.userProfileImg ==null ?
                    <img src={detailInfo.writer?.userProfileImg}/>                    
                    :<img src={profile.src}/>                    
                }
                    <span>{detailInfo.writer?.userName}</span>
                    <span>관리자</span>
            </div>
            <div>
            <hr/>
            </div>
        </div>
    )
};

export default ARDetailContext;