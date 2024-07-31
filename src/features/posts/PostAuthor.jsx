import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const PostAuthor = (props) => {
  const users = useSelector(selectAllUsers);
  // eslint-disable-next-line react/prop-types
  const author = users.find((user) => user.id === props.userId);

  return <span>by {author ? author.name : "Anonymous"}</span>;
};

export default PostAuthor;
