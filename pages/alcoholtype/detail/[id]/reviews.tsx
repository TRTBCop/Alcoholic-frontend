
import AlcoholTypeInfo from '@components/AlocholType/ATInfo';
import AlcoholTypeDetailInfo from '@components/AlocholType/ATInfoDetail';
import AlcoholTypesimilarList from '@components/AlocholType/ATSimilarList';
import AlcoholTypeReview from '@components/AlocholType/ATReview';
import layoutStyles from '@layouts/layout.module.scss';
import { GetServerSideProps, NextPage } from 'next';
import { getAlcType, getAlcTypeAllReviews, getAlcTypeDetail, getAlcTypeReviews, getAlcTypes, getAlcTypeSimilar } from '@api/alcType';
import { AlcoholTypeProps, AlcoholTypeReviewsProps, AlcoholDetailInfoProps } from '@api/model/alcType';

interface AlcoholTypeDetailInfoProps {
    reviewList: AlcoholTypeReviewsProps,
}

const AlcoholTypeDetailPage: NextPage<AlcoholTypeDetailInfoProps & { id:string, infinite?: boolean }> = ({ id, infinite=true, reviewList }) => {
    return (
        <div className={layoutStyles.md}>
            <AlcoholTypeReview id={id} infinite={infinite} {...reviewList} />
        </div>
    );
}

  
export const getServerSideProps: GetServerSideProps = async (context) => {
    if (context.query.id) {
        const { data: reviewList } = await getAlcTypeAllReviews(1, context.query.id as string);
        return {
            props: {
                reviewList: reviewList.data,
            },
        }
    } else 
        return {
            props: {
                reviewList: null,
            },
        };
  };
  

export default AlcoholTypeDetailPage;
