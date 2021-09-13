import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import useInput from './../../../hooks/useInput';
import useStrapiPost from './../../../hooks/useStrapiPost';
import { postData, registerData } from './../../../utils/http';
import { AuthContext } from './../../../store/AuthProvider';
import { Link, useHistory } from 'react-router-dom';
import { doPasswordsMatch, verifyEmail } from '../../../utils/validate';

const Card = styled.div`
  max-width: 400px;
  margin: auto;
  border-radius: 5px;
  text-align: center;
  border: 1px solid #000;
  form {
    max-width: 300px;
    margin: 3rem auto;
  }
  input {
    display: block;
    font-size: 1rem;
    padding: 4px;
    width: 100%;
    margin-bottom: 10px;
  }
  input.invalid {
    border-color: tomato;
    background-color: rgb(255, 200, 190);
  }
  h2 {
    margin: 1rem auto;
  }
  button {
    background-color: #333;
    border: 1px solid #333;
    text-transform: uppercase;
    color: inherit;
    padding: 0.4rem 1rem;
    font-size: 1rem;
    color: white;
  }
  button:disabled {
    background-color: #545454;
    cursor: not-allowed;
  }
  form a {
    display: block;
    text-align: right;
    margin-bottom: 1rem;
  }
  h6 {
    background-color: #ededed;
    text-align: center;
    padding: 1rem 0;
    font-size: 1rem;
  }
`;
const Hr = styled.div`
  height: 1px;
  background-color: gray;
`;
export default function RegisterForm() {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const [passwordRepeat, setPasswordRepeat] = useInput('');

  const [formIsValid, setFormIsValid] = useState(null);
  const [formWasTouched, setFormWasTouched] = useState(false);

  const isFormFilled = email.trim() !== '' && password.trim() !== '';
  const emailIsValid = verifyEmail(email);
  const passMatch = doPasswordsMatch(password, passwordRepeat);

  useEffect(() => {
    if (isFormFilled && emailIsValid && passMatch) {
      return setFormIsValid(true);
    }
    setFormIsValid(formWasTouched ? false : null);
  }, [isFormFilled, emailIsValid, passMatch, formWasTouched]);

  // const [formError, setFormError] = useState({
  //   email: false,
  //   passwordMatch: false,
  //   form: false,
  // });

  async function handleSubmit(e) {
    e.preventDefault();
    // reset errors

    console.log(email, password, passwordRepeat);
    if (!formIsValid) return;
    console.log('we should not see this if the for mis valid');

    // pass validation
    const postToStrapiAuthResult = await postData(
      { email, password },
      'auth/local/register',
      true
    );
    console.log(postToStrapiAuthResult);
    // irasyti tokena i kontexta
    const userData = {
      email: postToStrapiAuthResult.user.email,
      username: postToStrapiAuthResult.user.username,
    };
    authCtx.login(postToStrapiAuthResult.jwt, userData);

    // redirect
    await history.replace('/');
  }
  useEffect(() => {
    return () => {
      console.log('cleanup');
      setFormIsValid(null);
    };
  }, []);
  return (
    <Card>
      <h2>Hello, welcome back</h2>
      <Hr />
      {!isFormFilled && formWasTouched && <p>Please fill all fields</p>}
      {!emailIsValid && formWasTouched && <p>Please check your email</p>}
      {!passMatch && formWasTouched && <p>Passwords do not match</p>}
      <form onSubmit={handleSubmit}>
        <input
          onBlur={() => setFormWasTouched(true)}
          className={!emailIsValid && formWasTouched ? 'invalid' : ''}
          value={email}
          onChange={setEmail}
          type="text"
          placeholder="Username or email"
        />
        <input
          onBlur={() => setFormWasTouched(true)}
          className={!isFormFilled && formWasTouched ? 'invalid' : ''}
          value={password}
          onChange={setPassword}
          type="password"
          placeholder="Password"
        />
        <input
          onBlur={() => setFormWasTouched(true)}
          className={!passMatch && formWasTouched ? 'invalid' : ''}
          value={passwordRepeat}
          onChange={setPasswordRepeat}
          type="password"
          placeholder="Repeat Password"
        />

        <button type="submit">Register</button>
      </form>
      <Hr />
      <h6>
        Have an account? <Link to="/login">Log in</Link>
      </h6>
    </Card>
  );
}
