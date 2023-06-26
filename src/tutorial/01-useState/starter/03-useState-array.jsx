import { data } from '../../../data';

import React from 'react';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    console.log(id);
    // const newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
    setPeople(people.filter((person) => person.id !== id));
  };
  const clearAllItems = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        // console.log(person);
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            {/* <button type="button" onClick={removeItem}> */}
            <button type="button" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}
      <button
        type="button"
        style={{ marginTop: '2rem' }}
        onClick={() => {
          setPeople([]);
        }}
        className="btn"
      >
        Clear Items
      </button>
    </div>
  );
};

export default UseStateArray;
