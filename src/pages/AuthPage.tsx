import { Navigate, useSearchParams } from "react-router-dom";
import {isAuth} from '../../data.ts';
import { useAppDispatch } from "../store/store.ts";
import {styleSlice} from "../store/slices/styleSlice.ts";
import { authState, bgImg } from "../models/styleTypes.ts";
import AuthForm from "../components/AuthForm.tsx";
import CenterWrapper from "../components/UI/CenterWrapper.tsx";

const AuthPage = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  
  if (isAuth) {
    return <Navigate to="/room"/>;
  }

  const mode = searchParams.get('mode') || authState.SIGNIN;
  if (mode !== authState.SIGNIN && mode !== authState.SIGNUP) {
    return <Navigate to="/auth?mode=signin"/>;
  }

  dispatch(styleSlice.actions.setStyle(bgImg.MAIN));

  return (
      <div className="container">
        <CenterWrapper>
          <AuthForm mode={mode}/>
        </CenterWrapper>
      </div>
  )
}

export default AuthPage