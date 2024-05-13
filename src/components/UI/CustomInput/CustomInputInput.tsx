import classes from "./CustomInputInput.module.css";

type TProps = React.ComponentPropsWithoutRef<'input'>;

const CustomInputInput = ({className, ...props}: TProps) => {
  return (
    <input className={`${classes.input} ${className ?? ''}`} {...props}/>
  )
}

export default CustomInputInput;