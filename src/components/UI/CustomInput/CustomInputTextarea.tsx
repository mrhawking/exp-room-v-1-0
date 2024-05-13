type TProps = React.ComponentPropsWithoutRef<'textarea'> & {
  children: React.ReactNode;
};

const CustomInputTextarea = ({children, className, ...props}: TProps) => {
  return (
    <textarea className={className} {...props}>{children}</textarea>
  )
}

export default CustomInputTextarea;