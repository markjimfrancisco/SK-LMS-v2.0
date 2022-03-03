import { faBars, faPlay, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";
import CalendarLayout from "../components/Calendar/CalendarLayout";
import MobileMenu from "../components/LMS/Menu/MobileMenu";
import MiniProfile from "../components/LMS/MobileSecondaryMenu";
import ModuleActivityWrapper from "../components/LMS/ModuleActivity/ModuleActivityWrapper";
import Dashboard from "../components/LMS/Dashboard";
import Profile from "../components/LMS/Profile";
import Settings from "../components/LMS/Settings";
import MySchedule from "../components/LMS/MySchedule";

const LMSMobileLayout = (props) => {
  const user = useSelector(state => state.UserReducer);
  const router = useRouter();
  const { slug } = router.query;

  const menuIcon = (
    <FontAwesomeIcon
      icon={faBars}
      size="lg"
      className={`text-skBlue cursor-pointer`}
      onClick={() => {
        router.query.menu
          ? router.push(`${window.location.pathname}`, undefined, {
              shallow: true,
            })
          : router.push(`${window.location.pathname}?menu=true`, undefined, {
              shallow: true,
            });
      }}
    />
  );

  const searchIcon = (
    <FontAwesomeIcon
      icon={faSearch}
      size="lg"
      className={`text-skBlue cursor-pointer`}
    />
  );

  const modulePlayIcon = (
    <FontAwesomeIcon
      icon={faPlay}
      size="2x"
      className={`bg-blue-400 text-white p-2 rounded-lg cursor-pointer hover:text-subheading`}
    />
  );

  return (
    <>
      <div className="w-full h-auto box-border flex flex-col sticky border bg-blue-50">
        <div className="w-full p-4 mb-1 box-border flex flex-row items-center justify-between bg-white">
          {menuIcon}
          <div className="flex space-x-2">
            <img className="w-8" src="/images/logo.png" />
            <h1 className="text-subheading">
              Stock <span className="text-skBlue font-semibold">Knowledge</span>
            </h1>
          </div>
          {searchIcon}
        </div>
        <MiniProfile />
      </div>
      {router.query.menu && <MobileMenu />}
      {!slug && !router.query.menu && <Dashboard />}
      {(slug && slug[0] != user.data.username) && !router.query.menu && slug[0] != 'settings' && !router.query.menu && slug[0] != 'my-schedule' && <Dashboard />}
      {slug && slug[0] == user.data.username && !router.query.menu && <Profile />}
      {slug && slug[0] == 'settings' && <Settings />}
      {slug && slug[0] == 'my-schedule' && <MySchedule />}
    </>
  );
};

export default LMSMobileLayout;
