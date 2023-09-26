export enum Categories {
    "TO_GO" = "TO_GO",
    "VISTED" = "VISTED",
    "LIKED" = "LIKED",
}
export interface ICountry {
    id: number;
    country: string;
    category: Categories;
}

export interface IFormData {
    country: string;
}
