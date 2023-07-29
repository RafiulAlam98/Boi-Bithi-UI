/* eslint-disable @typescript-eslint/no-explicit-any */
import "./BookLists.css";
import { useGetAllBooksQuery } from "../../../redux/features/bookSlice/bookApi";
import { Link } from "react-router-dom";
import Loading from "../../../components/Progress/Loading";

export default function BookLists() {
  const { data: books, isLoading } = useGetAllBooksQuery(undefined);
  if (isLoading) {
    return <Loading />;
  }
  const allBooks = books.data;
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
            <button>
              <Link to={`book-details/${allBook._id}`}>View Details</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
