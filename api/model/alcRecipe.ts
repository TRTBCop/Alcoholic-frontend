export interface AlcRecipe {
    id: number;
    recipeName : string;
    createAt: string;
    recipeImg: string;
    hashTags?: TagsName[];
}

export interface AlcRecipeTag{
    recipeId: number;
    tagNameId?: number;
}

export interface TagsName{
    id: number;
    tagName : string;
}

export interface AlcRecipeDetail {
    id: number;
    writer: UserInfo,
    likes: number,
    views: number,
    title: string,
    image: string,
    content: string,
    createAt: string,
    hashTags?: TagsName[]
    reviews?:AlcRecipeDetailReviews[]
}

export interface AlcRecipeDetailReviews{
    id: number;
    user:UserInfo;
    reviewContents: string;
    createAt: string;
}

export interface UserInfo{
    id: number;
    email?:string;
    userName: string;
    userProfileImg: string;
    nickName?: string;
}