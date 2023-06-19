import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="main notfound-page">
      <h1>404</h1>
      <h2>Page not found !</h2>
      <Link to={"/"}>
        <button className="transaction-button">Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
