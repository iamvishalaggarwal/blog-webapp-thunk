import { useSelector } from "react-redux";
import { selectAllUsers } from "./usersSlice";
import { Link } from "react-router-dom";

const UsersList = () => {
  const allUsers = useSelector(selectAllUsers);
  const renderUsers = allUsers.map((user) => (
    <li
      key={user.id}
      style={{
        marginBottom: "10px",
      }}
    >
      <Link
        style={{
          color: "black",
        }}
        to={`/user/${user.id}`}
      >
        {user.name}
      </Link>
    </li>
  ));
  return (
    <section>
      <h2>Users: </h2>
      <div style={{ padding: "5rem" }}>{renderUsers}</div>
    </section>
  );
};

export default UsersList;
