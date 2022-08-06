import React from 'react';

import { Link } from 'react-router-dom';

import { BeersType } from '../../../dal/api';

import s from './BeersBlock.module.scss';

export const BeersBlock = ({
  name,
  tagline,
  id,
  abv,
  image_url: imageUrl,
}: BeersType) => (
  <Link to={`/beer/${id}`} className={s.beerBlock}>
    <img src={imageUrl} alt="beer" />
    <h3>{name}</h3>
    <h4>{tagline}</h4>
    <h5>ABV: {abv}%</h5>
  </Link>
);
