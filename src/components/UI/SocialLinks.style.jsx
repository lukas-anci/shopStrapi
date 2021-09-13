import styled, { css } from 'styled-components';
import Icon from './Icon';

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  ${(props) =>
    props.hero &&
    css`
      position: absolute;
      bottom: 1.5rem;
      left: 1rem;
    `}

  .dash {
    width: 2rem;
    height: 0.5px;
    background-color: #f9f9f9;
  }
`;

const social = [
  {
    title: 'Facebook',
    icon: 'facebook',
    link: 'http://www.facebook.com',
  },
  {
    title: 'Instagram',
    icon: 'instagram',
    link: 'http://www.instagram.com',
  },
  { title: 'Youtube', icon: 'youtube-play', link: 'http://www.youtube.com' },
];

export default function SocialLinks({ dash, hero }) {
  return (
    <SocialContainer hero={hero}>
      {dash && <div className='dash'></div>}
      {social.map((s) => (
        <a key={s.link} target='_blank' rel='noreferrer' href={s.link}>
          <Icon icon={s.icon} />
        </a>
      ))}
    </SocialContainer>
  );
}
