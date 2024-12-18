import { Link, Outlet } from "react-router";
import "./App.css";

export function Component() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ height: "100%", width: "10rem" }}>
        <ul>
          <Link to="/">Home</Link>
        </ul>
        <ul>
          <Link to="/remote">Remote 1</Link>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
