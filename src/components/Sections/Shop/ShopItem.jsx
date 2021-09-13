import css from './ShopItem.module.css';
import Button from '../../UI/Button';

export default function ShopItem({ item }) {
  return (
    <article className={css.item}>
      <div className={css['img-container']}>
        <img src={item.image} alt={item.title} />
        <Button>+ ADD TO CART</Button>
      </div>

      <div className={css.info}>
        <h5>{item.title}</h5>
        <h5>{item.price}</h5>
        <p>{item.category}</p>
      </div>
    </article>
  );
}
// sukuriam viena shop item pagal brezini

// gaunam duomenis is fake store api, taip pat kaip kategorijose
// perisdaryti kategorijos duomenu gavimo logika i custom hook ir panaudoti ji abiejuose
// komponentuose

// gave duomenis atvaizuojam itemus
