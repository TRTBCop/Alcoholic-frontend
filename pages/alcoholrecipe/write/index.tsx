import {  AlcRecipeDetail } from "api/model/alcRecipe";
import { GetServerSideProps, NextPage } from "next/types";
import layoutStyles from '@layouts/Layout.module.scss';
import ARWriteNavBar from '@components/AlcoholRecipe/ARWriteNavBar';
import ARWriteContents from '@components/AlcoholRecipe/ARWriteContents';



interface AlcoholRecipeWritePageProps {
    writeData: AlcRecipeDetail ;
  }
  

const AlcoholRecipeWritePage: NextPage<AlcoholRecipeWritePageProps> = () => {


    return (
      <>
        <div className={layoutStyles.arSmall}>
          <ARWriteContents />
          <ARWriteNavBar/>
        </div>
      </>
    )
}

export default AlcoholRecipeWritePage;

