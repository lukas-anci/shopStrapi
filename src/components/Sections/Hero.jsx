import css from './Hero.module.css';
import Button from '../UI/Button';
import SocialLinks from '../UI/SocialLinks.style';
import useStrapi from './../../hooks/useStrapi';

export default function Hero() {
  const [data, isLoading] = useStrapi('canvas-hero');
  return (
    <section className={css.hero}>
      <div className={css['center-part']}>
        <h1>{isLoading ? 'Loading...' : data.mainTitle}</h1>
        <p>{data.subtitle}</p>
        <div className={css.controll}>
          <Button>{data.button1}</Button>
          <Button>{data.button2}</Button>
        </div>
      </div>
      <SocialLinks dash hero />
    </section>
  );
}
