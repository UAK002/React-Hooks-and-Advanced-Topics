import { useState } from 'react';

const UseStateObject = () => {
  const [name, setName] = useState('peter');
  const [age, setAge] = useState(24);
  const [hobby, setHobby] = useState('Reading books');

  const displayPerson = () => {
    setName('john');
    setAge(28);
    setHobby('screaming at the computer');
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>Enjoys: {hobby}</h3>
      <button className="btn" onClick={displayPerson}>
        show john
      </button>
    </>
  );
};

export default UseStateObject;
