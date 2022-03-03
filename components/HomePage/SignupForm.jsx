import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import NameInformationComponents from "./NameInfomationComponents";
import InterestComponents from "./InterestComponents";
import SignupDetailsComponents from "./SignupDetailsComponents";
import PersonalInformationComponent from "./PersonalInformationComponents";
import SchoolInformationComponents from "./SchoolInformationComponents";

const SignupForm = ({ setForm }) => {
  const leftAngleBracketLarge = (
    <FontAwesomeIcon
      onClick={() => {
        setStep(step - 1);
      }}
      className="text-skBlue lg:inline-block md:inline-block sm:hidden xs:hidden xxs:hidden"
      icon={faAngleLeft}
      size="3x"
    />
  );
  const leftAngleBracketSmall = (
    <FontAwesomeIcon
      onClick={() => {
        setStep(step - 1);
      }}
      className="text-skBlue sm:inline-block xs:inline-block lg:hidden md:hidden"
      icon={faAngleLeft}
      size="lg"
    />
  );

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [school, setSchool] = useState("");
  const [other, setOther] = useState("");
  const [mobileno, setMobileNo] = useState("");
  const [gender, setGender] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [gradeLevel, setGradeLevel] = useState("");
  const [favoriteSubject, setFavoriteSubject] = useState("");
  const [careerGoal, setCareerGoal] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const [step, setStep] = useState(1);

  return (
    <>
      <label className="w-full mt-2 text-left font-bold lg:text-4xl md:text-4xl 1080p:text-4xl sm:text-xl xs:text-xl xxs:text-xl text-gray-700">
        Signup
      </label>
      <div className="flex items-center mt-2 w-full space-x-4">
        {step > 1 && leftAngleBracketLarge}
        {step > 1 && leftAngleBracketSmall}
        <label className="lg:w-full md:w-3/4 sm:w-full xs:w-3/4 xxs:w-3/4 xxs:text-xl text-left text-lg font-semibold text-subheading">
          {step == 1 && "Name Infomation"}
          {step == 2 && "Personal Information"}
          {step == 3 && "School Information"}
          {step == 4 && "Interest"}
          {step == 5 && "Sign Up Details"}
        </label>
      </div>
      <div className="w-full flex space-x-2 my-4">
        <div
          className={`${
            step > 0 ? "bg-skBlue" : "bg-skBlueInactive"
          } h-1 w-full rounded-xl`}
        ></div>
        <div
          className={`${
            step > 1 ? "bg-skBlue" : "bg-skBlueInactive"
          } h-1 w-full rounded-xl`}
        ></div>
        <div
          className={`${
            step > 2 ? "bg-skBlue" : "bg-skBlueInactive"
          } h-1 w-full rounded-xl`}
        ></div>
        <div
          className={`${
            step > 3 ? "bg-skBlue" : "bg-skBlueInactive"
          } h-1 w-full rounded-xl`}
        ></div>
        <div
          className={`${
            step > 4 ? "bg-skBlue" : "bg-skBlueInactive"
          } h-1 w-full rounded-xl`}
        ></div>
      </div>
      {step === 1 && (
        <NameInformationComponents
          firstName={firstName}
          middleName={middleName}
          lastName={lastName}
          setFirstName={setFirstName}
          setMiddleName={setMiddleName}
          setLastName={setLastName}
          setStep={setStep}
        />
      )}
      {step === 2 && (
        <PersonalInformationComponent
          month={month}
          day={day}
          year={year}
          setMonth={setMonth}
          setDay={setDay}
          setYear={setYear}
          gender={gender}
          setGender={setGender}
          mobileno={mobileno}
          setMobileNo={setMobileNo}
          setStep={setStep}
        />
      )}
      {step === 3 && (
        <SchoolInformationComponents
          school={school}
          other={other}
          gradeLevel={gradeLevel}
          setSchool={setSchool}
          setOther={setOther}
          setGradeLevel={setGradeLevel}
          setStep={setStep}
        />
      )}
      {step === 4 && (
        <InterestComponents
          favoriteSubject={favoriteSubject}
          careerGoal={careerGoal}
          setFavoriteSubject={setFavoriteSubject}
          setCareerGoal={setCareerGoal}
          setStep={setStep}
        />
      )}
      {step === 5 && (
        <SignupDetailsComponents
          email={email}
          username={username}
          password={password}
          setEmail={setEmail}
          setUsername={setUsername}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          firstName={firstName}
          middleName={middleName}
          lastName={lastName}
          school={school}
          other={other}
          mobileno={mobileno}
          month={parseInt(month)}
          day={parseInt(day)}
          year={parseInt(year)}
          gender={gender}
          gradeLevel={gradeLevel}
          favoriteSubject={favoriteSubject}
          careerGoal={careerGoal}
          setForm={setForm}
        />
      )}
      <a
        onClick={() => {
          setForm("login");
        }}
        className="text-gray-500 mt-6 cursor-pointer"
      >
        Already have an account?{" "}
        <span className="text-blue-400 font-bold">Login.</span>
      </a>
    </>
  );
};

export default SignupForm;
