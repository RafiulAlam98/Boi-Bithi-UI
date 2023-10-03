/* eslint-disable @typescript-eslint/no-explicit-any */

import { ReactNode } from 'react';
import { useAppSelector } from "../redux/hooks/hooks";
import Loading from "../components/Progress/Loading";
import { Navigate, useLocation } from "react-router-dom";

type IProps = {
  children: ReactNode;
};

export default function PrivateRoutes({ children }: IProps | any) {
  const { user, isLoading } = useAppSelector((state) => state.user);
  const { pathname } = useLocation();
  if (isLoading) {
    return <Loading />;
  }
  if (!user.email && !isLoading) {
    return <Navigate to="/sign-in" state={{ path: pathname }} />;
  }
  return children;
}
