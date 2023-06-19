import { useDispatch, useSelector } from "react-redux";
import Logo from "../assets/img/argentBankLogo.png";
import { Link } from "react-router-dom";
import { logout } from "../redux/slices/auth.slice";
import { reset } from "../redux/slices/account.slice";

const Header = () => {
  const { userToken, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {!userToken ? (
        <div>
          <Link to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i> Sign In
          </Link>
        </div>
      ) : (
        <div>
          <Link className="main-nav-item" to={"/profile"}>
            <i className="fa fa-user-circle"></i> {user.firstname}
          </Link>
          <Link
            className="main-nav-item"
            to={"/"}
            onClick={(e) => {
              dispatch(logout());
              dispatch(reset());
            }}
          >
            <i className="fa fa-sign-out"></i> Sign Out
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
