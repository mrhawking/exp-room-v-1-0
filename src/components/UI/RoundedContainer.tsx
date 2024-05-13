import classes from "./RoundedContainer.module.css";

type TProps = React.ComponentPropsWithoutRef<'div'> & {
  children: (false | JSX.Element)[]
};

const RoundedContainer: React.FC<TProps> = ({children, className, ...props}) => {
  return (
    <div className={`${classes.roundedContainer} ${className ?? ''}`} {...props}>{children}</div>
  )
}

export default RoundedContainer