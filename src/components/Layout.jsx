import { Outlet } from "react-router-dom";
import './Paginator.css'
export const Layout = () => {
  return (
    <div className="container">
      <main className="main p-3">
        <Outlet />
      </main>
    </div>
  );
};
