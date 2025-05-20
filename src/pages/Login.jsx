import { useContext, useEffect, useState } from "react";
import { loginUser } from "../api/authApi";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await loginUser({ email, password });

    if (data) {
      login(data);
      navigate("/");
    } else {
      alert("Invalid Credentials");
      setEmail("");
      setPassword("");
    }
  };

  useEffect(() => {
    const elements = document.querySelectorAll("[data-background]");
    elements.forEach((el) => {
      const bg = el.getAttribute("data-background");
      if (bg) {
        el.style.backgroundImage = `url(${bg})`;
      }
    });
  }, []);

  return (
    <section
      className="account-section bg_img"
      data-background="frontend/images/account/account-bg.jpg"
    >
      <div className="container mx-auto px-4">
        <div className="padding-top padding-bottom">
          <div className="account-area">
            <div className="section-header-3 flex flex-col items-center justify-center text-center mb-6">
              <img
                src="/frontend/images/logo/logo.png"
                alt="Logo"
                className="w-28 mb-4"
              />
              <h2 className="title text-white text-2xl font-bold uppercase">
                Welcome Back
              </h2>
            </div>
            <form className="account-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email2">
                  Email<span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  id="email2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="pass3">
                  Password<span>*</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  id="pass3"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group checkgroup">
                <input type="checkbox" id="bal2" defaultChecked />
                <label htmlFor="bal2">Remember password</label>
                <Link to="/forgot-password" className="forget-pass">
                  Forget Password
                </Link>
              </div>
              <div className="form-group text-center">
                <input type="submit" value="Log in" />
              </div>
            </form>
            <div className="option">
              Don't have an account? <Link to="/sign-up">Sign up now</Link>
            </div>
            <div className="or">
              <span>Or</span>
            </div>
            <ul className="social-icons">
              <li>
                <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#0" className="active">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#0">
                  <i className="fab fa-google"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
