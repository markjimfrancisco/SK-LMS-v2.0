import {
  faBookmark,
  faChartPie,
  faCheckDouble,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const pieChartIcon = (
    <FontAwesomeIcon
      icon={faChartPie}
      size="2x"
      color="lightGray"
      className={`cursor-pointer hover:text-subheading m-auto`}
    />
  );

  const availableCoursesIcon = (
    <FontAwesomeIcon
      icon={faBookmark}
      size="2x"
      color="lightGray"
      className={`cursor-pointer hover:text-subheading m-auto`}
    />
  );

  const completedCoursesIcon = (
    <FontAwesomeIcon
      icon={faCheckDouble}
      size="2x"
      color="lightGray"
      className={`cursor-pointer hover:text-subheading m-auto`}
    />
  );

  return (
    <div className="relative w-1/2 p-10 flex flex-col border min-h-content bg-blue-50 space-y-4">
      <div className="w-full h-72 border relative">
        <img className="w-full h-full" src="/images/dashboard-content-1.svg" />
        <p className="absolute top-8 left-8 text-skBlue font-bold text-5xl">
          Hi Firstname,
        </p>
        <p className="absolute bottom-16 left-8 text-white text-2xl">
          Welcome Back! What will you learn today?
        </p>
      </div>
      <div className="w-full h-32 flex justify-around relative">
        <div className="h-full w-1/4 flex bg-white border rounded-2xl">
          <div className="w-1/3 h-full flex items-center">{pieChartIcon}</div>
          <div className="flex flex-col justify-center h-full w-3/4">
            <p className="text-skBlue font-bold text-4xl">20</p>
            <p className="font-semibold text-subheading">Ongoing Courses</p>
          </div>
        </div>
        <div className="h-full w-1/4 flex bg-white border rounded-2xl">
          <div className="w-1/3 h-full flex items-center">
            {availableCoursesIcon}
          </div>
          <div className="flex flex-col justify-center h-full w-3/4">
            <p className="text-skBlue font-bold text-4xl">6</p>
            <p className="font-semibold text-subheading">Available Courses</p>
          </div>
        </div>
        <div className="h-full w-1/4 flex bg-white border rounded-2xl">
          <div className="w-1/3 h-full flex items-center">
            {completedCoursesIcon}
          </div>
          <div className="flex flex-col justify-center h-full w-3/4">
            <p className="text-skBlue font-bold text-4xl">1</p>
            <p className="font-semibold text-subheading">Completed Courses</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
