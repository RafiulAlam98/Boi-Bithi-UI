/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import "./SignUp.css";
import contact from "../../assets/signup-in.png";
import { useUserSignUpMutation } from "../../redux/features/userSlice/userApi";
import Loading from "../../components/Progress/Loading";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import BackButton from "../../components/BackButton/BackButton";

export default function SignUp() {
  const [userSignUp, options] = useUserSignUpMutation();
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
    userSignUp(data).then((res: any) => {
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
        <BackButton />
        <img
          src={contact}
          className="max-w-lg rounded-lg  lg:ml:10"
          alt="review"
        />
      </div>
      <div className="">
        <h1 className="text-4xl text-center my-7 text-orange-600 ">Sign Up</h1>

        <div className="text-center mb-16 ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="place-content-center"
          >
            <input
              placeholder="email"
              className="rounded my-2 focus:border-orange-600 outline-none p-3 mx-auto 
              w-2/3 border bg-gray-200"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="mx-2 text-sm text-center text-red-600">
                email is required
              </span>
            )}

            <input
              placeholder="password"
              className="rounded my-2 focus:border-orange-600 outline-none p-3 mx-auto 
              w-2/3 border bg-gray-200"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="mx-2 text-sm text-red-600">
                password is required
              </span>
            )}

            <input
              placeholder="phone no"
              className="rounded my-2 focus:border-orange-600 outline-none p-3 mx-auto 
              w-2/3 border bg-gray-200"
              {...register("phoneNo", { required: true })}
            />
            {errors.phone && <span>Phone No is required</span>}

            {/* <input
            placeholder=""
            type="file"
            className="mx-auto focus:border-orange-600 outline-none  w-1/2 block my-2 border rounded p-1 border-teal-500"
            {...register("profileImg", { required: true })}
          /> */}

            <input
              className="bg-[#059862] w-1/2 cursor-pointer rounded hover:bg-[#4CAF50] text-white p-1"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
