import { useState } from 'react';

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      console.log('you clicked me');
      // setValue(value + 1);
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
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
