import { Link } from "react-router-dom";
import "../../App.css";

const Header = () => {
  return (
    <div className="header" id="header" style={{ backgroundColor: "#3489eb" }}>
      <div className="clearfix">
        <div className="center_wr">
          <h3 className="logo">Logo</h3>
          <div className="menu">
            <ul>
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>
                <Link to="/addUser">AddUser</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/service">Service</Link>
              </li>
              <li>
                <Link to="/signin">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
