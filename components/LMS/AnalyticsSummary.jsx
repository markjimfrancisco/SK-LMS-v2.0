import { faBookmark, faChartPie, faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AnalyticsSummary = () => {
    const pieChartIcon = (
        <FontAwesomeIcon
          icon={faChartPie}
          size="2x"
          className={`text-skBlue cursor-pointer hover:text-subheading m-auto`}
        />
      );
    
      const availableCoursesIcon = (
        <FontAwesomeIcon
          icon={faBookmark}
          size="2x"
          className={`text-skBlue cursor-pointer hover:text-subheading m-auto`}
        />
      );
    
      const completedCoursesIcon = (
        <FontAwesomeIcon
          icon={faCheckDouble}
          size="2x"
          className={`text-skBlue cursor-pointer hover:text-subheading m-auto`}
        />
      );

  return (
    <div className="w-full h-auto flex flex-col justify-around relative px-4 space-y-2">
      <div className="h-full w-full p-2 flex bg-white border rounded-2xl">
        <div className="w-1/6 h-full flex items-center">{pieChartIcon}</div>
        <div className="flex flex-col justify-center h-full w-3/4">
          <p className="text-skBlue font-bold text-xl">20</p>
          <p className="font-semibold text-subheading">Ongoing Courses</p>
        </div>
      </div>
      <div className="h-full w-full p-2 flex bg-white border rounded-2xl">
        <div className="w-1/6 h-full flex items-center">
          {availableCoursesIcon}
        </div>
        <div className="flex flex-col justify-center h-full w-3/4">
          <p className="text-skBlue font-bold text-xl">6</p>
          <p className="font-semibold text-subheading">Available Courses</p>
        </div>
      </div>
      <div className="h-full w-full p-2 flex bg-white border rounded-2xl">
        <div className="w-1/6 h-full flex items-center">
          {completedCoursesIcon}
        </div>
        <div className="flex flex-col justify-center h-full w-3/4">
          <p className="text-skBlue font-bold text-xl">1</p>
          <p className="font-semibold text-subheading">Completed Courses</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSummary;
