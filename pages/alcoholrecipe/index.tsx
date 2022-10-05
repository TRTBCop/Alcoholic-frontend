import styles from '@styles/AlcoholRecipe/AlcoholRecipe.module.scss';
import ARCard from "@components/AlcoholRecipe/ARCard";
import layoutStyles from '@layouts/Layout.module.scss';


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
        <div className={layoutStyles.arMd}>
          <ARSearchBar/>
          <div className={styles.orderbarbox}>
            <AROrderBar/>
            <p className={styles.recipeCount}>전체 <span>{ARListData.length}</span></p>
          </div>
          <div className={styles.recipeCardBox}>
              { ARListData.map((recipeData:AlcRecipe) => (
                <ARCard 
                  key={recipeData.id}
                  onClick={() =>
                    router.push({ 
                      pathname:`/alcoholrecipe/detail/${recipeData.id}`
                    })
                  }
                  {...recipeData}/>
              ))}  
          </div>
        </div>
      </>
    )
}

export const getServerSideProps: GetServerSideProps = async() => {
  const { data } = await getAlcRecipe(1);
  return {
      props: {
        ARListData: data.data,
      },
    };
  };
  

export default AlcoholRecipePage;