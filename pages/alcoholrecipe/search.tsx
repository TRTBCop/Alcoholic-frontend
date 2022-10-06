import styles from '@styles/AlcoholRecipe/AlcoholRecipe.module.scss';
import ARCard from "@components/AlcoholRecipe/ARCard";
import layoutStyles from '@layouts/Layout.module.scss';


import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { AlcRecipe } from "api/model/alcRecipe";
import { getAlcRecipeSearch } from 'api/alcRecipe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import ARSearchBar from '@components/AlcoholRecipe/ARSearchBar/ARSearchBar';
import AROrderBar from '@components/AlcoholRecipe/AROrderBar';

interface AlcoholRecipePageProps {
  ARListData: AlcRecipe[];
}

const AlcoholRecipePage: NextPage<AlcoholRecipePageProps> = (props) => {
    const router = useRouter();
    const { ARListData } = props;
    
    return(
      <>
        <div className={layoutStyles.arMd}>
          <div className ={styles.container}>
            <ARSearchBar/>
            <div className={styles.orderbarbox}>
              <AROrderBar/>
              <p className={styles.recipeCount}>전체 <span>{ARListData.length}</span></p>
            </div>
            <p>검색 결과</p>
            <div className={styles.recipeCardBox}>
                {ARListData?.length < 0 ? ARListData.map((recipeData:AlcRecipe) => (
                  <ARCard 
                    key={recipeData.id}
                    onClick={() =>
                      router.push({ 
                        pathname:`/alcoholrecipe/detail/${recipeData.id}`
                      })
                    }
                    {...recipeData}/>
                )) : <div>
                      <FontAwesomeIcon className={styles.nothingToShowIcon} icon={faCircleInfo}></FontAwesomeIcon>
                      <p className={styles.nothingToShowText}>
                        검색결과가 없습니다. 다른 검색어를 입력해주세요.
                      </p>
                    </div>
                } 
            </div>
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