import { useState } from 'react';
import css from './From.module.css';

export default function Form({ onEmailSubmit }) {
  // pasidaryti useInput custom hook ir ji naudosi siam ir tolimesniuose react projekuose
  const [input, setInput] = useState('');

  function submitHandler(e) {
    e.preventDefault();

    if (input) {
      onEmailSubmit(input);
      setInput('');
    }
  }
  return (
    <form onSubmit={submitHandler} className={css.form}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Enter your email address"
      />
      <button>Subscribe&nbsp;now</button>
    </form>
  );
}
