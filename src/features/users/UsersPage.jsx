import { useSelector } from "react-redux";
import { selectUserById } from "../users/usersSlice";
import { selectPostsByUser } from "../posts/postsSlice";
import { Link, useParams } from "react-router-dom";

const UserPage = () => {
  const { userId } = useParams();
  const user = useSelector((state) => selectUserById(state, +userId));

  const postsForUser = useSelector((state) =>
    selectPostsByUser(state, +userId)
  );

  const postTitles = postsForUser.map((post) => (
    <li key={post.id} style={{ background: "pink", marginBottom: "10px" }}>
      <Link to={`/post/${post.id}`} style={{ color: "black" }}>
        {post.title}
      </Link>
    </li>
  ));

  if (!user) {
    return (
      <section>
        <h2>User not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <h2>{user?.name}</h2>

      <div style={{ padding: "5rem" }}>
        <ol>{postTitles}</ol>
      </div>
    </section>
  );
};

export default UserPage;
