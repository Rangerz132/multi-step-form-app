import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import FieldError from "../FieldError";
import { ValidatorService } from "../../services/validatorService";
import { FormContext } from "../../contexts/FormContext";

const PersonalInfoFormStep = () => {
  const { user, setUser } = useContext(UserContext);
  const { form, setForm } = useContext(FormContext);

  function validateField(name: string, value: string) {
    let error = "";
    if (name === "name" && !ValidatorService.hasMinimum(value, 1)) {
      error = "Name is required.";
    } else if (name === "email" && !ValidatorService.isValidEmail(value)) {
      error = "Invalid email format.";
    } else if (
      name === "phoneNumber" &&
      !ValidatorService.isValidPhoneNumber(value)
    ) {
      error = "Invalid phone number.";
    }

    return error;
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setUser({
      ...user,
      info: { ...user.info, [name]: value },
    });

    updateFormErrors(name, value);
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    updateFormErrors(e.target.name, e.target.value);
  }

  function updateFormErrors(name: string, value: string) {
    const error = validateField(name, value);
    const updatedErrors = { ...form.errors, [name]: error };

    const isValid =
      !Object.values(updatedErrors).some((err) => err !== "") &&
      user.info.name &&
      user.info.email &&
      user.info.phoneNumber;

    setForm({ ...form, errors: updatedErrors, isValid });
  }

  return (
    <div className="flex flex-col space-y-4 w-full">
      {/** Full Name */}
      <div className="flex flex-col w-full relative">
        <label className="form-label">Name</label>
        <input
          onChange={(e) => handleInputChange(e)}
          onBlur={(e) => handleBlur(e)}
          name="name"
          type="text"
          placeholder="e.g. Stephen King"
          className="form-input"
        ></input>
        {form.errors.name && (
          <FieldError
            errorMessage={form.errors.name}
            className="absolute right-0"
          />
        )}
      </div>

      {/** Email Adress */}
      <div className="flex flex-col w-full relative">
        <label className="form-label">Email adress</label>
        <input
          onChange={(e) => handleInputChange(e)}
          onBlur={(e) => handleBlur(e)}
          name="email"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          className="form-input"
        ></input>
        {form.errors.email && (
          <FieldError
            errorMessage={form.errors.email}
            className="absolute right-0"
          />
        )}
      </div>

      {/** Phone Number */}
      <div className="flex flex-col w-full relative">
        <label className="form-label">Phone number</label>
        <input
          onChange={(e) => handleInputChange(e)}
          onBlur={(e) => handleBlur(e)}
          name="phoneNumber"
          type="number"
          placeholder="e.g. +1 234 567 890"
          className="form-input"
        ></input>
        {form.errors.phoneNumber && (
          <FieldError
            errorMessage={form.errors.phoneNumber}
            className="absolute right-0"
          />
        )}
      </div>
    </div>
  );
};

export default PersonalInfoFormStep;
