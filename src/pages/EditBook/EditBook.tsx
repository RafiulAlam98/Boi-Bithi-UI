/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import {
  useEditBookMutation,
  useGetSingleBookQuery,
} from "../../redux/features/bookSlice/bookApi";
import contact from "../../assets/add-books.png";
import Loading from "../../components/Progress/Loading";

export default function EditBook() {
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const [editBook] = useEditBookMutation();

  const { data: book, isLoading } = useGetSingleBookQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 9000,
  });
  if (isLoading) {
    return <Loading />;
  }

  const { title, author, publicationDate, genre, img, price, description } =
    book.data;

  const onSubmit = (data: any) => {
    editBook({ id, data }).then((res: any) => {
      if (res.data.statusCode === 200) {
        reset();
        navigate("/");
        toast(res.data.message);
      } else {
        toast.error(res.error.data.message);
      }
    });
  };
  return (
    <div className="grid bg-slate-100 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 min-h-screen">
      <div className="mx-auto my-auto">
        <img
          src={contact}
          className="max-w-lg rounded-lg  lg:ml:10 mt-5"
          alt="review"
        />
      </div>
      <div className="lg:mt-24 pb-16">
        <h1 className="text-3xl text-center my-7 text-orange-600 ">
          <span className="border-b-2 border-b-orange-600">Edit Book</span>
        </h1>

        <div className="text-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="title"
              defaultValue={title}
              className="rounded my-2 focus:border-orange-600 outline-none p-3 mx-auto w-2/3 border bg-gray-200"
              {...register("title")}
            />

            <input
              placeholder="author"
              defaultValue={author}
              className="rounded my-2 focus:border-orange-600 outline-none p-3 mx-auto 
              w-2/3 border bg-gray-200"
              {...register("author")}
            />

            <input
              placeholder="genre"
              defaultValue={genre}
              className="rounded my-2 focus:border-orange-600 outline-none p-3 mx-auto 
              w-2/3 border bg-gray-200"
              {...register("genre")}
            />

            <input
              placeholder="publicationDate"
              defaultValue={publicationDate}
              className="rounded my-2 focus:border-orange-600 outline-none p-3 mx-auto 
              w-2/3 border bg-gray-200"
              {...register("publicationDate")}
            />

            <input
              placeholder="example: link"
              defaultValue={img}
              className="rounded my-2 focus:border-orange-600 outline-none p-3 mx-auto 
              w-2/3 border bg-gray-200"
              {...register("img")}
            />

            <input
              placeholder="price"
              defaultValue={price}
              className="rounded my-2 focus:border-orange-600 outline-none p-3 mx-auto w-2/3 border bg-gray-200"
              {...register("price")}
            />

            <textarea
              defaultValue={description}
              rows={4}
              cols={50}
              placeholder="Enter description here"
              className="rounded my-2 focus:border-orange-600 outline-none p-3 mx-auto w-2/3 border bg-gray-200"
              {...register("description")}
            />

            <input
              className="bg-[#059862] w-1/2 cursor-pointer rounded hover:bg-[#4CAF50] text-white p-1"
              type="submit"
            />
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
}
