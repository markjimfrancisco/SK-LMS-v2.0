const TextArea = ({ id, classNames, value, setValue, placeholder }) => {
  return (
    <textarea
      id={id}
      type="text"
      className={classNames}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default TextArea;
