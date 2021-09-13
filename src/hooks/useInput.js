import { useState } from 'react';
export default function useInput(initValue) {
  const [inputVal, setInputVal] = useState(initValue);

  function changeHandler(e) {
    // console.log('e', e);
    // if (e.target?.value) {
    setInputVal(e.target.value);
    // }
  }
  return [inputVal, changeHandler];
}
