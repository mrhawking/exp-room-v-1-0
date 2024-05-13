import { Navigate } from "react-router-dom";
import {isAuth} from '../../data.ts';
import { Link } from "react-router-dom";
import { authState } from "../models/styleTypes.ts";

const HomePage = () => {
  
  return (
      !isAuth ? <p>Рады приветствовать вас, здесь будет ваш эксперимет <Link to={`auth?name=${authState.SIGNUP}`}>Войти</Link></p> : <Navigate to="/room"/>
  )
}

export default HomePage