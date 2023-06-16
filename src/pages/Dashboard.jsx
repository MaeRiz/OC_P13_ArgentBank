import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAccounts } from "../redux/slices/account.slice";
import Account from "../components/Account";
import { changeName } from "../redux/slices/auth.slice";

const Dashboard = () => {
  const { accounts } = useSelector((state) => state.accounts);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const [toggleEdit, setToggleEdit] = useState(false);
  const [formName, setFormName] = useState();

  useEffect(() => {
    dispatch(getUserAccounts());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setFormName({
      firstname: user.firstname,
      lastname: user.lastname,
    });
  }, [user]);

  function updateName(booledit) {
    setToggleEdit(false);
    if (booledit) {
      dispatch(changeName(formName));
    } else {
      setFormName({
        firstname: user.firstname,
        lastname: user.lastname,
      });
    }
  }

  function handdleChange(e) {
    setFormName((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <main className="main bg-dark">
      {!toggleEdit ? (
        <div className="header">
          <h1>
            Welcome back
            <br /> {user.firstname} {user.lastname} !
          </h1>
          <button className="edit-button" onClick={() => setToggleEdit(true)}>
            Edit Name
          </button>
        </div>
      ) : (
        <div className="header">
          <h1>
            Welcome back
            <br />{" "}
            <input
              className="edit-field"
              type="text"
              id="firstname"
              name="firstname"
              defaultValue={formName.firstname}
              onChange={(e) => handdleChange(e)}
            />
            <input
              className="edit-field"
              type="text"
              id="lastname"
              name="lastname"
              defaultValue={formName.lastname}
              onChange={(e) => handdleChange(e)}
            />
          </h1>
          <button className="edit-button" onClick={() => updateName(true)}>
            Save
          </button>
          <button className="edit-button" onClick={() => updateName(false)}>
            Cancel
          </button>
        </div>
      )}

      <h2 className="sr-only">Accounts</h2>

      {accounts
        ? accounts.accounts.map((acc) => <Account key={acc.id} acc={acc} />)
        : null}
    </main>
  );
};

export default Dashboard;
