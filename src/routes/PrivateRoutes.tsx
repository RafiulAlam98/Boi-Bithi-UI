/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
type IProps = {
  children: ReactNode;
};

export default function PrivateRoutes({ children }: IProps | any) {
  const user = localStorage.getItem("access-token");
  console.log(user);
  const navigate = useNavigate();
  if (user === null) {
    return navigate("/sign-in");
  }
  return children;
}
