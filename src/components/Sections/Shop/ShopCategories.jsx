import React from 'react';
import css from './ShopCategories.module.css';
import useHttp from '../../../hooks/useHttp';
import { useEffect, useRef, useState } from 'react';
import reactDom from 'react-dom';

function stringToUrl(string) {
  let result = string.replace(' ', '-');
  result = result.replace("'", '_');
  return result;
}

// stringToUrl("some's stuff");

const ShopCategories = React.forwardRef(({ asideStick }, asideRef) => {
  // const asideRef = useRef();

  // gauti aside el atstuma iki lango virsaus getBoundingClientRect().top;
  // kai aside apacia, liecia header virsu norim uzdeti klase active
  // kuri padaro aside fixed
  // kai aside apacia pasieka blog el virsu, nuimam active clase

  const categories = useHttp('products/categories');

  return (
    <>
      {asideStick && <div className={css.cat}></div>}
      <aside
        className={`${css.cat} ${asideStick ? css.stick : ''}`}
        ref={asideRef}
      >
        <a href='/shop/categories/all'>
          <strong> All Collections</strong>
        </a>
        <a href='/shop/categories/new'>
          <strong>New Arrivals</strong>
        </a>
        <div className={css.dash}></div>
        {categories.map((name) => (
          <a key={name} href={`/shop/categories/${stringToUrl(name)}`}>
            {name}
          </a>
        ))}
      </aside>
    </>
  );
});

// mobile atrddytu puikiai
export default ShopCategories;
