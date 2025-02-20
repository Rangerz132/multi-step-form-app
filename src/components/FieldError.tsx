const FieldError = (props: { errorMessage: string; className?: string }) => {
  return (
    <div className={`text-primary-strawberry-red text-sm ${props.className}`}>
      {props.errorMessage}
    </div>
  );
};

export default FieldError;
