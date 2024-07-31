import { useSelector } from "react-redux";
import { selectAllUsers } from "./usersSlice";

const UsersList = () => {
  const allUsers = useSelector(selectAllUsers);
  console.log(allUsers);
  const renderUsers = allUsers.map((user) => (
    <h3 key={user.id}>{user.name}</h3>
  ));
  return (
    <section>
      <h2>Users: </h2>
      {renderUsers}
    </section>
  );
};

export default UsersList;
