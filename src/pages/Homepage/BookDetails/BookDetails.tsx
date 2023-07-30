/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteSingleBookMutation,
  useEditBookMutation,
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
  const [editBook] = useEditBookMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: object) => {
    if (options.isLoading) {
      return <Loading />;
    }
    console.log(data);
    editBook({ id, data }).then((res: any) => {
      console.log(res);
      if (res.data.statusCode === 200) {
        reset();
        navigate("/");
        toast(res.data.message);
      }
    });
  };

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

  const { title, author, publicationDate, genre, review } = singleBook.data;

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
            <h3>{review}</h3>
          </div>

          <div className="flex justify-center items-center">
            <button
              className=" hover:bg-orange-600 mb-2 hover:text-white  text-red-700 border border-red-400 cursor-pointer rounded mx-auto "
              onClick={() => (window as any).deleteBook.showModal()}
            >
              <i title="delete" className="fa-solid fa-trash p-2"></i>
            </button>
            <button
              className=" hover:bg-orange-600 mb-2 hover:text-white  text-red-700 border border-red-400 cursor-pointer rounded mx-auto "
              onClick={() => (window as any).editBook.showModal()}
            >
              <i title="edit" className="fa-regular fa-pen-to-square p-2"></i>
            </button>
          </div>
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
        <dialog id="editBook" className="modal">
          <form
            onSubmit={handleSubmit(onSubmit)}
            method="dialog"
            className="modal-box"
          >
            <h3 className="font-bold text-lg text-orange-500">Hello!</h3>
            <p className="py-4 text-[#c91515]">Edit this book...</p>
            <input
              placeholder="title"
              className="mx-auto focus:border-orange-600 outline-none  w-1/2 block my-2 border rounded p-1 border-teal-500"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <span className=" block mx-auto text-sm text-red-600">
                title is required
              </span>
            )}

            <input
              className="bg-[#059862] w-1/3 block mx-auto cursor-pointer rounded hover:bg-[#4CAF50] text-white p-1 mt-1"
              type="Submit"
            />
          </form>
        </dialog>
      </div>
    </div>
  );
}
