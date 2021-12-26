import Auth from "../utils/useAuth";
import "../styles/components/Profile.css";

const Profile = () => {
  const auth = Auth();

  const signOutBtn = () => {
    auth.SIGNOUT().then((res) => {
      window.location.pathname = "/";
    });
  };

  return (
    <>
      <div className="profilePage">
        {auth.user ? (
          <div className="userInfo">
            <img src={auth.user.photo} alt="User Pic" />
            <h1>Welcome, {auth.user.name}</h1>
            <p>
              Your Email : <strong>{auth.user.email}</strong>
            </p>
            <button className="btn btnFull" onClick={signOutBtn}>
              Sign Out
            </button>
          </div>
        ) : (
          <p className="loading">Something Went Wrong</p>
        )}
      </div>
    </>
  );
};
export default Profile;
