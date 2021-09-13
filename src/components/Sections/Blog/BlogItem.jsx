import css from './BlogItem.module.css';
import Icon from '../../UI/Icon';
import { Link, useRouteMatch } from 'react-router-dom';

export default function BlogItem({
  blog: b,
  singlePage,
  kind,
  membersOnlyBackFlag,
}) {
  const match = useRouteMatch();
  console.log(match);

  // match.url === /membersonlypage/3
  // gauti /membersonlypage
  let backPath = match.url.slice(0, match.url.lastIndexOf('/'));
  if (!membersOnlyBackFlag) backPath = '/blog';
  console.log('backpath', backPath);
  const oneArticleUrl =
    kind === 'paid' ? `membersonlypage/${b.id}` : `${match.url}/${b.id}`;
  return (
    <article
      className={`${css['blog-item']} ${singlePage ? css.singlePage : ''}`}
    >
      {singlePage && <h1 className={css['main-title']}>{b.title}</h1>}
      <img
        src={process.env.REACT_APP_STRAPI_URL + b.image?.url}
        alt={b.title}
      />
      {!singlePage && <h3 className="title">{b.title}</h3>}
      {/* TODO: panaudoti summary, jei nera tada nukirpri pagr text */}
      <p>{singlePage ? b.text : b.summary}</p>
      {b.address && (
        <address>
          <strong>
            <Icon icon="map-marker" />
            Headquaters:
          </strong>{' '}
          <a href="http://google.com" target="_blank" rel="noreferrer">
            {b.address}
          </a>
        </address>
      )}
      {/* match.url - grazina dabartini url adresa */}
      {!singlePage ? (
        <Link to={oneArticleUrl}>
          View details <Icon icon="long-arrow-right" />
        </Link>
      ) : (
        <Link to={backPath}>Go back</Link>
      )}
    </article>
  );
}
