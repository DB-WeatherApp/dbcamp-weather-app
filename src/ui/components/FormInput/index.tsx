import { HTMLInputTypeAttribute } from "react";
import "../../styles/global.css";
import "./style.css";

type Props = {
  label: String;
  type: HTMLInputTypeAttribute;
  id: string;
};

function FormInput({ label, type, id }: Props) {
  return (
    <div className="inputArea">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <input className="inputField" type={type} name={id} id={id} />
    </div>
  );
}

export default FormInput;
