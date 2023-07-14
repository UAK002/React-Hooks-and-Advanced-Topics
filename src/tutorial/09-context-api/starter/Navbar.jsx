import { useState, createContext } from 'react';
import NavlLinks from './NavlLinks';

export const NavbarContext = createContext();
console.log(NavbarContext);
console.log(NavbarContext.Provider);

const Navbar = () => {
  const [user, setUser] = useState({ name: 'bob' });

  const logout = () => {
    setUser(null);
  };
  return (
    // <NavbarContext.Provider value={{ user: user, logout: logout }}>
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        {/* <NavlLinks user={user} logout={logout} /> */}
        <NavlLinks />
      </nav>
    </NavbarContext.Provider>
  );
};
export default Navbar;
