import { Link } from "react-router-dom";

const Account = ({ acc }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">
          Argent Bank {acc.name} (x{acc.transactions.length})
        </h3>
        <p className="account-amount">${acc.balance}</p>
        <p className="account-amount-description">Available Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <Link to={`/account/${acc.id}`}>
          <button className="transaction-button">View transactions</button>
        </Link>
      </div>
    </section>
  );
};

export default Account;
