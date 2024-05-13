import classes from "./CustomInputLabel.module.css";

type TProps = React.ComponentPropsWithoutRef<'label'> & {
  children: React.ReactNode;
};

const CustomInputLabel = ({children, className, ...props}: TProps) => {
  return (
    <label className={`${classes.label} ${className ?? ''}`} {...props}>{children}</label>
  )
}

export default CustomInputLabel;