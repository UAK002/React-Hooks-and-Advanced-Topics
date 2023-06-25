import { data } from '../../../data';

import React from 'react';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  return (
    <div>
      {people.map((person) => {
        // console.log(person);
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default UseStateArray;
