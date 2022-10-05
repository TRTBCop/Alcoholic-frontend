import styles from '@styles/AlcoholRecipe/AlcoholRecipe.module.scss';
import { AlcRecipe } from "api/model/alcRecipe";
import { NextPage } from "next/types";
import layoutStyles from '@layouts/Layout.module.scss';
import ARWriteNavBar from '@components/AlcoholRecipe/ARWriteNavBar';
import ARWriteContents from '@components/AlcoholRecipe/ARWriteContents';



interface AlcoholRecipeWritePageProps {
    Data: AlcRecipe[];
  }
  

const AlcoholRecipeWritePage: NextPage<AlcoholRecipeWritePageProps> = () => {


    return (
      <>
        <div className={layoutStyles.arSmall}>
          <ARWriteContents/>
          <ARWriteNavBar/>
        </div>
      </>
    )
}

export default AlcoholRecipeWritePage;