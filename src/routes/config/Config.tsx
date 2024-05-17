import { ReactElement, useContext } from "react";
import { UserContext } from "../../context/auth/UserContext";
import { Navigate } from "react-router-dom";

interface Props {
  element: ReactElement;
}

//PRIVATE ROUTE (Denies to acces private routes if the user is not registered)
export const PrivateRoute = ({ element }: Props) => {
  const { user, isLoading } = useContext(UserContext);
  if (isLoading) {
    return;
  }

  const isAuthenticated = user && user.token != undefined;

  return isAuthenticated ? element : <Navigate to="/unite" />;
};

//PUBLIC ROUTE (Denies to acces 'LOGIN' if the user is registered)
export const PublicRoute = ({ element }: Props) => {
  const { user } = useContext(UserContext);
  if (user && user.token !== undefined) {
    return <Navigate to="/" />;
  }

  return element;
};
