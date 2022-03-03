import { useEffect, useState } from "react";
import { useHttp } from "../../hooks/http";
import NumberField from "../NumberField";
import Select from "../Select";
import TextField from "../TextField";

const NameInfomationComponents = ({
  firstName,
  setFirstName,
  middleName,
  setMiddleName,
  lastName,
  setLastName,
  setStep,
}) => {

  const [disable, setDisable] = useState(true);

  useEffect(() => {
    if (
      firstName &&
      middleName &&
      lastName &&
      firstName.match(/^[A-Za-z ]*/)[0] == firstName &&
      middleName.match(/^[A-Za-z ]*/)[0] == middleName &&
      lastName.match(/^[A-Za-z ]*/)[0] == lastName
    ) {
      setDisable(false);
    } else setDisable(true);
  }, [firstName, middleName, lastName]);

  return (
    <>
      <TextField
        id="firstname"
        classNames="lg:w-full md:w-full sm:w-full xs:w-full xxs:w-full xs:h-8 xxs:h-8 mt-2 rounded-xl border border-lightGray placeholder-lightGray"
        placeholder="First Name"
        value={firstName}
        setValue={setFirstName}
        alert={true}
      />
      <TextField
        id="middlename"
        classNames="lg:w-full md:w-full sm:w-full xs:w-full xxs:w-full xs:h-8 xxs:h-8 mt-2 rounded-xl border border-lightGray placeholder-lightGray"
        placeholder="Middle Name"
        value={middleName}
        setValue={setMiddleName}
        alert={true}
      />
      <TextField
        id="lastname"
        classNames="lg:w-full md:w-full sm:w-full xs:w-full xxs:w-full xs:h-8 xxs:h-8 mt-2 rounded-xl border border-lightGray placeholder-lightGray"
        placeholder="Last Name"
        value={lastName}
        setValue={setLastName}
        alert={true}
      />
      <button
        disabled={disable ? true : false}
        onClick={() => {
          setStep(2);
        }}
        className="bg-blue-500 text-white text-xl font-semibold w-full mt-2 lg:py-3 1080:py-3 reno:py-3 sm:py-2 xs:py-2 xxs:py-2 rounded-full disabled:opacity-50"
      >
        Next
      </button>
    </>
  );
};

export default NameInfomationComponents;
