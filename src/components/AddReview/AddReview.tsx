/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useAddReviewMutation } from "../../redux/features/reviewSlice/reviewApi";
import Loading from "../Progress/Loading";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function AddReview({ id }: any) {
  const [addReview, options] = useAddReviewMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: object) => {
    console.log(data);
    if (options.isLoading) {
      return <Loading />;
    }

    addReview({ data }).then((res: any) => {
      console.log(res);
      if (res.data.statusCode === 200) {
        reset();
        navigate("/");
        toast(res.data.message);
      }
    });
  };
  return (
    <>
      <button
        className=" hover:bg-orange-600 mb-2 hover:text-white  text-red-700 border border-red-400 cursor-pointer rounded mx-auto "
        onClick={() => (window as any).review.showModal()}
      >
        <i title="add review" className="fa-solid fa-circle-plus p-2"></i>
      </button>
      <dialog id="review" className="modal">
        <form
          onSubmit={handleSubmit(onSubmit)}
          method="dialog"
          className="modal-box"
        >
          <h3 className="font-bold text-lg text-orange-500">Hello!</h3>
          <p className="py-4 text-[#c91515]">Add A Review</p>
          <input
            defaultValue={id as any}
            disabled
            className="mx-auto focus:border-orange-600 outline-none  w-1/2 block my-2 border rounded p-1 border-teal-500"
            {...register("bookId", { required: true })}
          />
          <input
            placeholder="review"
            className="mx-auto focus:border-orange-600 outline-none  w-1/2 block my-2 border rounded p-1 border-teal-500"
            {...register("review", { required: true })}
          />
          {errors.review && (
            <span className=" block mx-auto text-sm text-red-600">
              review is required
            </span>
          )}

          <input
            className="bg-[#059862] w-1/3 block mx-auto cursor-pointer rounded hover:bg-[#4CAF50] text-white p-1 mt-1"
            type="Submit"
          />
        </form>
      </dialog>
    </>
  );
}
