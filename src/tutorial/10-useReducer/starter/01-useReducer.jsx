import React from 'react';
import { data } from '../../../data';
import { useReducer } from 'react';

const defaultState = {
  people: data,
  isLoading: false,
};

const CLEAR_LIST = 'CLEAR_LIST';
const REMOVE_LIST = 'REMOVE_LIST';
const REMOVE_ITEM = 'REMOVE_ITEM';

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type === REMOVE_ITEM) {
    return { ...state, people: data };
  }
  throw new Error(`No matching "${action.type}" - action type`);
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };

  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
  };
  const resetList = () => {
    dispatch({ type: REMOVE_ITEM });
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
          onClick={resetList}
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
