import { faBookmark, faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import {
  faHome,
  faSignOutAlt,
  faTrophy,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/dist/client/router";
import { useDispatch, useSelector } from "react-redux";
import { DoLogin } from "../../../redux/actions/UserAction";

const MobileMenu = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.UserReducer);

  const { slug } = router.query;

  const homeIcon = (
    <FontAwesomeIcon
      icon={faHome}
      size="lg"
      color=""
      className={`${
        !slug ||
        (slug &&
          slug[0] != user.data.username &&
          slug &&
          slug[0] != "my-schedule")
          ? "bg-skBlue text-white"
          : ""
      } cursor-pointer hover:text-subheading`}
    />
  );

  const userIcon = (
    <FontAwesomeIcon
      icon={faUser}
      size="lg"
      color=""
      className={`${
        slug && slug[0] == user.data.username ? "text-white" : "text-skBlue"
      } cursor-pointer hover:text-subheading`}
    />
  );

  const bookmarkIcon = (
    <FontAwesomeIcon
      icon={faBookmark}
      size="lg"
      color="lightGray"
      className={`text-skBlue cursor-pointer hover:text-subheading`}
    />
  );

  const calendarIcon = (
    <FontAwesomeIcon
      icon={faCalendarAlt}
      size="lg"
      color="lightGray"
      className={`${
        slug && slug[0] == "my-schedule" ? "text-white" : "text-skBlue"
      } cursor-pointer hover:text-subheading`}
    />
  );

  const leaderboardIcon = (
    <FontAwesomeIcon
      icon={faTrophy}
      size="lg"
      color="lightGray"
      className={`text-skBlue cursor-pointer hover:text-subheading`}
    />
  );

  const logoutIcon = (
    <FontAwesomeIcon
      icon={faSignOutAlt}
      size="lg"
      color="lightGray"
      className={`text-skBlue cursor-pointer hover:text-subheading`}
    />
  );

  const Logout = () => {
    dispatch(DoLogin(false, null));
    router.push("/lms", undefined, { shallow: true });
  };

  return (
    <div className="box-border h-screen w-full bg-blue-50 flex flex-col py-2">
      <div className="box-border border w-full h-auto bg-white text-skBlue">
        <div
          onClick={() => {
            router.push("/lms");
          }}
          className={`${
            !slug ||
            (slug &&
              slug[0] != user.data.username &&
              slug &&
              slug[0] != "my-schedule")
              ? "bg-skBlue text-white"
              : ""
          } box-border h-auto p-4 flex justify-start items-center space-x-2 border-b cursor-pointer`}
        >
          {homeIcon}
          <h4>Home</h4>
        </div>
        <div
          onClick={() => {
            router.push(`/lms/${user.data.username}`);
          }}
          className={`${
            slug && slug[0] == user.data.username ? "bg-skBlue text-white" : ""
          } box-border h-auto p-4 flex justify-start items-center space-x-2 border-b cursor-pointer`}
        >
          {userIcon}
          <h4>Profile</h4>
        </div>
        <div className="box-border h-auto p-4 flex justify-start items-center space-x-2 border-b">
          {bookmarkIcon}
          <h4>Courses</h4>
        </div>
        <div
          onClick={() => {
            router.push(`/lms/my-schedule`);
          }}
          className={`${
            slug && slug[0] == "my-schedule" ? "bg-skBlue text-white" : ""
          } box-border h-auto p-4 flex justify-start items-center space-x-2 border-b cursor-pointer`}
        >
          {calendarIcon}
          <h4>My Schedule</h4>
        </div>
        <div className="box-border h-auto p-4 flex justify-start items-center space-x-2 border-b">
          {leaderboardIcon}
          <h4>Home</h4>
        </div>
        <div
          onClick={() => {
            Logout();
          }}
          className="box-border h-auto p-4 flex justify-start items-center space-x-2 border-b cursor-pointer"
        >
          {logoutIcon}
          <h4>Logout</h4>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
