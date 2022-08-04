import "./Login.css";
import Header from "../Header.js";

export default function Login() {
  return (
    <div className="loginPage">
      <Header />
      <form className="LoginForm">
        <h2>Log In</h2>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
      </form>
    </div>
  );
}
