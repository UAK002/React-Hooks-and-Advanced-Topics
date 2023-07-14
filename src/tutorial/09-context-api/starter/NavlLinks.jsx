import UserContainer from './userContainer';

const NavlLinks = ({ user, logout }) => {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
      <UserContainer user={user} logout={logout} />
    </div>
  );
};
export default NavlLinks;
