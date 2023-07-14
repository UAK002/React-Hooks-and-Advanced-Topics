const UserContainer = ({ user, logout }) => {
  return (
    <div className="user-container">
      {/* <p>Hello There, {user.name}</p> */}
      {/* <p>Hello There, {user?.name.toUpperCase()}</p>
      <button className="btn" onClick={logout}>
        logout
      </button> */}
      {user ? (
        <>
          <p>Hello There, {user?.name.toUpperCase()}</p>
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
