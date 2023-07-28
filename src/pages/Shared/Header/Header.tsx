import { Link } from "react-router-dom";

const allRoutes = [
  {
    id: 1,
    name: "All Books",
    path: "all-books",
  },
  {
    id: 2,
    name: "Sign In",
    path: "sign-in",
  },
  {
    id: 3,
    name: "Sign Up",
    path: "sign-up",
  },
];

export default function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          {allRoutes.map((route) => (
            <ul
              key={route.id}
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={route.path}>{route.name}</Link>
              </li>
            </ul>
          ))}
        </div>
        <a className="btn btn-ghost normal-case text-xl">Book Store</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        {allRoutes.map((route) => (
          <ul key={route.id} className="menu menu-horizontal px-1">
            <li>
              <Link to={route.path}>{route.name}</Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
