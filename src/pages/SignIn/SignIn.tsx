/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useForm } from "react-hook-form";
import contact from "../../assets/signup-in.png";

import BackButton from "../../components/BackButton/BackButton";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { loginUser } from "../../redux/features/userSlice/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";
import Loading from "../../components/Progress/Loading";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useAppDispatch();

  const { user, isLoading } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    console.log(data);
    dispatch(loginUser({ email: data.email, password: data.password }));
  };

  useEffect(() => {
    if (user.email && !isLoading) {
      navigate("/");
      toast.success("user sign in successfully");
      reset();
    }
  }, [user.email, isLoading]);
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
      <div className="lg:mt-36">
        <h1 className="text-4xl text-center my-7 text-orange-600 ">Sign IN</h1>

        <div className="text-center mb-16 place-content-center">
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <input
              placeholder="email"
              className="rounded my-2 focus:border-orange-600 outline-none p-3 mx-auto 
              w-2/3 border bg-gray-200"
              type="email"
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
              type="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="mx-2 text-sm text-red-600">
                password is required
              </span>
            )}

            {/* <input
            placeholder=""
            type="file"
            className="mx-auto focus:border-orange-600 outline-none  w-1/2 block my-2 border rounded p-1 border-teal-500"
            {...register("profileImg", { required: true })}
          /> */}

            {isLoading ? (
              <Loading />
            ) : (
              <input
                className="bg-[#059862] w-1/2 cursor-pointer rounded hover:bg-[#4CAF50] text-white p-1"
                type="submit"
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
