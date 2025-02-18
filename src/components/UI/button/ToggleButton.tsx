const ToggleButton = (props: { onClick: () => void; activated: boolean }) => {
  function handleOnClick() {
    props.onClick();
  }

  return (
    <div
      onClick={() => handleOnClick()}
      className="rounded-full bg-primary-marine-blue w-12 h-6 p-1"
    >
      <div
        className={`bg-white w-4 h-4 rounded-full left-0 top-0 relative transition-transform duration-200 ${
          props.activated ? "translate-x-6" : ""
        }`}
      ></div>
    </div>
  );
};

export default ToggleButton;
