import { useDispatch, useSelector } from "react-redux";
import { deletePost, selectPostById } from "./postsSlice";

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const SinglePostPage = () => {
  const { postId } = useParams(); // getting post id using param
  const [requestStatus, setRequestStatus] = useState("idle");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // when we need to pass parameter in selector, we need to pass it like this
  const post = useSelector((state) => selectPostById(state, Number(postId)));

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  const onDeletePostClicked = async () => {
    try {
      setRequestStatus("pending");
      await dispatch(deletePost({ id: post.id })).unwrap();
      navigate("/");
    } catch (err) {
      console.error("Failed to delete the post", err);
    } finally {
      setRequestStatus("idle");
    }
  };

  return (
    <section style={{ padding: "2rem", border: "0" }}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />, &nbsp;
        <TimeAgo timestamp={post.date} />
      </p>

      <ReactionButtons post={post} />
      <br />
      <Link
        to={`/post/edit-post/${post.id}`}
        style={{
          color: "blue",
          fontWeight: "bold",
        }}
      >
        <button
          style={{ background: "blue", marginTop: "1rem", color: "white" }}
          className="edit-btn"
        >
          Edit Post
        </button>
      </Link>
      <button
        style={{ background: "red", marginLeft: "1rem", color: "white" }}
        className="delete-btn"
        onClick={onDeletePostClicked}
        disabled={requestStatus !== "idle"}
      >
        Delete Post
      </button>
    </section>
  );
};

export default SinglePostPage;
