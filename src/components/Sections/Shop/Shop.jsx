import React from 'react';
import css from './Shop.module.css';
import ShopCategories from './ShopCategories';
import ShopItem from './ShopItem';
import useHttp from '../../../hooks/useHttp';

const Shop = React.forwardRef((props, asideRef) => {
  // useHttp hook
  const items = useHttp('products');
  const firstNineItems = items.slice(0, 9);
  // console.log(items);
  return (
    <section className={`container ${css.shop}`}>
      <ShopCategories asideStick={props.asideStick} ref={asideRef} />
      <main>
        {(firstNineItems || []).map((item) => (
          <ShopItem key={item.id} item={item} />
        ))}
      </main>
    </section>
  );
});

export default Shop;
