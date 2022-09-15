import styles from '@styles/AlcoholRecipe/AlcoholRecipe.module.scss';
import AlcoholRecipeLayout from '@layouts/Layout';
import ARCard from "@components/AlcoholRecipe/ARCard";
import Link from 'next/link';

import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { AlcRecipe } from "api/model/alcRecipe";
import { getAlcRecipe } from 'api/alcRecipe';
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
        <h1>ARCardMain</h1>

        <div className={styles.container}>
          <div className={styles.recipeHeader}>
            <ARSearchBar/>
            <AROrderBar/>
            <p className={styles.recipeCount}>전체(<span>4</span>)</p>
          </div>
          <div className={styles.recipeCardBox}>
            {ARListData.map((recipeData: any, i) => (
              <ARCard 
                key={recipeData.id}
                onClick={() =>
                  router.push({ 
                    pathname:`/alcoholrecipe/detail/${recipeData.id}`
                  })
                }
                {...recipeData}  />
            ))}  
          </div>
        </div>
      </>
    )
}
export const getServerSideProps: GetServerSideProps = async() => {
  const { data } = await getAlcRecipe();
  return {
      props: {
        Data: data.data,
      },
    };
  };
  

export default AlcoholRecipePage;