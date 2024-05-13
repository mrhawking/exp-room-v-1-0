import { Navigate, Outlet } from "react-router-dom";
// import { useAppSelector } from "../store";
import {isAuth} from '../../data.ts';

const PrivateRoutes = () => {
  // const { currentUser } = useAppSelector(state => state.auth)
  // const isAuth = !!currentUser;

  return (
    isAuth ? <Outlet /> : <Navigate to="/"/>
  )
}

export default PrivateRoutes;