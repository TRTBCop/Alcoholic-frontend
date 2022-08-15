
import Main from '@layouts/index';
import AlcoholTypeInfo from '@components/AlocholType/AlcoholTypeInfo';
import AlcoholTypeDetailInfo from '@components/AlocholType/AlcoholTypeDetailInfo';
import AlcoholTypesimilarList from '@components/AlocholType/AlcoholTypesimilarList';
import AlcoholTypeReview from '@components/AlocholType/AlcoholTypeReview';

const mock_AlcoholTypeInfo = {
    id: 2,
    name: 'Hendrick\'s Gin',
    category: '진',
    degree: 44,
    drinkSize: 700,
    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160217_243%2Fflairbarista_1455689324870U6chD_JPEG%2F%25C7%25DA%25B5%25E5%25B8%25AF%25BD%25BA.jpg&type=sc960_832',
    minPrice: 43490,
    maxPrice: 60000,
};
const mock_AlcoholTypeDetailInfo = {
    origin: '영국',
    manufacturer: '윌리엄 그랜트 & 선즈',
    color: '투명',
    flavor: '장미의 향으로 시작해 오이향으로 끝나는 향기가 주된 특징으로 깔끔하다. 그러나 향으로 인해 호불호가 갈리는 편이다.',
    recipes: [
        { id: 1, name: '핸드릭스 진 토닉' },
        { id: 2, name: '마티니' }
    ]
}
const mock_AlcoholTypeSimilarList = [
    {
        id: 1,
        name: 'Hendrick\'s Gin',
        category: '진',
        degree: 44,
        drinkSize: 500,
        image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160217_243%2Fflairbarista_1455689324870U6chD_JPEG%2F%25C7%25DA%25B5%25E5%25B8%25AF%25BD%25BA.jpg&type=sc960_832',
    },
    {
        id: 2,
        name: '봄베이 사파이어',
        category: '진',
        degree: 47,
        drinkSize: 700,
        image: 'https://file.mk.co.kr/mkde/N0/2018/09/20180928_3474623_1538118245.jpg',
    },
    {
        id: 2,
        name: '봄베이 사파이어',
        category: '진',
        degree: 47,
        drinkSize: 1000,
        image: 'https://file.mk.co.kr/mkde/N0/2018/09/20180928_3474623_1538118245.jpg',
    },

];
const mock_AlcoholTypeReview = {
    likesCount: 120,
    hatesCount: 8,
    hashtags: [
        '시원한 오이향',
        '깔끔함',
        '부드러워요',
        '핸드릭스 진토닉',
        '혼술',
    ],
    reviews: [
        {
            id: 1,
            username: '애주가라면호로록',
            content: '핸드릭스 진 특유의 시원한고 깔끔한 맛이 너무 좋아요. 오이향도 너무 좋아서 종종 오이를 편으로 썰어 함께 먹는 편입니다.',
            createdAt: '2022-07-21',
            liked: true,
        },
        {
            id: 2,
            username: '마시쓰',
            content: '핸드릭스 진 특유의 시원한고 깔끔한 맛이 너무 좋아요. 오이향도 너무 좋아서 종종 오이를 편으로 썰어 함께 먹는 편입니다.',
            createdAt: '2022-07-11',
            liked: true,
        },
        {
            id: 3,
            username: '술을 잘몰라요',
            content: '나는 나쁜 사람',
            createdAt: '2022-07-16',
            liked: false,
        },
        {
            id: 4,
            username: '홀릭커1029',
            content: '오늘 처음 가입해봤는데 익숙한 술이 있길래 리뷰 남겨요. 저는 어렸을 적부터 술을 먹었던 건 아닙니다. 언제 먹기 시작했는지는 더보기로 가릴 예정입니다.궁금하시다고요? 어쩔 수 없어요.',
            createdAt: '2022-03-10',
            liked: false,
        },
    
    ],
};

interface AlcoholTypeInfoProps {
    name: string;
    category: string;
    degree: number;
    drinkSize: number;
    image: string;
    minPrice?: number;
    maxPrice?: number;
    hashtags?: string[];
};
interface AlcoholTypeDetailInfoProps {
    origin: string,
    manufacturer: string,
    color: string,
    flavor: string,
    recipes: { id: number, name: string }[],
};

interface AlcoholTypeReviewProps{
    likesCount: number;
    hatesCount: number;
    hashtags: string[];
    reviews: {id:number, username:string, content: string, createdAt: string, liked: boolean}[];

};


// const AlcoholTypeDetailPage = ({ ...info }: AlcoholTypeInfoProps) => {
const AlcoholTypeDetailPage = () => {
    
    return (
        <>
            <AlcoholTypeInfo {...mock_AlcoholTypeInfo} />
            <AlcoholTypeDetailInfo {...mock_AlcoholTypeDetailInfo} />
            <AlcoholTypesimilarList list = {mock_AlcoholTypeSimilarList} />
            <AlcoholTypeReview {...mock_AlcoholTypeReview} />
        </>
    )
}

export default AlcoholTypeDetailPage;
