import React from 'react';

import { Link } from 'react-router-dom';

import { BeersType } from '../../../dal/api';

export const BeersBlock = ({
  name,
  tagline,
  id,
  abv,
  image_url: imageUrl,
}: BeersType) => (
  <div>
    <Link to={`/beer/${id}`}>
      <img src={imageUrl} alt="beer" />
    </Link>
    <h3>{name}</h3>
    <h4>{tagline}</h4>
    <h5>Alcohol by volume, % {abv}</h5>
  </div>
);
