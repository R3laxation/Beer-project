import React from 'react';

import s from './Sidebar.module.scss';

export const Sidebar = ({ inputValue: value, onChangeValue }: SidebarPropsType) => (
  <div className={s.sidebar}>
    <input
      className={s.searchInput}
      type="text"
      onChange={e => onChangeValue(e.currentTarget.value)}
      value={value}
    />

    <label className={s.searchInputLabel}>Search...</label>
  </div>
);

type SidebarPropsType = {
  inputValue: string;
  onChangeValue: (value: string) => void;
};
