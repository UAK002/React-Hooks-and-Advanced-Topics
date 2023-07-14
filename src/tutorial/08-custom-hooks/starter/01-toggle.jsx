// import { useState } from 'react';
import useToggle from './useToggle';

const ToggleExample = () => {
  // const [show, setShow] = useState(false);
  const { show, toggle } = useToggle(true);
  useToggle;
  return (
    <div>
      <h4>toggle custom hook</h4>
      {/* <button className="btn" onClick={() => setShow(!show)}> */}
      <button className="btn" onClick={toggle}>
        toggle
      </button>
      {show && <h4>some stuff</h4>}
    </div>
  );
};
export default ToggleExample;
