export type AlcoholTypeEntity = {
    id?: number;
    name: string;
    category: string;
    degree: number;
    drinkSize: number;
    image: string;
    minPrice?: number;
    maxPrice?: number;
    hashtags?: string[];
    description?: AlcoholDetailInfoEntity;
}

export type AlcoholDetailInfoEntity = {
    origin: string;
    manufacturer: string;
    color: string;
    taste: string;
    Relevant: AlcoholTypeEntity[];
}