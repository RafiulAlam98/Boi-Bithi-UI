import { checkStatus } from "../../redux/features/readingSlice/readingSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";

export default function Reading() {
  const { readingBooks } = useAppSelector((state) => state.readingList);
  const dispatch = useAppDispatch();
  const { completeStatus } = useAppSelector((state) => state.readingList);
  return (
    <div>
      <dialog id="readingList" className="modal">
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
                {readingBooks.map((book) => (
                  <tr key={book._id} className=" hover ">
                    <input
                      onClick={() => dispatch(checkStatus())}
                      type="checkbox"
                      className="checkbox mt-3"
                    />
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.genre}</td>
                    {completeStatus === true && (
                      <td className="text-green-700 font-bold">Completed</td>
                    )}
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
