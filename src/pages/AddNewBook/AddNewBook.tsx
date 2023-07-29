/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { useAddNewBookMutation } from "../../redux/features/bookSlice/bookApi";
import { useForm } from "react-hook-form";
import Loading from "../../components/Progress/Loading";
import { toast } from "react-hot-toast";

export default function AddNewBook() {
  const [addNewBook, options] = useAddNewBookMutation();
  const navigate = useNavigate();
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
    addNewBook(data).then((res: any) => {
      console.log(res);
      if (res.data.statusCode === 200) {
        reset();
        navigate("/");
        toast(res.data.message);
      }
    });
  };
  return (
    <div className="form-container">
      <h1 className="text-4xl text-center my-7 text-orange-600 ">
        Add New Book To The List
      </h1>

      <div className="text-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="title"
            className="mx-auto focus:border-orange-600 outline-none w-1/2 block my-2 border rounded p-1 border-teal-500"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <span className="mx-2 text-sm text-center text-red-600">
              title is required
            </span>
          )}

          <input
            placeholder="author"
            className="mx-auto focus:border-orange-600 outline-none  w-1/2 block my-2 border rounded p-1 border-teal-500"
            {...register("author", { required: true })}
          />
          {errors.author && (
            <span className="mx-2 text-sm text-red-600">
              author is required
            </span>
          )}

          <input
            placeholder="genre"
            className="mx-auto focus:border-orange-600 outline-none  w-1/2 block my-2 border rounded p-1 border-teal-500"
            {...register("genre", { required: true })}
          />
          {errors.genre && (
            <span className="mx-2 text-sm text-red-600">genre is required</span>
          )}
          <input
            placeholder="publicationDate"
            className="mx-auto focus:border-orange-600 outline-none  w-1/2 block my-2 border rounded p-1 border-teal-500"
            {...register("publicationDate", { required: true })}
          />
          {errors.publicationDate && (
            <span className="mx-2 text-sm text-red-600">
              publication Date is required
            </span>
          )}

          <input
            className="bg-[#059862] w-1/2 cursor-pointer rounded hover:bg-[#4CAF50] text-white p-1"
            type="submit"
          />
        </form>
      </div>
      <div></div>
    </div>
  );
}
