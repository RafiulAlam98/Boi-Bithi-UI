import { useAppSelector } from "../../redux/hooks/hooks";

export default function WishLists() {
  const { books } = useAppSelector((state) => state.wishList);
  console.log(books);
  return (
    <div>
      <dialog id="wishlistModal" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Author</th>
                  <th>Genre</th>
                </tr>
              </thead>
              <tbody className="my-2 p-2">
                {books.map((book, index) => (
                  <tr key={book._id} className=" hover">
                    <th>{index + 1}</th>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.genre}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </form>
      </dialog>
    </div>
  );
}
