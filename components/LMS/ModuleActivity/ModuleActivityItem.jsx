import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import GameModule from "./GameModule";

const ModuleActivityItem = () => {
  const router = useRouter();

  const slug = router.query.slug;
  const { subject } = router.query;

  const modulePlayIcon = (
    <FontAwesomeIcon
      onClick={() => {
        // setStartGame(!startGame);
        router.push("/lms/mode/1", undefined, { shallow: true, scroll: false });
      }}
      icon={faPlay}
      size="2x"
      className={`bg-blue-400 text-white p-2 rounded-lg cursor-pointer hover:text-subheading`}
    />
  );

  const moduleBackButton = (
    <FontAwesomeIcon
      onClick={() => {
        // setStartGame(!startGame);
        router.push("/lms", undefined, { shallow: true, scroll: false });
      }}
      icon={faPlay}
      size="2x"
      className={`bg-blue-400 text-white p-2 rounded-lg cursor-pointer hover:text-subheading`}
    />
  );

  const [startGame, setStartGame] = useState(false);
  const [module, setModule] = useState("");
  const [selectSubject, setSelectedSubject] = useState("");

  useEffect(() => {
    if (!slug) {
      setStartGame(false);
      setModule("");
    }
    if (slug && slug[0] == "mode" && slug[1] == "1" && !subject) {
      setStartGame(true);
      setModule("mode-1");
      setSelectedSubject("");
    }
  }, [slug]);

  useEffect(() => {
    if (subject) setSelectedSubject(subject);
  }, [subject]);

  return (
    <>
      <div className="box-border w-full flex justify-between">
        <div className="relative border-b-2 border-white w-10">
          <h5 className="absolute font-semibold text-xl">Module</h5>
        </div>
        <h4 className="text-4xl text-white font-bold">01</h4>
      </div>
      <div className="h-2 w-full bg-skBlueInactive rounded-full">
        <div
          style={{ width: "44%" }}
          className="h-full bg-white rounded-full"
        ></div>
      </div>
      <div className="box-border w-full h-auto flex flex-row items-center justify-between">
        {module == "" && modulePlayIcon}
        {module == "mode-1" && moduleBackButton}
        <div className="box-border flex flex-row items-center justify-between">
          <h5 className="font-bold">
            44% <span className="font-normal">Completed</span>
          </h5>
        </div>
      </div>
      {startGame && <GameModule view={module} subject={selectSubject} />}
    </>
  );
};

export default ModuleActivityItem;
