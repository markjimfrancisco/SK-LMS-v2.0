import { useEffect, useState } from "react";
import TextArea from "../TextArea";
import TextField from "../TextField";

const InterestComponents = ({
  favoriteSubject,
  setFavoriteSubject,
  careerGoal,
  setCareerGoal,
  setStep,
}) => {
  const [disable, setDisable] = useState(true);

  useEffect(()=>{
    if(favoriteSubject && favoriteSubject.match(/^[A-Za-z ]*/)[0] == favoriteSubject && careerGoal && careerGoal.match(/^[A-Za-z ]*/)[0] == careerGoal)
      setDisable(false);
    else
      setDisable(true);
  },[favoriteSubject, careerGoal])

  return (
    <>
      <TextField
        id="favorite-subject"
        classNames="lg:w-full md:w-full sm:w-full xs:w-full mt-2 rounded-xl border border-lightGray placeholder-lightGray"
        placeholder="What is your favorite Subject?"
        value={favoriteSubject}
        setValue={setFavoriteSubject}
        alert={true}
      />
      <TextArea
        id="career-goal"
        value={careerGoal}
        setValue={setCareerGoal}
        classNames="lg:w-full md:w-full sm:w-full xs:w-full mt-2 rounded-xl border border-lightGray placeholder-lightGray"
        setValue={setCareerGoal}
        value={careerGoal}
        placeholder="Academic or Career Goal"
      />
      <button
        disabled={disable ? true : false}
        onClick={() => {
          setStep(5);
        }}
        className="bg-blue-500 text-white text-xl font-semibold w-full mt-10 py-3 rounded-full disabled:opacity-50"
      >
        Next
      </button>
    </>
  );
};

export default InterestComponents;
