export type AlcoholTypeProps = {
    id: number;
    name: string;
    category: string;
    degree: number;
    drinkSize: number;
    image: string;
    minPrice: number;
    maxPrice: number;
    hashtags: string[];
}

export type AlcoholDetailInfoProps = {
    origin: string;
    manufacturer: string;
    color: string;
    taste: string;
    recipes: { id: string, name: string }[];
}

export interface AlcoholTypeReviewsProps{
    likesCount: number;
    hatesCount: number;
    hashtags: string[];
    reviews: AlcoholTypeReview[];
};

export interface AlcoholTypeReview {
    id: number;
    username: string;
    content: string;
    createdAt: string;
    liked: boolean;
}
