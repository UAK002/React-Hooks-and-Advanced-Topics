// import { NavbarContext } from './Navbar';
// import { useContext } from 'react';
import { useAppContext } from './Navbar';

// const UserContainer = ({ user, logout }) => {
const UserContainer = () => {
  // const value = useContext(NavbarContext);
  // console.log(value);

  // const { user, logout } = useContext(NavbarContext);
  const { user, logout } = useAppContext();

  // return 'hello there';
  return (
    <div className="user-container">
      {user ? (
        <>
          {/* <p>Hello There, {user?.name.toUpperCase()}</p> */}
          <p>Hello There, {user?.name?.toUpperCase()}</p>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>please login</p>
      )}
    </div>
  );
};
export default UserContainer;
