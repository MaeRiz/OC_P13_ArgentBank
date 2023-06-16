import { useState } from "react";

const Transaction = ({ trans }) => {
  const [toggleOpen, setToggleOpen] = useState(false);
  const [toggleEditCat, setToggleEditCat] = useState(false);
  const [category, setCategory] = useState(trans.category);
  const [toggleEditNotes, setToggleEditNotes] = useState(false);
  const [notes, setNotes] = useState(trans.notes);

  return (
    <section className={toggleOpen ? "transaction open" : "transaction"}>
      <div
        className="transaction-header "
        onClick={() => {
          setToggleOpen(!toggleOpen);
        }}
      >
        <i className="fa fa-solid fa-angle-down"></i>
        <p className="date">{trans.date}</p>
        <p className="description">{trans.description}</p>
        <p className="amount">${trans.amount}</p>
        <p className="balance">${trans.balance}</p>
      </div>
      {toggleOpen ? (
        <div className="transaction-body">
          <p>Transaction Type: {trans.type}</p>
          {!toggleEditCat ? (
            <p>
              Category: {category}{" "}
              <i
                className="fa-solid fa-pen"
                style={{ color: "#00000062" }}
                onClick={() => setToggleEditCat(!toggleEditCat)}
              ></i>
            </p>
          ) : (
            <p>
              Category:{" "}
              <input
                type="text"
                value={category}
                id="category"
                onChange={(e) => setCategory(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setToggleEditCat(!toggleEditCat);
                  }
                }}
              />{" "}
              <i
                className="fa-solid fa-check fa-lg"
                style={{ color: "#4ecc2fd5" }}
                onClick={() => setToggleEditCat(!toggleEditCat)}
              ></i>
            </p>
          )}

          {!toggleEditNotes ? (
            <p>
              Notes: {notes}{" "}
              <i
                className="fa-solid fa-pen"
                style={{ color: "#00000062" }}
                onClick={() => setToggleEditNotes(!toggleEditNotes)}
              ></i>
            </p>
          ) : (
            <p>
              Notes:{" "}
              <input
                type="text"
                value={notes}
                id="notes"
                onChange={(e) => setNotes(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setToggleEditNotes(!toggleEditNotes);
                  }
                }}
              />{" "}
              <i
                className="fa-solid fa-check fa-lg"
                style={{ color: "#4ecc2fd5" }}
                onClick={() => setToggleEditNotes(!toggleEditNotes)}
              ></i>
            </p>
          )}
        </div>
      ) : null}
    </section>
  );
};

export default Transaction;
