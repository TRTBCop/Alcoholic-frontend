import styles from '@styles/AlcoholRecipe/Al.module.scss';
import { AlcRecipe } from "api/model/alcRecipe";
import { NextPage } from "next/types";


interface AlcoholRecipeWritePageProps {
    Data: AlcRecipe[];
  }
  




const AlcoholRecipeWritePage: NextPage<AlcoholRecipeWritePageProps> = (props) => {


    return (
        <div className={styles.container}>
            <div className={styles.thumbnailImgBox}>
                <p>대표 사진</p>
                <img></img>
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

export default AlcoholRecipeWritePage;
