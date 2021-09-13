import css from './CollecionItem.module.css';
import Button from '../../UI/Button';

export default function CollecionItem({ item }) {
  const style = {
    backgroundImage: `url(${process.env.REACT_APP_STRAPI_URL}${item.image[0]?.formats?.medium?.url})`,
  };
  return (
    <div className={css.card} style={style}>
      <h3>{item.discount}% OFF</h3>
      <div className={css.bottom}>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        <Button>SHOP NOW</Button>
      </div>
    </div>
  );
}
