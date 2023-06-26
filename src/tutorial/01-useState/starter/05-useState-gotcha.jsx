import { useState } from 'react';

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    // setValue(value + 1);
    // console.log(value);
    setValue((currentState) => {
      const newState = currentState + 1;
      // console.log(currentState);
      console.log(newState);
      return newState;
    });
  };

  return (
    <div>
      <h1>{value}</h1>
      <button className="btn" type="button" onClick={handleClick}>
        increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
