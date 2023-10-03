/* eslint-disable @typescript-eslint/no-explicit-any */

import BackButton from '../../components/BackButton/BackButton';
import { Link } from 'react-router-dom';
import Loading from '../../components/Progress/Loading';
import { addToReadingList } from '../../redux/features/readingSlice/readingSlice';
import { addToWishList } from '../../redux/features/wishList/wishListSlice';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { useGetBookBySearchQuery } from '../../redux/features/bookSlice/bookApi';
import { useState } from 'react';

export default function AllBooks() {
  const [searchTerm] = useState('');
  const { data, isLoading } = useGetBookBySearchQuery(searchTerm);

  const dispatch = useAppDispatch();

  if (isLoading) {
    return <Loading />;
  }
  const allBooks = data.data;
  console.log(allBooks);
  return (
    <div className="max-w-[1200px] mx-auto">
      <BackButton />
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
        {allBooks.map((allBook: any) => (
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
                <div className="mt-5">
                  <h2 className="text-center font-serif py-4 ">
                    {allBook.title}
                  </h2>
                  <p className="text-center font-serif my-2">
                    {allBook.author}
                  </p>
                  <h3 className="text-sm">
                    Published On {allBook.publicationDate}
                  </h3>
                  <h3>Genre {allBook.genre}</h3>
                  <h3>Price{allBook.price}</h3>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mb-0">
              <button className="mx-1 hover:bg-orange-600 mb-2 hover:text-white  text-red-700 border border-red-400 cursor-pointer rounded  ">
                <Link to={`book-details/${allBook._id}`}>
                  <i
                    title="view details"
                    className="fa-solid fa-expand p-2"
                  ></i>
                </Link>
              </button>
              <button
                onClick={() => dispatch(addToWishList(allBook))}
                title="add to wishlist"
                className="mx-1 hover:bg-orange-600 mb-2 hover:text-white  text-red-700 border border-red-400 cursor-pointer rounded "
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
        ))}
        Ba
      </div>
    </div>
  );
}
