import { useContext } from "react";
import Button from "./Button";
import { FormContext } from "../../../contexts/FormContext";

const BackButton = () => {
  const { form, setForm } = useContext<FormContext | null>(FormContext);

  function handleOnClick() {
    if (form > 0) {
      setForm((prevState: number) => prevState - 1);
    }
  }
  return (
    <Button
      onClick={handleOnClick}
      className={`${form > 0 ? "flex" : "hidden"}`}
    >
      Go back
    </Button>
  );
};

export default BackButton;
