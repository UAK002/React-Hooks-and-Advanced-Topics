import { useState } from 'react';
import NavlLinks from './NavlLinks';

const Navbar = () => {
  const [user, setUser] = useState({ name: 'bob' });

  const logout = () => {
    setUser(null);
  };
  return (
    <nav className="navbar">
      <h5>CONTEXT API</h5>
      <NavlLinks user={user} logout={logout} />
    </nav>
  );
};
export default Navbar;
