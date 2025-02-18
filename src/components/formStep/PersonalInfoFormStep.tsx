const PersonalInfoFormStep = () => {
  return (
    <div className="flex flex-col space-y-4 w-full">
      {/** Full Name */}
      <div className="flex flex-col  w-full">
        <label className="form-label">Name</label>
        <input
          type="text"
          placeholder="e.g. Stephen King"
          className="form-input"
        ></input>
      </div>
      {/** Email Adress */}
      <div className="flex flex-col  w-full">
        <label className="form-label">Email adress</label>
        <input
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          className="form-input"
        ></input>
      </div>
      {/** Phone Number */}
      <div className="flex flex-col  w-full">
        <label className="form-label">Phone number</label>
        <input
          type="number"
          placeholder="e.g. +1 234 567 890"
          className="form-input"
        ></input>
      </div>
    </div>
  );
};

export default PersonalInfoFormStep;
