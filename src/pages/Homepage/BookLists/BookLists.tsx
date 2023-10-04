/* eslint-disable @typescript-eslint/no-explicit-any */
import "./BookLists.css";
import { useGetBookBySearchQuery } from "../../../redux/features/bookSlice/bookApi";
import { Link } from "react-router-dom";
import Loading from "../../../components/Progress/Loading";
import { useAppDispatch } from "../../../redux/hooks/hooks";
import { addToWishList } from "../../../redux/features/wishList/wishListSlice";
import { addToReadingList } from "../../../redux/features/readingSlice/readingSlice";

import { useState } from "react";
export default function BookLists() {
  const [searchTerm] = useState("");
  const { data, isLoading } = useGetBookBySearchQuery(searchTerm);

  const dispatch = useAppDispatch();

  if (isLoading) {
    return <Loading />;
  }
  const allBooks = data.data;
  console.log(allBooks);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {allBooks
          .map((allBook: any) => (
            <div
              key={allBook._id}
              className=" border border-gray-300 hover:shadow-lg hover:border-gray-600 w-full  mx-auto relative"
            >
              <div className="flex justify-center items-center">
                <div>
                  <div className="py-2">
                    <img
                      src={allBook.img}
                      alt=""
                      className="rounded-md w-full max-h-44"
                    />
                  </div>
                  <div className="mt-3">
                    <h2 className="text-center font-serif text-lg">
                      {allBook.title}
                    </h2>
                    <p className="text-center font-serif my-2">
                      by {allBook.author}
                    </p>
                    <h3 className="text-sm my-2 text-center">
                      Published On {allBook.publicationDate}
                    </h3>
                    <h3 className="text-sm my-1 text-center">
                      Genre {allBook.genre}
                    </h3>
                    <h3 className="text-md shadow-md p-2 rounded-lg mt-1 text-red-700 font-serif text-center">
                      <i className="fa-solid fa-bangladeshi-taka-sign mr-2"></i>
                      {allBook.price}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center mb-0 mt-6">
                <button className="px-2 mx-1 hover:bg-orange-600 mb-2 hover:text-white  text-red-700 border border-red-400 cursor-pointer rounded  ">
                  <Link to={`/book-details/${allBook._id}`}>
                    <i
                      title="view details"
                      className="fa-solid fa-expand p-2"
                    ></i>
                    View
                  </Link>
                </button>
                <button
                  onClick={() => dispatch(addToWishList(allBook))}
                  title="add to wishlist"
                  className="px-2 mx-2 hover:bg-orange-600 mb-2 hover:text-white  text-red-700 border border-red-400 cursor-pointer rounded "
                >
                  <i className="fa-solid fa-heart p-2"></i>
                  Wishlist
                </button>
                <button
                  onClick={() => dispatch(addToReadingList(allBook))}
                  title="currently reading"
                  className="mx-1 hover:bg-orange-600 mb-2 hover:text-white  text-red-700 border border-red-400 cursor-pointer rounded  "
                >
                  <i className="fa-solid fa-book-open-reader p-2"></i>
                </button>
              </div>
            </div>
          ))
          .reverse()}
      </div>
    </>
  );
}
