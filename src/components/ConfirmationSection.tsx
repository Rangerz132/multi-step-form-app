import ThankYouIcon from "../assets/images/icon-thank-you.svg";

const ConfirmationSection = () => {
  return (
    <div className="flex flex-col space-y-6 justify-center items-center py-16">
      {/** Image */}
      <div className="w-15">
        <img src={ThankYouIcon} alt={"Checkmar"} />
      </div>
      {/** Content */}
      <div className="flex flex-col space-y-3 justify-center items-center">
        {/** Title */}
        <h1 className="text-center">Thank you!</h1>
        {/** Description */}
        <p className="text-center">
          Thank you! Thanks for confirming your subscription! We hope you have
          fun using our platform. If you ever need support, please feel free to
          email us at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default ConfirmationSection;
