import { Link, Outlet } from "react-router";
import "./App.css";

export function Component() {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <div
        style={{
          display: "flex",
          height: "100%",
          flexDirection: "column",
        }}
      >
        <ul>
          <Link to="/">Home</Link>
        </ul>
        <ul>
          <Link to="/remote">Remote App</Link>
        </ul>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Outlet />
      </div>
    </div>
  );
}
