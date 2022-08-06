import { instance } from './settings';

export const api = {
  fetchBeers(currentPage: number, itemsPerPage: number, searchValue: string) {
    const params: {
      page: number;
      per_page: number;
      beer_name?: string;
    } = {
      page: currentPage,
      per_page: itemsPerPage,
    };
    if (searchValue) {
      params.beer_name = searchValue;
    }
    return instance.get<BeersType[]>(`beers`, {
      params,
    });
  },
};

export type BeersType = {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  ph: number;
  attenuation_level: number;
  volume: {
    value: number;
    unit: string;
  };
  ingredients: IngredientsType;
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
};

type IngredientsType = {
  malt: MaltType[];
  hops: HopsType[];
};

type MaltType = {
  name: string;
  amount: { unit: string; value: number };
};

type HopsType = {
  name: string;
  amount: { unit: string; value: number };
  add: string;
  attribute: string;
};
