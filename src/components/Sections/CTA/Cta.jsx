import css from './Cta.module.css';
import Form from './Form';

function Cta({ bg, title, subtitle }) {
  // Cta() gauti ivesties lauko reiskme is <Form />
  function handleEmail(emailInput) {
    // console.log(emailInput);
  }
  return (
    <section className={css.cta}>
      <video
        className={css.video}
        id="background-video"
        autoPlay
        loop
        muted
        poster="https://assets.codepen.io/6093409/river.jpg"
      >
        <source src={bg} type="video/mp4" />
      </video>

      <div className={css.center}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <Form onEmailSubmit={handleEmail} />
      </div>
    </section>
  );
}

Cta.defaultProps = {
  title: 'Subscribe Now',
  subtitle:
    'Subscribe to Our Newsletter to get Important News, Amazing Offers and Inside Scoops:',
  bg: 'https://assets.codepen.io/6093409/river.mp4',
};
export default Cta;
