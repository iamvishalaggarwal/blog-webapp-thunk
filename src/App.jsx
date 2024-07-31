import PostsList from "./features/posts/PostList";
import AddPostForm from "./features/posts/AddPostForm";
import SinglePostPage from "./features/posts/SinglePostPage";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import EditPost from "./features/posts/EditPost";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsList />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit-post/:postId" element={<EditPost />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
