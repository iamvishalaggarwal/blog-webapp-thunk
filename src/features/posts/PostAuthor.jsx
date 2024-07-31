/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const PostAuthor = (props) => {
  const users = useSelector(selectAllUsers);
  const author = users.find(
    (user) => parseInt(user.id) === parseInt(props.userId)
  );

  return <span>by {author ? author.name : "Anonymous"}</span>;
};

export default PostAuthor;
