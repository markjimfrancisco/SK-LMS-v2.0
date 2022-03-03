import { useRouter } from "next/dist/client/router";
import SubjectsView from "./SubjectsView";
import TopicsView from "./TopicsView";

const GameModule = ({ view, setView, subject }) => {
  const router = useRouter();

  
  return (
    <>
      <div className="overflow-x-scroll w-full flex flex-row items-center justify-start">
        <div className="flex space-x-4 items-center justify-center">
          {view == "mode-1" && !subject && <SubjectsView setView={setView} />}
          {view == "mode-1" && subject && <TopicsView />}
        </div>
      </div>
    </>
  );
};

export default GameModule;
