import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchCurrentBeer } from '../../bll/slices/beerSlice';
import { selectCertainBeer } from '../../bll/slices/selector';
import { useAppDispatch } from '../../bll/store';

export const Beer = () => {
  const dispatch = useAppDispatch();
  const beer = useSelector(selectCertainBeer);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchCurrentBeer({ id: +id }));
    }
  }, []);

  const mappedBear = beer.map(b => (
    <div key={b.id}>
      <h3>{b.name}</h3>
      <img src={b.image_url} alt="bearImg" />
      <h4>{}</h4>
      <h5>Alcohol by volume, % {}</h5>
      <span>{}</span>
    </div>
  ));

  return <div>{mappedBear}</div>;
};
