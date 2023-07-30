/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import WishLists from "../../../components/WishLists/WishLists";
import { useAppSelector } from "../../../redux/hooks/hooks";
import Reading from "../../../components/Reading/Reading";

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
  {
    id: 4,
    name: "Add New Book",
    path: "add-book",
  },
];

export default function Header() {
  const { books } = useAppSelector((state) => state.wishList);
  const { readingBooks } = useAppSelector((state) => state.readingList);
  return (
    <div className="max-w-[1100px] mx-auto ">
      <div className="navbar bg-base-100">
        <div className="">
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
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Book Store
          </Link>
        </div>
        <div className="mx-auto hidden lg:flex">
          {allRoutes.map((route) => (
            <ul key={route.id} className="menu menu-horizontal px-1">
              <li>
                <Link to={route.path}>{route.name}</Link>
              </li>
            </ul>
          ))}
        </div>

        {/*------------ Wish List ---------*/}
        <button
          onClick={() => (window as any).wishlistModal.showModal()}
          title="wishlist"
          className=" mb-2  hover:text-white  text-red-700 border-none  cursor-pointer"
        >
          <i
            className="fa-solid fa-heart text-2xl border-none rounded p-4 badge
             text-red-600 bg-none"
          >
            <span className="text-sm text-teal-800 font-bold">
              {books.length}
            </span>
          </i>
        </button>
        <WishLists />
        {/* --------- */}

        {/*----------- Reading List  ------------*/}
        <button
          onClick={() => (window as any).readingList.showModal()}
          title="currently reading"
          className=" mb-2  hover:text-white  text-red-700 border-none  cursor-pointer"
        >
          <i
            className="fa-solid fa-book-open-reader text-2xl border-none rounded p-4 badge
            text-red-600 bg-none"
          >
            {" "}
            <span className="text-sm text-teal-800 font-bold">
              {readingBooks.length}
            </span>
          </i>
        </button>
        <Reading />
        {/* --------- */}
      </div>
    </div>
  );
}
