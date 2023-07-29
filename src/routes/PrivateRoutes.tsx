import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
type IProps = {
  children: ReactNode;
};

export default function PrivateRoutes({ children }: IProps) {
  const user = localStorage.getItem("access-token");
  const location = useLocation();
  console.log(location.pathname);
  console.log(user);
  const navigate = useNavigate();
  if (user === null) {
    navigate("/sign-in");
  }
  return children;
}
