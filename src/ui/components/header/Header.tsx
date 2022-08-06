import React from 'react';

import { NavLink } from 'react-router-dom';

import logo from '../../../assets/logo.png';

import s from './Header.module.scss';

export const Header = () => (
  <div className={s.container}>
    <div className={s.header}>
      <NavLink to="/" className={s.headerLink}>
        <div>
          <img className={s.logo} src={logo} alt="logo" />
        </div>
        <h1>Punk API Beer App</h1>
      </NavLink>
    </div>
  </div>
);
