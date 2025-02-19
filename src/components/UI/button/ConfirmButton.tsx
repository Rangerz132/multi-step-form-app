import Button from "./Button";
import { FormContext, useFormContext } from "../../../contexts/FormContext";
import { UserContext, useUserContext } from "../../../contexts/UserContext";
import { UserAPI } from "../../../api/userAPI";

const ConfirmButton = () => {
  const { form, setForm } = useFormContext(FormContext);
  const { user } = useUserContext(UserContext);

  async function addUserToDatabase() {
    await UserAPI.addUser(user);
  }

  function handleButtonClick() {
    setForm({ ...form, completed: true });
    addUserToDatabase();
  }

  return (
    <Button onClick={() => handleButtonClick()} className="cta-2">
      Confirm
    </Button>
  );
};

export default ConfirmButton;
