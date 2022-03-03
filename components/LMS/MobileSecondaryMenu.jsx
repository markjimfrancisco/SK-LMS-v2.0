import { faBell, faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";
import MiniProfile from "../../components/NavBar/MiniProfile";

const MobileSecondaryMenu = () => {
  const user = useSelector((state) => state.UserReducer);
  const router = useRouter();

  const {slug}  = router.query;

  const questionMarkIcon = (
    <FontAwesomeIcon
      icon={faQuestionCircle}
      size="lg"
      className={`text-skBlue cursor-pointer justify-self-end`}
    />
  );

  const gearIcon = (
    <FontAwesomeIcon
      onClick={() => {
        router.push('/lms/settings', undefined, {shallow:true, scroll: false})
      }}
      icon={faCog}
      size="lg"
      className={`text-skBlue cursor-pointer justify-self-end`}
    />
  );

  const bellIcon = (
    <FontAwesomeIcon
      icon={faBell}
      size="lg"
      className={`text-skBlue cursor-pointer justify-self-end`}
    />
  );

  return (
    <div className="w-full p-4 flex flex-row items-center justify-between bg-white">
      {slug && slug[0] == user.data.username ? <h1 className="font-bold text-lg text-skBlue">Profile</h1> : <MiniProfile />}
      <div className="w-auto box-border flex flex-row space-x-4">
        {questionMarkIcon}
        {gearIcon}
        {bellIcon}
      </div>
    </div>
  );
};

export default MobileSecondaryMenu;
