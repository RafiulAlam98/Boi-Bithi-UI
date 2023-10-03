/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import "./BookDetails.css";

import {
  useDeleteSingleBookMutation,
  useGetSingleBookQuery,
} from "../../../redux/features/bookSlice/bookApi";
import { Link, useNavigate, useParams } from "react-router-dom";

import Loading from "../../../components/Progress/Loading";
import contact from "../../../assets/review.avif";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useAppSelector } from "../../../redux/hooks/hooks";
import { useAddReviewMutation } from "../../../redux/features/reviewSlice/reviewApi";

export default function BookDetails() {
  const [addReview] = useAddReviewMutation();
  const { user } = useAppSelector((state) => state.user);
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: singleBook, isLoading } = useGetSingleBookQuery(id);
  const [deleteSingleBook, options] = useDeleteSingleBookMutation();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data: object) => {
    console.log(data);
    addReview({ id, data }).then((res: any) => {
      if (res.data.statusCode === 200) {
        reset();
        toast(res.data.message);
      } else {
        toast.error(res.error.data.message);
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

  const {
    title,
    author,
    publicationDate,
    genre,
    reviews,
    img,
    price,
    description,
  } = singleBook.data;

  return (
    <section className="max-w-[1200px] mx-auto">
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
            <p className=" font-serif text-sm mt-2 decoration-black pb-5 px-4">
              {description}
            </p>
          </div>

          <div className="flex justify-center items-center mt-4">
            <button
              className="px-2 hover:bg-orange-600 mb-2 hover:text-white  text-red-700 border border-red-400 cursor-pointer rounded mx-auto "
              onClick={() => (window as any).deleteBook.showModal()}
            >
              <i title="delete" className="fa-solid fa-trash p-2"></i>
              Delete
            </button>
            <Link
              to={`/edit/${id}`}
              className="px-2 hover:bg-orange-600 mb-2 hover:text-white  text-red-700 border border-red-400 cursor-pointer rounded mx-auto "
              onClick={() => (window as any).editBook.showModal()}
            >
              <i title="edit" className="fa-regular fa-pen-to-square p-2"></i>
              Edit
            </Link>
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
      </div>
      <hr className="my-10" />

      <div id="" className="  px-4 mx-4 min-h-max mt-10">
        <h4 className="font-serif text-md hover:cursor-auto font-semibold mt-5 mb-6 ">
          <span className="bg-[#E5330B] text-white rounded px-4 py-2">
            Reviews
          </span>
        </h4>
        {reviews.length > 0 ? (
          <h4 className=" font-serif text-sm mt-2 decoration-black pb-5">
            <div className="grid sm:grid-cols-2  lg:grid-cols-4 gap-4">
              {reviews.map((rvw: any) => (
                <div className="card shadow-xl ">
                  <div className="px-3 py-6">
                    <p className="text-xl text-orange-600">{rvw.review}</p>
                    <div className="flex items-center justify-between">
                      <div className="mt-5">
                        <h3 className="text-lg">by {rvw.name}</h3>
                      </div>
                      <div className="mt-5">
                        <h3 className="text-lg"> Rating {rvw.rating}</h3>
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
                {...register("name")}
                type="text"
                name="name"
                placeholder="Enter Your Full Name"
                className="rounded  p-3 mx-auto 
            w-full border bg-gray-200"
              />
              <input
                {...register("email")}
                defaultValue={user.email!}
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="rounded  p-3 mx-auto 
                w-full border bg-gray-200"
              />

              <input
                {...register("rating")}
                type="number"
                name="rating"
                placeholder="Enter Your rating"
                className="rounded  p-3 mx-auto 
                w-full border bg-gray-200"
              />

              <textarea
                rows={4}
                cols={50}
                required
                {...register("review")}
                name="review"
                placeholder="Enter Your review"
                className="rounded  p-5 mx-auto 
                w-full border bg-gray-200"
              />

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
