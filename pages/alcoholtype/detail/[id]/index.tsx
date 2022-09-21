
import AlcoholTypeInfo from '@components/AlocholType/ATInfo';
import AlcoholTypeDetailInfo from '@components/AlocholType/ATInfoDetail';
import AlcoholTypesimilarList from '@components/AlocholType/ATSimilarList';
import AlcoholTypeReview from '@components/AlocholType/ATReview';
import layoutStyles from '@layouts/Layout.module.scss';
import { GetServerSideProps, NextPage } from 'next';
import { getAlcType, getAlcTypeDetail, getAlcTypeReviews, getAlcTypes, getAlcTypeSimilar } from '@api/alcType';
import { AlcoholTypeProps, AlcoholTypeReviewsProps, AlcoholDetailInfoProps } from '@api/model/alcType';

interface AlcoholTypeDetailInfoProps {
    data: AlcoholTypeProps;
    detailData: AlcoholDetailInfoProps,
    similarList: AlcoholTypeProps[],
    reviewList: AlcoholTypeReviewsProps & { id:string, infinite?: boolean } ,
}

const AlcoholTypeDetailPage: NextPage<AlcoholTypeDetailInfoProps> = ({ data, detailData, reviewList, similarList }) => {
    return (
        <div className={layoutStyles.md}>
            <AlcoholTypeInfo {...data} />
            <AlcoholTypeDetailInfo {...detailData} />
            <AlcoholTypesimilarList similarList={similarList} />
            <AlcoholTypeReview {...reviewList} />
        </div>
    );
}

  
export const getServerSideProps: GetServerSideProps = async (context) => {
    if (context.query.id) {
        const { data } = await getAlcType(context.query.id as string);
        const { data: details } = await getAlcTypeDetail(context.query.id as string);
        const { data: similarList } = await getAlcTypeSimilar(context.query.id as string);
        const { data: reviewList } = await getAlcTypeReviews(context.query.id as string);
        return {
            props: {
                data: data.data,
                detailData: details.data,
                similarList: similarList.data,
                reviewList: {id:context.query.id as string, ...reviewList.data},
            },
        }
    } else 
        return {
            props: {
                data: null,
                detailData: null,
                similarList: null,
                reviewList: null,
            },
        };
  };
  

export default AlcoholTypeDetailPage;
