import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchCurrentBeer } from '../../bll/slices/beerSlice';
import { selectCertainBeer } from '../../bll/slices/selector';
import { useAppDispatch } from '../../bll/store';

import s from './Beer.module.scss';

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
    <div className={s.beerItemContainer} key={b.id}>
      <div className={s.beerWrapper}>
        <h3 className={s.beerTitle}>{b.name}</h3>
        <div className={s.beerItem}>
          <div className={s.beerLogo}>
            <img className={s.beerLogoImage} src={b.image_url} alt="bearImg" />
            <h4>{b.tagline}</h4>
          </div>
          <div className={s.beerItemLeft}>
            <div>
              <h5>
                ABV: <span>{b.abv}%</span>
              </h5>
            </div>
            <div>
              <h5>
                IBU: <span>{b.ibu}</span>
              </h5>
            </div>
            <div>
              <h5>
                PH: <span>{b.ph}</span>
              </h5>
            </div>
            <div>
              <h5>
                Attenuation level: <span> {b.attenuation_level}</span>
              </h5>
            </div>
            <div>
              <h5>
                Volume: {b.volume.value} {b.volume.unit}
              </h5>
              <span />
            </div>
          </div>
          <div className={s.beerItemRight}>
            <div>
              <h5>Food pairing: </h5>
              {b.food_pairing.map(item => (
                <span key={Math.random()}>{item} </span>
              ))}
            </div>
            <div>
              <h5>Brewers tips:</h5>
              <span>{b.brewers_tips}</span>
            </div>

            <h5>Description:</h5>
            <span>{b.description}</span>
            <div>
              <h5>Contributed by: </h5>
              <span>{b.contributed_by}</span>
            </div>
          </div>
        </div>
      </div>

      {/*      <h5>
        Ingredients:
        <p>Malt:</p>
        {b.ingredients.malt.map(item => (
          <div key={Math.random()}>
            <h5>{item.name}</h5>
            <h6>
              Amount value: <span>{item.amount.value}</span>
            </h6>
            <h6>Amount unit: {item.amount.unit}</h6>
          </div>
        ))}
        <p>Hops:</p>
        {b.ingredients.hops.map(item => {
          <div key={Math.random()}>
            <h5>{item.name}</h5>;
          </div>;
        })}
      </h5> */}
    </div>
  ));

  return <div>{mappedBear}</div>;
};
