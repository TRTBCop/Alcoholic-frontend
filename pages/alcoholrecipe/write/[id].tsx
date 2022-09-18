import { AlcRecipeDetail } from "@api/model/alcRecipe"
import styles from '@styles/AlcoholRecipe/AlcoholDetail.module.scss';
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

interface AlcoholRecipeEditorProps{
    AREditorData: AlcRecipeDetail;
}

const AlcoholRecipeEditorPage : NextPage<AlcRecipeDetail> = (props) =>{

    const router = useRouter();
    
    return (
        <div className={styles.container}>
            <div className={styles.thumbnailImgBox}>
                <p>대표 사진</p>
                <img></img>
                <button>이미지</button>
            </div>
            <div className={styles.titleBox}>
                <p>칵테일 이름 *</p>
                <input></input>
            </div>
            <div className={styles.tagImportBox}>
                <p>특징 태그 *</p>
                <input></input>
            </div>
            <div className={styles.smartEditor}></div>
        </div>
    )
}

export default AlcoholRecipeEditorPage;


export const getServerSideProps: GetServerSideProps = async() => {
    return {
        props: {
            
        },
      };
    };
    