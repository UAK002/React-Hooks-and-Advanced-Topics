import { useState } from 'react';
import React from 'react';

const UseStateBasics = () => {
  // console.log(useState());
  // console.log(useState('bob'));

  // const value = useState('hello')[0];
  // const func = useState('hello')[1];
  // console.log(value);
  // console.log(func);

  // const [count, setCount] = useState(0);
  // console.log(count);
  // console.log(setCount);

  const [count, setCount] = useState(0);
  const [name, setName] = React.useState();

  const handClick = () => {
    setCount(count + 1);
    // setCount('pants');
  };

  return (
    <div>
      <h2>You click {count} times</h2>
      <button type="button" className="btn" onClick={handClick}>
        click me
      </button>
    </div>
  );
};

export default UseStateBasics;
