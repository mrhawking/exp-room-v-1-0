import { isAuth } from "../../../data"
import AuthHeader from "./AuthHeader"
import MainHeader from "./MainHeader"
import classes from './/Header.module.css';

const Header = () => {


  return (
    <header className={classes.header}>
      <div className="container">
        {isAuth ? <MainHeader /> : <AuthHeader />}
      </div>
    </header>
  )
}

export default Header