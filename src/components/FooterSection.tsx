import BackButton from "./UI/button/BackButton";
import NextStepButton from "./UI/button/NextStepButton";

const FooterSection = () => {
  return (
    <div className="bg-white w-full absolute left-0 bottom-0 py-4">
      <div className="wrapper relative flex flex-row justify-between items-center">
        <div>
          <BackButton />
        </div>
        <div>
          <NextStepButton />
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
