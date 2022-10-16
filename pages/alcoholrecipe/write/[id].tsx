import { AlcRecipeDetail } from "@api/model/alcRecipe"
import styles from '@styles/AlcoholRecipe/AlcoholDetail.module.scss';
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import layoutStyles from '@layouts/Layout.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";


interface AlcoholRecipeEditorProps{
    AREditorData: AlcRecipeDetail;
}

const AlcoholRecipeEditorPage : NextPage<AlcRecipeDetail> = (props) =>{

    const router = useRouter();
    
    return (
        <div className={layoutStyles.arMd}>
            <div className={styles.thumbnailImgBox}>
                <p>대표 사진</p>
                <div>
                    <button className={styles.thumbnailImg}>
                        <p>파일 올리기</p>
                        <p><FontAwesomeIcon icon={faPlusCircle}/></p>
                        <input className={styles.fileUpload} type="file" multiple={true}></input>
                        <p></p>
                    </button>
                </div>
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
    