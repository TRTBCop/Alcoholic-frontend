import { AlcRecipeDetail } from "@api/model/alcRecipe"
import styles from '@styles/AlcoholRecipe/AlcoholDetail.module.scss';
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import layoutStyles from '@layouts/Layout.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import ARWriteNavBar from "@components/AlcoholRecipe/ARWriteNavBar";
import ARWriteContents from "@components/AlcoholRecipe/ARWriteContents";
import { getAlcRecipeEdit } from "@api/alcRecipe";


interface AlcoholRecipeEditorProps{
    arEditorData: AlcRecipeDetail | null;
}

const AlcoholRecipeEditorPage : NextPage<AlcoholRecipeEditorProps> = ({arEditorData}) =>{

    const router = useRouter();

    
    
    return (
        <>
        <div className={layoutStyles.arSmall}>
          <ARWriteContents/>
          <ARWriteNavBar/>
        </div>
      </>
    )
}

export default AlcoholRecipeEditorPage;


export const getServerSideProps: GetServerSideProps = async (context)=> {
  const { data } = await getAlcRecipeEdit(context.query.id as string);
  return {
    props: {
      arEditorData: data.data,
    },
  };
};