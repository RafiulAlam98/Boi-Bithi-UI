/* eslint-disable @typescript-eslint/no-explicit-any */
import "./BookLists.css";
import { useGetAllBooksQuery } from "../../../redux/features/bookSlice/bookApi";
import { Link } from "react-router-dom";
import Loading from "../../../components/Progress/Loading";
import { useAppDispatch } from "../../../redux/hooks/hooks";
import { addToWishList } from "../../../redux/features/wishList/wishListSlice";

export default function BookLists() {
  const { data, isLoading } = useGetAllBooksQuery(undefined);
  const dispatch = useAppDispatch();

  if (isLoading) {
    return <Loading />;
  }
  const allBooks = data.data;
  console.log(allBooks);

  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {allBooks.map((allBook: any) => (
        <div
          key={allBook._id}
          className="card sm:w-1/3 md:w-2/3 lg:w-full  mx-auto"
        >
          <div className="card-body">
            <h2 className="card-title">{allBook.title}</h2>
            <p>{allBook.author}</p>
            <h3>{allBook.publicationDate}</h3>
            <h3>{allBook.genre}</h3>
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-[#059862] w-1/2 cursor-pointer rounded mx-auto mb-2 hover:bg-[#4CAF50] text-white p-1">
              <Link to={`book-details/${allBook._id}`}>View Details</Link>
            </button>
            <button
              onClick={() => dispatch(addToWishList(allBook))}
              title="add to wishlist"
              className=" hover:bg-orange-600 mb-2 hover:text-white  text-red-700 border border-red-400 cursor-pointer rounded mx-auto "
            >
              <i className="fa-solid fa-heart p-2"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
