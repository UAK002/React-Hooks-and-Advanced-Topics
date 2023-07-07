import React from 'react';

const Person = ({ name, nickName, images }) => {
  const img = images[0].small.url;
  return (
    // <h1 key={person.id}>{person.name}</h1>
    <div>
      <img src={img} alt={name} style={{ width: '50px' }} />
      <h4>{name}</h4>
      <h4>Nickname: {nickName}</h4>
    </div>
  );
};

export default Person;
