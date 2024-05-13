import classes from "./CenterWrapper.module.css";

type TProps = {
  children: JSX.Element;
};

const CenterWrapper = ({children}: TProps) => {
  return (
    <div className={classes.formWrapper}>{children}</div>
  )
}

export default CenterWrapper