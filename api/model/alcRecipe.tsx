export interface AlcRecipe {
    id: number;
    recipeName : string;
    createAt: string;
    recipeImg: string;
    hashTags?: AlcRecipeTags[];
}

export interface AlcRecipeTags{
    id: number;
    tagName: string;
}