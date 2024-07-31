import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import { fetchUsers } from "./features/users/usersSlice.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { fetchPosts } from "./features/posts/postsSlice.js";

// whenever we needs to call API, when the application loads we need to call it here
store.dispatch(fetchUsers());
store.dispatch(fetchPosts());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
