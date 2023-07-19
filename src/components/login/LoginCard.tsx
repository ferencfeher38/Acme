import { useState } from "react";
import axios from "axios";
import "../../styles/login/LoginCard.scss";
import { Colors } from "../../components/common/Colors.ts";

const LoginCard = function () {
  const [isEmailFocused, setEmailFocus] = useState(false);
  const [isPasswordFocused, setPasswordFocus] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [dotColors, setDotColors] = useState([
    Colors.colorGray,
    Colors.colorGray,
    Colors.colorGray,
    Colors.colorGray,
  ]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordChange = function (
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const newPassword = event.target.value;
    setDotColorsByPasswordLength(newPassword.length);
    setPassword(newPassword);
  };

  const setDotColorsByPasswordLength = function (length: number) {
    if (length >= 2) {
      setDotColors([
        Colors.colorRed,
        Colors.colorRed,
        Colors.colorYellow,
        Colors.colorGray,
      ]);
    }
    if (length >= 4) {
      setDotColors([
        Colors.colorRed,
        Colors.colorYellow,
        Colors.colorGray,
        Colors.colorGray,
      ]);
    }
    if (length >= 6) {
      setDotColors([
        Colors.colorYellow,
        Colors.colorLightGreen,
        Colors.colorGray,
        Colors.colorGray,
      ]);
    }
    if (length >= 8) {
      setDotColors([
        Colors.colorDarkGreen,
        Colors.colorLightGreen,
        Colors.colorGray,
        Colors.colorGray,
      ]);
    }
    if (length >= 10) {
      setDotColors([
        Colors.colorDarkGreen,
        Colors.colorDarkGreen,
        Colors.colorLightGreen,
        Colors.colorGray,
      ]);
    }
    if (length >= 12) {
      setDotColors([
        Colors.colorDarkGreen,
        Colors.colorDarkGreen,
        Colors.colorDarkGreen,
        Colors.colorDarkGreen,
      ]);
    }
  };

  const handlePasswordBlur = function () {
    setDotColors([
      Colors.colorGray,
      Colors.colorGray,
      Colors.colorGray,
      Colors.colorGray,
    ]);
  };

  const handleTogglePasswordVisibility = function () {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = async function (event: React.FormEvent) {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://us-central1-ria-server-b1103.cloudfunctions.net/authenticate",
        {
          data: {
            email,
            password,
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-card-container">
      <div className="login-card">
        <h1>Welcome to Acme.</h1>
        <h6>Create your account by filling the form below.</h6>
        <form>
          <label htmlFor="email" className={isEmailFocused ? "focused" : ""}>
            Email
          </label>
          <input
            type="email"
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            className={isPasswordFocused ? "focused" : ""}
            htmlFor="password"
          >
            Password
          </label>
          <div
            className={`password-input-wrapper ${
              isPasswordFocused ? "focused" : ""
            }`}
          >
            <input
              type={isPasswordVisible ? "text" : "password"}
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => {
                setPasswordFocus(false);
                handlePasswordBlur();
              }}
              onChange={handlePasswordChange}
              value={password}
            />
            <div
              className="img-wrapper"
              onClick={handleTogglePasswordVisibility}
            >
              <img
                src={
                  isPasswordVisible
                    ? "images/fa-eye.png"
                    : "images/fa-eye-slash.png"
                }
                alt="Toggle password visibility"
              />
            </div>
            <div className="dot-wrapper">
              <div
                className="dot"
                style={{ backgroundColor: dotColors[3] }}
              ></div>
              <div
                className="dot"
                style={{ backgroundColor: dotColors[2] }}
              ></div>
              <div
                className="dot"
                style={{ backgroundColor: dotColors[1] }}
              ></div>
              <div
                className="dot"
                style={{ backgroundColor: dotColors[0] }}
              ></div>
            </div>
          </div>
          <div className="checkbox-wrapper">
            <input type="checkbox" />
            <h5>Remember me.</h5>
          </div>
          <button onClick={handleLogin}>Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default LoginCard;
