import PostList from "./features/posts/PostList";
import "./App.css";
import AddPostForm from "./features/posts/AddPostForm";
// import UsersList from "./features/users/UsersList";
const App = () => {
  return (
    <div>
      {/* <UsersList /> */}
      <AddPostForm />
      <PostList />
    </div>
  );
};

export default App;
