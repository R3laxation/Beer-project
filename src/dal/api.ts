import { instance } from './settings';

export const api = {
  fetchBeers(currentPage: number, itemsPerPage: number) {
    return instance.get<BeersType[]>(
      `beers?page=${currentPage}&per_page=${itemsPerPage}`,
    );
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
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: {
    value: number;
    unit: string;
  };
  boil_volume: {
    value: 25;
    unit: string;
  };
};
