import React from 'react';
import { data } from '../../../data';
import { useReducer } from 'react';

const ReducerBasics = () => {
  const defaultState = {
    people: data,
  };

  const reducer = () => {};

  const [state, dispatch] = useReducer(reducer, defaultState);

  // const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };

  const clearList = () => {
    // setPeople([]);
  };
  const resetList = () => {
    // setPeople(data);
  };

  console.log(state);

  return (
    <div>
      {/* {people.map((person) => { */}
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {/* {people.length < 1 ? ( */}
      {state.people.length < 1 ? (
        <button
          className="btn"
          style={{ marginTop: '2rem' }}
          onClick={removeItem}
        >
          reset
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: '2rem' }}
          onClick={clearList}
        >
          clear items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
