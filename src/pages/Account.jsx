import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Transaction from "../components/Transaction";

const Account = () => {
  let { idAcc } = useParams();
  const account = useSelector((state) =>
    state.accounts.accounts.accounts.find(
      (item) => Number(item.id) === Number(idAcc)
    )
  );

  return (
    <main className="main bg-dark">
      <div className="header">
        <h2>Argent Bank {account.name}</h2>
        <h1>$ {account.balance}</h1>
        <p>Available Balance</p>
      </div>
      <h2 className="sr-only">Transactions</h2>
      <div className="transactions-box">
        <div className="legend">
          <p>Date</p>
          <p>Description</p>
          <p>Amount</p>
          <p>Balance</p>
        </div>
        {account.transactions.map((item) => (
          <Transaction key={item.id} trans={item} />
        ))}
      </div>
    </main>
  );
};

export default Account;
