import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

export enum Categories {
  "TO_GO" = "TO_GO",
  "VISITED" = "VISITED",
  "LIKED" = "LIKED",
}
export interface ICountry {
  id: number;
  country: string;
  category: Categories;
}

const { persistAtom: countryPersist } = recoilPersist({
  key: "countryLocal",
  storage: localStorage,
});

export const countryState = atom<ICountry[]>({
  key: "country",
  default: [],
  effects_UNSTABLE: [countryPersist],
});

export const toGoSelector = selector({
  key: "toGoSelector",
  get: ({ get }) => {
    const countries = get(countryState);
    return countries.filter(
      (country) => country.category === "TO_GO"
    );
  },
});

export const visitedSelector = selector({
  key: "visitedSelector",
  get: ({ get }) => {
    const countries = get(countryState);
    return countries.filter(
      (country) => country.category === "VISITED"
    );
  },
});

export const likedSelector = selector({
  key: "likedSelector",
  get: ({ get }) => {
    const countries = get(countryState);
    return countries.filter(
      (country) => country.category === "LIKED"
    );
  },
});