import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // const [text, setText] = useState('ok');
  // truthy
  const [name, setName] = useState('susan');
  // const [user, setUser] = useState({ name: 'john' });
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>{text || 'default value'}</h2>
      {/* <h2>{name || 'default value'}</h2> */}
      {text && (
        <div>
          <h2>whatever returns</h2>
          <h2>{name}</h2>
        </div>
      )}
      {user && <SomeComponent name={user.name} />}
      <h2>ternary operator</h2>
      <button className="btn">{isEditing ? 'Edit' : 'Add'}</button>
      {user ? (
        <div>
          <h4>hello there {user.name}</h4>
        </div>
      ) : (
        <div>
          <h2>please login</h2>
        </div>
      )}
    </div>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h2>whatever returns</h2>
      <h2>{name}</h2>
    </div>
  );
};

export default ShortCircuitExamples;
