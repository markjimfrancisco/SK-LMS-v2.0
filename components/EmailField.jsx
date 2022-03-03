import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHttp } from "../hooks/http";

import FieldAlert from "./FieldAlert";

export default function EmailField({
  id,
  classNames,
  placeholder,
  value,
  setValue,
  endpoint,
  to,
  alert,
  setValidEmail,
  errorMessage,
  disabled,
}) {
  const [invalidInput, setInvalidInput] = useState(false);
  const [verifyingEmail, validEmail] = useHttp(
    value ? `${endpoint}${value}` : "",
    [value]
  );

  useEffect(() => {
    if (setValidEmail) setValidEmail(validEmail);
  }, [validEmail]);

  return (
    <>
      <input
        id="email"
        className={classNames}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
      />
      {alert && validEmail == to && value != "" && (
        <FieldAlert
          classNames="w-full mt-2 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          message={errorMessage}
        />
      )}
    </>
  );
}
