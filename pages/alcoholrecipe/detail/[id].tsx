import { getAlcRecipeDetail } from "@api/alcRecipe";
import ARDetailContents from "@components/AlcoholRecipe/ARDetailContents";
import ARReview from "@components/AlcoholRecipe/ARReview";
import ARReviewInput from "@components/AlcoholRecipe/ARReviewInput";
import styles from '@styles/AlcoholRecipe/AlcoholDetail.module.scss';
import { AlcRecipeDetail, AlcRecipeDetailReviews } from "api/model/alcRecipe";
import { GetServerSideProps, NextPage } from "next";

interface AlcoholRecipeDetailPageProps {
    Data: AlcRecipeDetail;
}


const AlcoholRecipeDetailPage: NextPage<AlcoholRecipeDetailPageProps> = (props) => {
    const { Data } = props;
  
    return(
      <div className={styles.container}>
        <h1>디테일 페이지</h1>
        <ARDetailContents
          {...Data}>
        </ARDetailContents>
        <ARReviewInput></ARReviewInput>
        <div className={styles.reviewBox}>
          {Data.reviews?.map((reviewData : AlcRecipeDetailReviews, i) =>(
          <ARReview key={i}{...reviewData}></ARReview>
          ))}
        </div>
      </div>
    )
}

export default AlcoholRecipeDetailPage;

export const getServerSideProps: GetServerSideProps = async context => {
    const { data } = await getAlcRecipeDetail(parseInt(context.query.id as string));
    return {
      props: {
        Data: data.data,
      },
    };
  };