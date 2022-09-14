import { Link, NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => ({ color: isActive ? "red" : "pink" })}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={() => ({ color: "red" })} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink style={() => ({ color: "red" })} to="/blog">
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
