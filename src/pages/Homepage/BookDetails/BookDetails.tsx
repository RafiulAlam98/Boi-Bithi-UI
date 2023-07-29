/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteSingleBookMutation,
  useGetSingleBookQuery,
} from "../../../redux/features/bookSlice/bookApi";
import Loading from "../../../components/Progress/Loading";
import "./BookDetails.css";
import { toast } from "react-hot-toast";

export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: singleBook, isLoading } = useGetSingleBookQuery(id);
  const [deleteSingleBook, options] = useDeleteSingleBookMutation();

  const handleDelete = () => {
    if (options.isLoading) {
      return <Loading />;
    }
    deleteSingleBook(id).then((res: any) => {
      if (res.data.statusCode === 200) {
        navigate("/");
        toast(res.data.message);
      }
    });
  };

  if (isLoading) {
    return <Loading />;
  }

  const { title, author, publicationDate, genre } = singleBook.data;

  return (
    <div>
      <h1 className="text-2xl text-center my-7 text-orange-600 ">
        Book Details For {title}
      </h1>
      <div className="grid gap-4 grid-cols-1">
        <div className="card w-1/2  mx-auto">
          <div className="card-body ">
            <h2 className="card-title">{title}</h2>
            <p>{author}</p>
            <h3>{publicationDate}</h3>
            <h3>{genre}</h3>
          </div>

          <button
            className="bg-[#059862] w-1/2 cursor-pointer rounded mx-auto mb-2 hover:bg-[#c91515] text-white p-1"
            onClick={() => (window as any).deleteBook.showModal()}
          >
            Delete
          </button>
          <dialog id="deleteBook" className="modal">
            <form method="dialog" className="modal-box">
              <h3 className="font-bold text-lg text-orange-500">Hello!</h3>
              <p className="py-4 text-[#c91515]">
                Are You Sure You Want To Delete This Book ?
              </p>
              <div className="modal-action">
                <button
                  onClick={() => handleDelete()}
                  className="bg-[#c91515] w-1/3 cursor-pointer rounded mx-auto mb-2  text-white p-1"
                >
                  Yes
                </button>
                <button className="bg-[#059862] w-1/3 cursor-pointer rounded mx-auto mb-2 text-white p-1">
                  No
                </button>
              </div>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
}
