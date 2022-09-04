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

interface AlcoholHistoryPageProps {
  Data: AlcRecipe[];
}

const AlcoholRecipePage: NextPage<AlcoholHistoryPageProps> = (props) => {
    const router = useRouter();
    const { Data } = props;
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
            {Data.map((recipeData: any, i) => (
              <ARCard 
                key={i}
                onClick={() =>
                  router.push({
                    pathname: `/alcolrecipe/detail`,
                    query: { id: i }
                  })}
                {...recipeData}  />
            ))}  
          </div>
        </div>
      </>
    )
}
export const getServerSideProps: GetServerSideProps = async context => {
  const { data } = await getAlcRecipe();
  return {
      props: {
        Data: data.data,
      },
    };
  };
  

export default AlcoholRecipePage;