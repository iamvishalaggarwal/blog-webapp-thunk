import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";
import { createPost } from "./postsSlice";
// import { nanoid } from "@reduxjs/toolkit";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState(1);
  const [addRequestStatus, setAddRequestStatus] = useState("idle");
  const allUsers = useSelector(selectAllUsers);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    try {
      e.preventDefault();
      // dispatch(
      //   postAdded({
      //     id: nanoid(),
      //     title,
      //     content,
      //   })
      // );

      /* now we need to do this at slice part, simplified version */
      // dispatch(postAdded(title, content, userId));

      // now we create the post using API
      setAddRequestStatus("pending");
      // we are unwrap() function to return the promise in RTK for return the action, and error if any.
      dispatch(createPost({ title, body: content, userId })).unwrap();
      setTitle("");
      setContent("");
    } catch (error) {
      console.log("Error while saving post = ", error);
    } finally {
      setAddRequestStatus("idle");
    }
  };

  return (
    <section>
      <form onSubmit={submitHandler}>
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
        ></textarea>

        <label htmlFor="users">Author: </label>
        <select
          name="users"
          id="user"
          onChange={(e) => setUserId(e.target.value)}
        >
          {allUsers.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>

        <button type="submit" disabled={addRequestStatus !== "idle"}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
