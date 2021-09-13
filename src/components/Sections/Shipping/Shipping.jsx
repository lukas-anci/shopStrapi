import styled from 'styled-components';
import ShippingCol from './ShippingCol';

const ShippingArr = [
  {
    title: 'SHIPPING WORLDWIDE',
    text: 'Minimum $999 for free Shipping. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio sequi natus eveniet, dicta magni! Modi nihil quis quos at mollitia.',
  },
  {
    title: 'FREE RETURNS',
    subtitle: 'Within 30 days Guarantee',
    text: 'Synergistically repurpose ethical value and backend paradigms. Holisticly architect effective expertise for installed base e-markets.',
  },
  {
    title: 'CUSTOMER SERVICE',
    text: 'Odio sequi natus eveniet, dicta magni! Modi nihil quis quos at mollitia.',
    contacts: {
      Phone: '(+0) 9876 543211',
      Fax: '(+0) 11 2222 3333',
      Email: 'noreply@canvas.com',
    },
    social: true,
  },
  {
    title: 'OUR STORES',
    address: [
      {
        title: 'Melbourne Store:',
        line1: '795 Folsom Ave, Suite 600',
        line2: 'San Francisco, CA 94107',
      },
      {
        title: 'Sydney Store:',
        line1: '795 Folsom Ave, Suite 600',
        line2: 'San Francisco, CA 94107',
      },
    ],
    workingHours: {
      from: '10am',
      to: '7pm',
      day: 'Every',
    },
  },
];

const ShippingSection = styled.section`
  display: flex;
  gap: 2rem;
  // style
`;

export default function Shipping() {
  return (
    <ShippingSection className='container'>
      {ShippingArr.map((col) => (
        <ShippingCol key={col.title} column={col} />
      ))}
    </ShippingSection>
  );
}
