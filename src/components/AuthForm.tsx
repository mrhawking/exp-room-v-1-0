import { authState } from "../models/styleTypes";
import classes from "./AuthForm.module.css";
import Button from "./UI/Button";
import CustomInput from "./UI/CustomInput/CustomInput";
import RoundedContainer from "./UI/RoundedContainer";

type TProps = {
  mode: string;
}

const AuthForm = ({ mode }: TProps) => {
  return (
    <form className={classes.form}>
      <RoundedContainer className={classes.formWrapper}>
        <h2 className="title title--m align-center">{mode === authState.SIGNIN ? 'Вход' : 'Регистрация'}</h2>
        <div className={classes.formInputs}>
          <CustomInput className={classes.formInput}>
            <CustomInput.Label htmlFor="email">Email</CustomInput.Label>
            <CustomInput.Input type="email" id="email" name="email" />
          </CustomInput>
          <CustomInput className={classes.formInput}>
            <CustomInput.Label htmlFor="password">Пароль</CustomInput.Label>
            <CustomInput.Input type="password" id="password" name="password" />
          </CustomInput>
          {mode === authState.SIGNUP && (
            <CustomInput className={classes.formInput}>
              <CustomInput.Label htmlFor="repassword">Пароль еще раз</CustomInput.Label>
              <CustomInput.Input type="password" id="repassword" name="repassword" />
            </CustomInput>
          )}
        </div>
        <Button className={classes.formButton}>{mode === authState.SIGNIN ? 'Войти' : 'Создать'}</Button>
      </RoundedContainer>
    </form>
  )
}

export default AuthForm