import Auth from "../utils/useAuth";
import "../styles/components/Profile.css";

const Profile = () => {
  const auth = Auth();
  const user = auth.user;
  // console.log(user.email);

  const signOutBtn = () => {
    auth.SIGNOUT().then((res) => {
      window.location.pathname = "/register";
    });
  };

  return (
    <>
      <div className="profilePage">
        {user ? (
          <div className="userInfo">
            {user.photo ? (
              <img src={user.photo} alt="User Pic" />
            ) : (
              <p className="userPic">{user.email.charAt(0)}</p>
            )}

            {user.name && <h1>Welcome, {user.name}</h1>}
            <p>
              Your Email : <strong>{user.email}</strong>
            </p>
            <button className="btn btnFull" onClick={signOutBtn}>
              Sign Out
            </button>
          </div>
        ) : (
          <p className="loading">Loading....</p>
        )}
      </div>
    </>
  );
};
export default Profile;
