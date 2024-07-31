import PostList from "./features/posts/PostList";
import "./App.css";
import AddPostForm from "./features/posts/AddPostForm";
// import UsersList from "./features/users/UsersList";
const App = () => {
  return (
    <div>
      {/* <UsersList /> */}
      <PostList />
      <AddPostForm />
    </div>
  );
};

export default App;
