import LoginCard from "./LoginCard";
import LoginWallpaper from "./LoginWallpaper";
import "../../styles/login/Login.scss";
import Footer from "../layout/Footer";

const Login = function () {
  return (
    <div className="login-container">
      <LoginCard></LoginCard>
      <LoginWallpaper></LoginWallpaper>
      <Footer></Footer>
    </div>
  );
};

export default Login;
