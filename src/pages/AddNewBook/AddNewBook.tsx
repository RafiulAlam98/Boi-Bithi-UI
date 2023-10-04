/* eslint-disable @typescript-eslint/no-explicit-any */

import contact from '../../assets/add-books.png';
import { toast } from 'react-hot-toast';
import { useAddNewBookMutation } from '../../redux/features/bookSlice/bookApi';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function AddNewBook() {
  const [addNewBook] = useAddNewBookMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
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
          <span className="border-b-2 border-b-orange-600">Add New Book</span>
        </h1>

        <div className="text-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="title"
              className="rounded my-2 focus:border-orange-600 outline-none p-3 mx-auto w-2/3 border bg-gray-200"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <span className="mx-2 text-sm text-center text-red-600">
                title is required
              </span>
            )}

            <input
              placeholder="author"
              className="rounded my-2 focus:border-orange-600 outline-none p-3 mx-auto 
              w-2/3 border bg-gray-200"
              {...register("author", { required: true })}
            />
            {errors.author && (
              <span className="mx-2 text-sm text-red-600">
                author is required
              </span>
            )}

            <input
              placeholder="genre"
              className="rounded my-2 focus:border-orange-600 outline-none p-3 mx-auto 
              w-2/3 border bg-gray-200"
              {...register("genre", { required: true })}
            />
            {errors.genre && (
              <span className="mx-2 text-sm text-red-600">
                genre is required
              </span>
            )}
            <input
              placeholder="publicationDate"
              className="rounded my-2 focus:border-orange-600 outline-none p-3 mx-auto 
              w-2/3 border bg-gray-200"
              type="date"
              {...register("publicationDate", { required: true })}
            />
            {errors.publicationDate && (
              <span className="mx-2 text-sm text-red-600">
                publication Date is required
              </span>
            )}

            <input
              placeholder="example: link"
              className="rounded my-2 focus:border-orange-600 outline-none p-3 mx-auto 
              w-2/3 border bg-gray-200"
              {...register("img")}
            />

            <input
              placeholder="price"
              className="rounded my-2 focus:border-orange-600 outline-none p-3 mx-auto w-2/3 border bg-gray-200"
              {...register("price")}
            />

            <textarea
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
