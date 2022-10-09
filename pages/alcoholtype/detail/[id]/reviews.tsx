
import AlcoholTypeInfo from '@components/AlocholType/ATInfo';
import AlcoholTypeDetailInfo from '@components/AlocholType/ATInfoDetail';
import AlcoholTypesimilarList from '@components/AlocholType/ATSimilarList';
import AlcoholTypeReview from '@components/AlocholType/ATReview';
import layoutStyles from '@layouts/Layout.module.scss';
import { GetServerSideProps, NextPage } from 'next';
import { getAlcType, getAlcTypeAllReviews, getAlcTypeDetail, getAlcTypeReviews, getAlcTypes, getAlcTypeSimilar } from '@api/alcType';
import { AlcoholTypeProps, AlcoholTypeReviewsProps, AlcoholDetailInfoProps } from '@api/model/alcType';
import { useState } from 'react';
import AddReview from '@components/AlocholType/AddReview';

interface AlcoholTypeDetailInfoProps {
    reviewList: AlcoholTypeReviewsProps,
}

const AlcoholTypeDetailPage: NextPage<AlcoholTypeDetailInfoProps & { id: string, infinite?: boolean}> = ({ id, infinite = true, reviewList }) => {
    const layoutStyle = [layoutStyles.md];
    const [openWriteReview, setOpenWriteReview] = useState(false);

    function openAddReview() {
        setOpenWriteReview(true);
        layoutStyle.push(layoutStyles.noScroll);
    }
    function closeAddReview() {
        setOpenWriteReview(false);
        layoutStyle.splice(1,1,layoutStyles.noScroll);

    }

    return (
        <div className={ layoutStyle.join(" ") }>
            <AlcoholTypeReview id={id} infinite={infinite} moveToWrite={openAddReview}{...reviewList} />
            {(openWriteReview) ? <AddReview id={id+""} handleReviewCancel={closeAddReview} /> : ""}
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
