import css from './Collections.module.css';
import CollecionItem from './CollecionItem';
import useStrapi from './../../../hooks/useStrapi';
const collectionsData = [
  {
    id: 1,
    discount: 50,
    title: 'Outerware',
    link: '/shop/outerware',
    text: 'This is a wider card as a natural lead-in to additional content. This content is a little bit longer.',
    image: 'https://picsum.photos/id/1070/1000/800',
  },
  {
    id: 2,
    discount: 40,
    title: 'Footware',
    link: '/shop/footware',
    text: 'This is a wider card as a natural lead-in to additional content. This content is a little bit longer.',
    image: 'https://picsum.photos/id/1071/1000/800',
  },
  {
    id: 3,
    discount: 30,
    title: 'Sportsware',
    link: '/shop/sportsware',
    text: 'This is a wider card as a natural lead-in to additional content. This content is a little bit longer.',
    image: 'https://picsum.photos/id/1080/1000/800',
  },
];

// sukurti canvas-special-offer colecija strapi
// joje sukelti visas reikiamas reiksmes kurips yra collectionsData el (3elementus)
// suteikti public permissions (leidimus pasiimti duomenis)
// panaudoti useStrapi hook ir gauti domenis
export default function Collections() {
  const [data] = useStrapi('cancas-special-offers');

  return (
    <section className="container">
      <h2>TItle</h2>
      <div className={css['card-container']}>
        {data.map((it) => (
          <CollecionItem key={it.id} item={it} />
        ))}
      </div>
    </section>
  );
}
