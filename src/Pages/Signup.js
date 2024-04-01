import { useNavigate } from "react-router-dom";
import "../Assets/css/Signup.css";

function Signup() {
  const navigate = useNavigate();

  function nav_home(event) {
    navigate("/home");
  }

  return (
    <div className="container">
      <form className="form-container">
        <label for={"userID"}>User ID</label>
        <br />
        <input type="text" id="userID"></input>
        <br />
        <label for={"paswrd"}>Password</label>
        <br />
        <input type="password" id="paswrd"></input>
        <br />
        <label for={"cpaswrd"}>Confirm Password</label>
        <br />
        <input type="password" id="cpaswrd"></input>
        <br />
        <label for={"name"}>Name</label>
        <br />
        <input type="text" id="name"></input>
        <br />
        <input type="submit" id="submit" onClick={nav_home}></input>
      </form>
    </div>
  );
}

export default Signup;
