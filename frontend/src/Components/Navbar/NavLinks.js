import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="navLinks">
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? { color: "white" } : undefined)}
      >
        Home
      </NavLink>

      <NavLink
        to="/shop"
        style={({ isActive }) => (isActive ? { color: "white" } : undefined)}
      >
        Shop
      </NavLink>
      <NavLink
        to="/details/:id"
        style={({ isActive }) => (isActive ? { color: "white" } : undefined)}
      >
        details
      </NavLink>
      <NavLink
        to="/signup"
        style={({ isActive }) => (isActive ? { color: "white" } : undefined)}
      >
        Signup
      </NavLink>
    </div>
  );
};
export default NavLinks;
