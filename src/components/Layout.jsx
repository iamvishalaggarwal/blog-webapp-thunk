import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="App"> 
        {/* it represents all the children under the respective route */}
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
