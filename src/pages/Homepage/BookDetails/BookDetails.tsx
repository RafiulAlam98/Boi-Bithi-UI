/* eslint-disable @typescript-eslint/no-explicit-any */

import './BookDetails.css';

import {
  useDeleteSingleBookMutation,
  useEditBookMutation,
  useGetSingleBookQuery,
} from "../../../redux/features/bookSlice/bookApi";
import { useNavigate, useParams } from 'react-router-dom';

import BackButton from '../../../components/BackButton/BackButton';
import Loading from "../../../components/Progress/Loading";
import contact from '../../../assets/review.avif';
import { toast } from "react-hot-toast";
import { useForm } from 'react-hook-form';

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

  const { title, author, publicationDate, genre, review, img, price } =
    singleBook.data;

  return (
    <section className="max-w-[1200px] mx-auto">
      <BackButton />
      <div className=" grid grid-cols-2">
        <div>
          <figure className="mx-auto">
            <img src={img} alt="" className="w-2/3 max-h-96 mt-6"></img>
          </figure>
        </div>
        <div className="card-body">
          <h2 className="text-[#3749BB] text-2xl font-serif">{title}</h2>
          <h4 className="text-white-700 font-serif">by {author}</h4>
          <h4 className="text-white-700 font-serif">
            Published On {publicationDate}
          </h4>
          <h4 className="text-white-700 font-serif">{genre}</h4>
          <h4 className="badge shadow-md p-3 text-white-700 font-serif">
            Price: $ {price}
          </h4>

          <div id="description" className="shadow-xl min-h-max">
            <h4 className="font-serif text-md hover:cursor-auto font-semibold mt-5 mb-6 ">
              <span className="bg-[#E5330B] text-white rounded px-4 py-2">
                Description
              </span>
            </h4>
            <h4 className=" font-serif text-sm mt-2 decoration-black pb-5"></h4>
          </div>

          <div className="flex justify-center items-center mt-4">
            <button
              className="px-2 hover:bg-orange-600 mb-2 hover:text-white  text-red-700 border border-red-400 cursor-pointer rounded mx-auto "
              onClick={() => (window as any).deleteBook.showModal()}
            >
              <i title="delete" className="fa-solid fa-trash p-2"></i>
              Delete
            </button>
            <button
              className="px-2 hover:bg-orange-600 mb-2 hover:text-white  text-red-700 border border-red-400 cursor-pointer rounded mx-auto "
              onClick={() => (window as any).editBook.showModal()}
            >
              <i title="edit" className="fa-regular fa-pen-to-square p-2"></i>
              Edit
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
                {...register('title', { required: true })}
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
      <hr className="my-10" />

      <div id="" className="  px-4 mx-4 min-h-max mt-10">
        <h4 className="font-serif text-md hover:cursor-auto font-semibold mt-5 mb-6 ">
          <span className="bg-[#E5330B] text-white rounded px-4 py-2">
            Reviews
          </span>
        </h4>
        {review ? (
          <h4 className=" font-serif text-sm mt-2 decoration-black pb-5">
            <div className="grid sm:grid-cols-2  lg:grid-cols-4 gap-4">
              {review.map((rvw: any) => (
                <div className="card shadow-xl ">
                  <div className="px-3 py-6">
                    <p className="text-xl text-orange-600">{rvw.text}</p>
                    <div className="flex items-center justify-between">
                      {rvw.img && (
                        <div className="avatar mr-3">
                          <div className="w-16 rounded-full">
                            <img src={rvw.img} alt="" />
                          </div>
                        </div>
                      )}
                      <div className="mt-5">
                        <h3 className="text-lg">{rvw.name}</h3>
                        {rvw?.location && (
                          <h3 className="text-sm my-3"> {rvw.location}</h3>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </h4>
        ) : (
          <h4 className="shadow-xl p-4 rounded font-serif text-2xl text-orange-600">
            No Reviews Added For This Product. Please Add Some Review.
          </h4>
        )}
      </div>

      <section className=" mt-8">
        <h2 className="text-3xl text-orange-600 my-10 text-center font-serif font-semibold ">
          <span className="border-b-2 border-orange-600 ">
            Lets Make A Review!
          </span>
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="mx-auto my-auto">
            <img
              src={contact}
              className="max-w-lg rounded-lg  lg:ml:10"
              alt="review"
            />
          </div>
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 sm:w-2/3 mx-auto gap-4 place-content-center lg:mt-3"
            >
              <input
                required
                {...register('name')}
                type="text"
                name="name"
                placeholder="Enter Your Full Name"
                className="rounded  p-3 mx-auto 
            w-full border bg-gray-200"
              />
              <input
                required
                {...register('email')}
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="rounded  p-3 mx-auto 
                w-full border bg-gray-200"
              />
              <input
                required
                {...register('location')}
                type="text"
                name="location"
                placeholder="Enter Your location"
                className="rounded  p-3 mx-auto 
                w-full border bg-gray-200"
              />
              <input
                {...register('image', { required: 'image is required' })}
                type="file"
                className="rounded  p-3 mx-auto 
                w-full border bg-gray-200"
              />

              {/* <textarea
                rows="6"
                cols="100"
                required
                {...register("text")}
                type="text"
                name="text"
                placeholder="Enter Your Message"
                className="rounded  p-3 mx-auto 
                w-full border bg-gray-200"
              /> */}

              <input
                type="submit"
                placeholder="Contact"
                className="rounded font-semibold text-white w-full mx-auto px-1 bg-orange-500 p-1  hover:bg-orange-600  m-3 cursor-pointer"
              />
            </form>
          </div>
        </div>
      </section>
    </section>
  );
}
