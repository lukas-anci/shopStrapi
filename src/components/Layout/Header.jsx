import css from './Header.module.css';
import { useState, useEffect, useContext, useCallback } from 'react';
import useStrapi from './../../hooks/useStrapi';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import { AuthContext } from './../../store/AuthProvider';

export default function Header({ page }) {
  const history = useHistory();
  // gauti context ir paimti vartojo email
  const context = useContext(AuthContext);
  // console.log('context', context.userInfo);
  // sekti ar dokumentas yra slenkamas zemyn
  const user = context.userInfo.email;
  const [navState, setNavState] = useState(false);
  const [menuItems, isLoading] = useStrapi('canvas-menus');

  // jei nesam prisilogine tai isfiltruoti members only pagae kurio id 8

  const filteredMenuItems = menuItems.filter((res) => res.id !== 8);
  // console.log('filteredMenuItems', filteredMenuItems);
  const finalMenuItems = user ? menuItems : filteredMenuItems;

  useCallback(() => {
    // console.log('menu items', menuItems);
  }, [menuItems]);

  const match = useRouteMatch();
  useEffect(() => {
    // console.log('match', match);
  }, [useRouteMatch]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleScroll(e) {
    const dist = window.pageYOffset;
    // console.log('scroll ', dist);
    if (dist > 200) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  }
  // if (isLoading) return <header>Loading...</header>;
  // header dalyje kai prisiloginam mes parodom user email navigacijoj

  function logoutHandler(e) {
    e.preventDefault();
    console.log('paviko');
    context.logout();
    history.push('/');
  }
  return (
    <header
      className={`${css.header} ${
        navState || page !== 'home' ? css.active : ''
      }`}
    >
      <Link className={css.logo} to="/">
        Canvas<strong>Store</strong>
      </Link>
      <nav className={css['main-nav']}>
        {finalMenuItems.map((l) => (
          <Link key={l.link} to={l.link}>
            {/* pasitikrini ar esom prisilogine, jei taip tik tada rodom visa menu  */}
            {l.title}
          </Link>
        ))}
      </nav>
      <nav className={css['side-nav']}>
        {user ? (
          <a onClick={logoutHandler} href="/logout">
            Logout {user}
          </a>
        ) : (
          <Link to="/login">SignUp/Login</Link>
        )}
        <a href="/">Cart</a>
      </nav>
    </header>
  );
}
