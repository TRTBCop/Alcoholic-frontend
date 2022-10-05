
export interface AlcRecipe {
    id: number;
    likes: number;
    views: number;
    recipeName : string;
    createAt: string;
    recipeImg: string;
    hashTags?: string[];
}


export interface AlcRecipeDetail {
    id: number;
    writer: UserInfo;
    likes: number;
    views: number;
    title: string;
    image: string;
    content: string;
    createAt: string;
    hashTags?: string[]
    reviews?:AlcRecipeDetailReviews[];
}

export interface AlcRecipeDetailReviews{
    id: number;
    user: string;
    reviewContents: string;
    createAt: string;
}

export interface UserInfo{
    id: number;
    email?: string;
    userName: string;
    userProfileImg: string;
    nickName?: string;
}