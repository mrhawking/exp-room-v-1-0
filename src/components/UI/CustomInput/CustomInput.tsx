import CustomInputInput from "./CustomInputInput";
import CustomInputLabel from "./CustomInputLabel";
import CustomInputTextarea from "./CustomInputTextarea";

type TProps = React.ComponentPropsWithoutRef<'div'> & {
  children: JSX.Element[] | JSX.Element;
};

const CustomInput = ({children, className}: TProps) => {
  return (
    <div className={className ?? undefined}>{children}</div>
  )
}

CustomInput.Label = CustomInputLabel;
CustomInput.Input = CustomInputInput;
CustomInput.Textarea = CustomInputTextarea;

export default CustomInput;