import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";
// import { nanoid } from "@reduxjs/toolkit";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("0");

  const allUsers = useSelector(selectAllUsers);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(
    //   postAdded({
    //     id: nanoid(),
    //     title,
    //     content,
    //   })
    // );

    /* now we need to do this at slice part, simplified version */
    dispatch(postAdded(title, content, userId));
    setTitle("");
    setContent("");
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

        <button type="submit">Save Post</button>
      </form>
    </section>
  );
};

export default AddPostForm;
