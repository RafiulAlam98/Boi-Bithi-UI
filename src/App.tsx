import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes/routes";
import { auth } from "./lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useAppDispatch } from "./redux/hooks/hooks";
import { setLoading, setUser } from "./redux/features/userSlice/userSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, []);

  
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
