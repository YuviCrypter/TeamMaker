import "../styles.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <div className="header">
        <Link className="link" to="/">
          {" "}
          Team Maker
        </Link>
        <div className="login-register">
          <Link className="link" to="/login">
            Login
          </Link>
          <Link className="link" to="/signup">
            SignUp
          </Link>
        </div>
      </div>
    </>
  );
}
