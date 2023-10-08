import { Link } from "react-router-dom";

const Nav = () => {
 
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Uploadify
        </Link>
        <div>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
