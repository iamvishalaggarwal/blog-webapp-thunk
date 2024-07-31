/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import ReactionButtons from "./ReactionButtons";
import TimeAgo from "./TimeAgo";

const PostsExcerpt = ({ post }) => {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 75)}...</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />, &nbsp;
        <TimeAgo timestamp={post.date} />
        <br />
        <Link
          to={`post/${post.id}`}
          style={{
            color: "blue",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          View Post
        </Link>
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostsExcerpt;
