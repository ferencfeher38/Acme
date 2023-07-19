import "../../styles/login/LoginWallpaper.scss";

const LoginWallpaper = function () {
  return (
    <div className="login-wallpaper-container">
      <div className="login-content-wrapper">
        <img src="images/acme@3x.png" alt="acme"></img>
        <h2>Do you already have an account?</h2>
        <h4>
          That's awesome! You can login by clicking on the button bellow. To
          skip this next time, you can ask us to remember your login
          credentials.
        </h4>
        <button>Log in</button>
      </div>
    </div>
  );
};

export default LoginWallpaper;
