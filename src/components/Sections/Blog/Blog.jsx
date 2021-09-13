import React, { useContext } from 'react';
import css from './Blog.module.css';
import BlogItem from './BlogItem';
import useStrapi from './../../../hooks/useStrapi';
import { AuthContext } from '../../../store/AuthProvider';

// const blogsa = [
//   {
//     id: 'b1',
//     title: 'Want to travel? Great Stuffs for Travel',
//     image: 'https://picsum.photos/id/1057/1000/800',
//     summary:
//       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo doloremque eveniet dolorem, porro earum. Eius, corrupti provident iusto modi sunt.',
//     link: '/blog/b1',
//     text: "Code blocks are part of the Markdown spec, but syntax highlighting isn't. However, many renderers -- like Github's and Markdown Here -- support syntax highlighting. Which languages are supported and how those language names should be written will vary from renderer to renderer. Markdown Here supports highlighting for dozens of languages (and not-really-languages, like diffs and HTTP headers); to see the complete list, and how to write the language names, see the highlight.js demo page.",
//   },
//   {
//     id: 'b2',
//     title: 'Our Melbourne Store',
//     image: 'https://picsum.photos/id/1061/1000/800',
//     summary:
//       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo doloremque eveniet dolorem, porro earum. Eius, corrupti provident iusto modi sunt.',
//     link: '/blog/b2',
//     text: "Code blocks are part of the Markdown spec, but syntax highlighting isn't. However, many renderers -- like Github's and Markdown Here -- support syntax highlighting. Which languages are supported and how those language names should be written will vary from renderer to renderer. Markdown Here supports highlighting for dozens of languages (and not-really-languages, like diffs and HTTP headers); to see the complete list, and how to write the language names, see the highlight.js demo page.",
//     address: '795 Folsom Ave, Suite 600 San Francisco, CA 94107',
//   },
// ];

// susikuriam canvas_blog kolekcija
// supildom 4 blogus
// pasrsisiunciam ir naudojam tik 2
// query params _limit=5_sort=title
// forwardingRef - naudojama kai reikia perduoti DOM nuoroda SUkurtam komponetui

const Blog = React.forwardRef((props, blogRef) => {
  // const match = useRouteMatch();
  // console.log('match', match);
  // issitraukt token is context
  const context = useContext(AuthContext);
  // console.log('blog token', context.token);
  const token = (props.kind === 'paid' && context.token) || null;
  function makeCorrectUrl() {
    const howManyItems = props.qty ? `?_limit=${props.qty}` : '';
    if (props.kind === 'paid') return `canvas-paid-blogs${howManyItems}`;
    return `canvas-blogs${howManyItems}`;
  }

  const [blogs] = useStrapi(makeCorrectUrl(), token);
  // const firstTwo = blogs.slice(0, 2);
  return (
    <section ref={blogRef} className={`container ${css.blog}`}>
      {props.kind === 'free' && <h1>Check out our blog</h1>}
      {props.kind === 'paid' && <h1>Check out our members only articles</h1>}
      {blogs.map((b) => (
        <BlogItem
          kind={props.kind}
          membersOnlyBackFlag={props.membersOnlyBackFlag}
          key={b.id}
          blog={b}
        />
      ))}
    </section>
  );
});

export default Blog;
// sukiam sekcija Blog

// Sukuriam BlogItem pagal dizaina

// atvizduojam viska kaip brezinyje

// duomenys blog is sukurto masyvo
