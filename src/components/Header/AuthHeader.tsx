import { useSearchParams } from 'react-router-dom';
import { authState } from '../../models/styleTypes';
import { ButtonLink } from '../UI/Button'
import classes from './AuthHeader.module.css';
const AuthHeader = () => {
  const [searchParams] = useSearchParams();
  let mode = 'none';
  const url = window.location.href;
  
  if (url.includes('auth')) {
    mode = searchParams.get('mode') || authState.SIGNIN
  }

  return (
    <div className={classes.inner}>
      <ButtonLink isCurrent={mode === authState.SIGNUP} url={`auth?mode=${authState.SIGNUP}`}>Регистрация</ButtonLink>
      <ButtonLink isCurrent={mode === authState.SIGNIN} url={`auth?mode=${authState.SIGNIN}`}>Вход</ButtonLink>
    </div>
  )
}

export default AuthHeader