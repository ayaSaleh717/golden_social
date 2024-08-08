import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/")
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="parent-login">
      <h1>Golden Social</h1>
      <div className="login">
        <div className="card">
            <form>
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
              {err && err}
              <button type="submit" onClick={handleLogin}>Login</button>
            </form>
            <div class="line"></div>
            <div>
              <Link to="/register">
                <button className="new-account-btn">register</button>
              </Link>
            </div>
        </div>
      </div>
      <div class="languages">
            <ul>
              <li><a >Arabic</a></li>
              <li><a >English (US)</a></li>
              <li><a >Francais (France)</a></li>
              <li><a >Deutsch</a></li>
              <li><a >Espanol</a></li>
            </ul>
        </div>
    </div>
   
  );
};

export default Login;
