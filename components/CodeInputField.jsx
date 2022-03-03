import { useEffect, useState } from "react";
import { useHttp } from "../hooks/http";

import FieldAlert from "./FieldAlert";

const CodeInputField = ({
  classNames,
  placeholder,
  value,
  setValue,
  endpoint,
  to,
  alert,
  setValidCode,
  errorMessage,
}) => {
  const [invalidInput, setInvalidInput] = useState(false);
  const [verifyingCode, validCode] = useHttp(
    value ? `${endpoint}${value}` : "",
    [value]
  );

  useEffect(() => {
    if(setValidCode && validCode)
      setValidCode(validCode.success);
  }, [validCode]);

  return (
    <>
      <input
        className={classNames}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {alert && validCode && validCode.success === to && value != "" && (
        <FieldAlert
          classNames="w-full mt-2 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          message={errorMessage}
        />
      )}
    </>
  );
}

export default CodeInputField;
