/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectPostById, updatePost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const EditPost = () => {
  const { postId } = useParams();
  const selectPost = useSelector((state) => selectPostById(state, +postId));
  const [title, setTitle] = useState(selectPost ? selectPost.title : "");
  const [content, setContent] = useState(selectPost ? selectPost.body : "");
  const [userId, setUserId] = useState(selectPost ? selectPost.userId : "");
  const [requestStatus, setRequestStatus] = useState("idle");
  const allUsers = useSelector(selectAllUsers);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (!selectPost) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  const updateHandler = async (e) => {
    try {
      e.preventDefault();
      setRequestStatus("pending");
      await dispatch(
        updatePost({
          id: selectPost.id,
          userId,
          title,
          body: content,
          reactions: selectPost.reactions,
        })
      ).unwrap();
      setTitle("");
      setContent("");
      navigate(`/post/${postId}`);
    } catch (e) {
      console.error("Error in updating post = ", e);
    } finally {
      setRequestStatus("idle");
    }
  };

  return (
    <section style={{ display: "flex", justifyContent: "center" }}>
      <form
        onSubmit={updateHandler}
        style={{ width: "60%", padding: "4rem", border: 0 }}
      >
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="content">Content: </label>
        <textarea
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <label htmlFor="users">Author: </label>
        <select
          name="users"
          id="user"
          onChange={(e) => setUserId(e.target.value)}
          defaultValue={userId}
        >
          {allUsers.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>

        <button type="submit" disabled={requestStatus !== "idle"}>
          Update Post
        </button>
      </form>
    </section>
  );
};

export default EditPost;
