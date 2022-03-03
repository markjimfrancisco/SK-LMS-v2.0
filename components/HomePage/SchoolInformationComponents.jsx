import { useEffect, useState } from "react";
import { useHttp } from "../../hooks/http";
import Select from "../Select";
import TextField from "../TextField";

const SchoolInformationComponents = ({
  school,
  setSchool,
  other,
  setOther,
  gradeLevel,
  setGradeLevel,
  setStep,
}) => {
  const [schoolsLoading, schools] = useHttp("/schools", []);
  const [gradelevelsLoading, gradeLevels] = useHttp(`/grade-levels?`, []);

  const [disable, setDisable] = useState(true);

  useEffect(() => {
    if ((school != 1 || (school == 1 && other)) && gradeLevel)
      setDisable(false);
    else setDisable(true);
  }, [school, other, gradeLevel]);

  return (
    <>
      <Select
        id="school"
        classNames="w-full xs:h-8 rounded-xl border border-lightGray mt-2 text-lightGray"
        setValue={setSchool}
        options={schools}
        selected={school}
        value="name"
        label={"name"}
        compare="name"
        placeholder="School"
      />
      {school == 'other' && (
        <TextField
          id="other"
          classNames="lg:w-full md:w-full sm:w-full xs:w-full xs:h-8 mt-2 rounded-xl border border-lightGray placeholder-lightGray"
          placeholder="Please Specify"
          value={other}
          setValue={setOther}
        />
      )}
      <Select
        id="gradelevel"
        classNames="w-full xs:h-8 rounded-xl border border-lightGray mt-2 text-lightGray"
        setValue={setGradeLevel}
        options={gradeLevels}
        selected={gradeLevel}
        value="name"
        label={"name"}
        compare="name"
        placeholder="Grade Level"
      />
      <button
        disabled={disable ? true : false}
        onClick={() => {
          setStep(4);
        }}
        className="bg-blue-500 text-white text-xl font-semibold w-full mt-2 lg:py-3 1080:py-3 reno:py-3 sm:py-2 xs: py-2 rounded-full disabled:opacity-50"
      >
        Next
      </button>
    </>
  );
};

export default SchoolInformationComponents;
