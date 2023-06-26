import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    name: 'reading books',
  });

  // const [name, setName] = useState('peter');
  // const [age, setAge] = useState(24);
  // const [hobby, setHobby] = useState('Reading books');

  const displayPerson = () => {
    // setName('john');
    // setAge(28);
    // setHobby('screaming at the computer');

    // setPerson({ name: 'john', age: 28, hobby: 'screaming at the computer' });
    // setPerson('shakeAndBake');
    // setPerson({ name: 'john' });
    setPerson({ ...person, name: 'john' });
  };

  return (
    <>
      {/* <h3>{name}</h3> */}
      <h3>{person.name}</h3>
      {/* <h3>{age}</h3> */}
      <h3>{person.age}</h3>
      {/* <h3>Enjoys: {hobby}</h3> */}
      <h3>Enjoys: {person.hobby}</h3>
      <button className="btn" onClick={displayPerson}>
        show john
      </button>
    </>
  );
};

export default UseStateObject;
