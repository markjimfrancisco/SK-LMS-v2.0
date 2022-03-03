import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import FieldAlert from "./FieldAlert";

export default function ConfirmPasswordInput({
  wrapperClassName,
  textFieldClassName,
  placeholder,
  iconTop,
  value,
  setValue,
  password,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const revealEye = (
    <FontAwesomeIcon
      onClick={() => {
        setShowPassword(!showPassword);
      }}
      icon={faEye}
      size="lg"
      color="lightGray"
      className={`absolute right-4 lg:top-3 md:top-3 sm:${iconTop} xs:${iconTop} xxs:${iconTop} cursor-pointer hover:text-subheading`}
    />
  );

  const hideEye = (
    <FontAwesomeIcon
      onClick={() => {
        setShowPassword(!showPassword);
      }}
      icon={faEyeSlash}
      size="lg"
      color="lightGray"
      className={`absolute right-4 lg:top-3 md:top-3 sm:${iconTop} xs:${iconTop} xxs:${iconTop} cursor-pointer hover:text-subheading`}
    />
  );

  return (
    <>
      <div className={`${wrapperClassName} relative`}>
        <input
          id="confirm-password"
          type={showPassword ? "text" : "password"}
          name="confirmPassword"
          className={`w-full ${textFieldClassName}`}
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        {!showPassword ? revealEye : hideEye}
      </div>

      {password != value && (
        <FieldAlert
          classNames="w-full mt-2 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          message="Password does not match!"
        />
      )}
    </>
  );
}
