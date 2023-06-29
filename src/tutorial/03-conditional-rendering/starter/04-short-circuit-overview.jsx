import { useState } from 'react';

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState('');

  // truthy
  const [name, setName] = useState('susan');

  const codeExample = text || 'hello World';

  return (
    <div>
      {/* {if(name){console.log("hello")}} */}
      <h4>Falsy OR : {text || 'hello world'}</h4>
      <h4>Falsy AND : {text && 'hello world'}</h4>
      <h4>Truthy OR : {text || 'hello world'}</h4>
      <h4>Truthy AND : {text && 'hello world'}</h4>
      {codeExample}
    </div>
  );
};
export default ShortCircuitOverview;
