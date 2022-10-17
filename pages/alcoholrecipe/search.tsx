import styles from '@styles/AlcoholRecipe/AlcoholRecipe.module.scss';
import ARCard from "@components/AlcoholRecipe/ARCard";
import layoutStyles from '@layouts/Layout.module.scss';


import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { AlcRecipe } from "api/model/alcRecipe";
import { getAlcRecipeSearch } from 'api/alcRecipe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftRotate, faInfo } from '@fortawesome/free-solid-svg-icons';
import ARSearchBar from '@components/AlcoholRecipe/ARSearchBar/ARSearchBar';
import AROrderBar from '@components/AlcoholRecipe/AROrderBar';

interface AlcoholRecipePageProps {
  ARListData: AlcRecipe[];
}

const AlcoholRecipePage: NextPage<AlcoholRecipePageProps> = (props) => {
    const router = useRouter();

    console.log();
    const goBackPage = () => {
      router.push({
        pathname: `/alcoholrecipe/`,
      });
    };

    const { ARListData } = props;
    
    return(
      <>
        <div className={layoutStyles.arMd}>
          <div className ={styles.container}>
            <ARSearchBar/>
            <div className={styles.orderbarbox}>
              <AROrderBar/>
            </div>
            <p className={styles.recipeCount}>전체 <span>{ARListData.length}</span></p>
            <div className={styles.recipeCardBox}>
              {ARListData?.length < 0 ? ARListData.map((recipeData:AlcRecipe) => (
                <ARCard 
                  key={recipeData.id}
                  onClick={() =>
                    router.push({ 
                      pathname:`/alcoholrecipe/detail/${recipeData.id}`
                    })
                  }
                  {...recipeData}
                /> 
              )) : ""} 
            </div>
            {ARListData.length > 0 ?
              <div className={styles.nothingBox}>
                <p><span className={styles.nothingToShowIcon}><FontAwesomeIcon icon={faInfo}/></span> </p>
                <p className={styles.nothingToShowText}>
                  <span>‘{new URLSearchParams(location.search).get("word")}’</span>
                  <span>에 관한 검색결과 없습니다.</span>
                </p>
                <p className={styles.nothingToShowSubText}><span>모든 단어의 맞춤법이 정확한지 확인하거나 다른 검색어로 검색해보세요.</span></p>
                <button className={styles.backButton} onClick={goBackPage} ><span><FontAwesomeIcon icon={faArrowLeftRotate}/></span> 돌아가기</button>
              </div>
            : ""}
          </div>
        </div>
      </>
    )
}

export const getServerSideProps: GetServerSideProps = async(context) => {
  const { data } = await getAlcRecipeSearch(1, context.query.word as string);
  return {
      props: {
        ARListData: data.data,
      },
    };
  };
  

export default AlcoholRecipePage;