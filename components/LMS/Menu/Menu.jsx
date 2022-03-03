import { faBookmark, faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { faHome, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";

const Menu = (props) => {
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
          slug[0] != "my-schedule" &&
          slug[0] != "courses")
          ? "text-skBlue"
          : "text-lightGray hover:text-skBlue"
      } cursor-pointer `}
    />
  );

  const bookmarkIcon = (
    <FontAwesomeIcon
      icon={faBookmark}
      size="lg"
      color="lightGray"
      className={`${
        slug && slug[0] == "courses"
          ? "text-skBlue"
          : "text-lightGray hover:text-skBlue"
      } cursor-pointer`}
    />
  );

  const calendarIcon = (
    <FontAwesomeIcon
      icon={faCalendarAlt}
      size="lg"
      color="lightGray"
      className={`cursor-pointer hover:text-subheading`}
    />
  );

  const leaderboardIcon = (
    <FontAwesomeIcon
      icon={faTrophy}
      size="lg"
      color="lightGray"
      className={`cursor-pointer hover:text-subheading`}
    />
  );
  return (
    <>
      <div
        onClick={() => {
          router.push("/lms/", undefined, { scroll: true, shallow: false });
        }}
        className={`flex items-center w-full h-16 pl-10 space-x-4 ${
          !slug ||
          (slug &&
            slug[0] != user.data.username &&
            slug &&
            slug[0] != "my-schedule" &&
            slug[0] != "courses")
            ? "bg-blue-50 rounded-l-full border-skBlue border-r-4 text-skBlue"
            : "text-lightGray"
        }`}
      >
        {homeIcon}
        <p>Home</p>
      </div>
      <div
        onClick={() => {
          router.push("/lms/courses/", undefined, {
            scroll: false,
            shallow: true,
          });
        }}
        className={`flex items-center w-full h-16 pl-10 space-x-4 ${
          slug && slug[0] == "courses"
            ? "bg-blue-50 rounded-l-full border-skBlue border-r-4 text-skBlue"
            : "text-lightGray"
        }`}
      >
        {bookmarkIcon}
        <p>Courses</p>
      </div>
      <div className="flex items-center w-full h-16 pl-10 space-x-4">
        {calendarIcon}
        <p className="text-lightGray">My Schedule</p>
      </div>
      <div className="flex items-center w-full h-16 pl-10 space-x-4">
        {leaderboardIcon}
        <p className="text-lightGray">Leaderboard</p>
      </div>
    </>
  );
};

export default Menu;
