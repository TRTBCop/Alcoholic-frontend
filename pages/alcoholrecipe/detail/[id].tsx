import ARDetailContents from "@components/AlcoholRecipe/ARDetailContents";
import ARReview from "@components/AlcoholRecipe/ARReview";
import ARReviewInput from "@components/AlcoholRecipe/ARReviewInput";
import styles from '@styles/AlcoholRecipe/AlcoholRecipe.module.scss';
import layoutStyles from '@layouts/Layout.module.scss';
import { getAlcRecipeDetail } from "@api/alcRecipe";
import { AlcRecipeDetail, AlcRecipeDetailReviews } from "api/model/alcRecipe";
import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";

interface AlcoholRecipeDetailPageProps {
    arDetailData: AlcRecipeDetail;
}


const AlcoholRecipeDetailPage: NextPage<AlcoholRecipeDetailPageProps> = ({arDetailData}) => {

    return(
      <div className={layoutStyles.arSmall}>
        {/*<ARDetailContents {...arDetailData}/>*/}        
        <ARReviewInput  reviewCount={arDetailData.reviews?.length}/>

        <div className={styles.reviewBox}>
          {arDetailData.reviews?.map((reviewData : AlcRecipeDetailReviews) =>(
            <ARReview key={reviewData.id}{...reviewData}></ARReview>
          ))}
        </div>
      </div>
    )
}

export default AlcoholRecipeDetailPage;

export const getServerSideProps: GetServerSideProps = async (context)=> {
    const { data } = await getAlcRecipeDetail(context.query.id as string);
    return {
      props: {
        arDetailData: data.data,
      }
    };
  };