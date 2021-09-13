import React, { useContext, useState } from 'react';

export const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  userInfo: '',
  login: () => {},
  logout: () => {},
});

AuthContext.displayName = 'AuthContext';

export default function AuthProvider({ children }) {
  // state, useEffect
  const [token, setToken] = useState('');
  const [userInfo, setUserInfo] = useState({});

  // infered value - apskaiciuojama priklausoma reiksme
  // const isLoggedIn = token ? true : false;
  const isLoggedIn = !!token;

  function loginHandler(token, userData) {
    setToken(token, userData);
    setUserInfo(userData);
  }
  function logoutHandler(token) {
    setToken('');
    setUserInfo({});
  }
  const ctx = {
    userInfo,
    isLoggedIn,
    token: token,
    login: loginHandler,
    logout: logoutHandler,
  };
  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
}

// const authCtx = () => {
//   return useContext(AuthContext);
// };
