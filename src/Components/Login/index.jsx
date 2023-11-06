import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Styles.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const { data } = await axios.post(
        process.env.REACT_APP_BASE_API_URL + "/admin/signin",
        { email, password }
      );
      console.log(data);
      localStorage.setItem("token", data.token);
      navigate("/listedjobs");
    } catch (e) {
      console.log(e);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button className="mybtn" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
