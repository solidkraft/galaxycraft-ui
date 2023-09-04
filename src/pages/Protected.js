import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const Protected = ({ children }) => {
  const isLoggedIn = Cookies.get("loggedIn");
  console.log("LOGGED IN?", isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default Protected;