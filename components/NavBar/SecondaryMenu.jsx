import {
  faBell,
  faChevronDown,
  faCog,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { UserLogout } from "../../redux/actions/UserAction";
import MiniProfile from "./MiniProfile";

const SecondaryMenu = () => {
  const dispatch = useDispatch();

  const chevronDown = <FontAwesomeIcon icon={faChevronDown} />;

  const questionMarkIcon = (
    <FontAwesomeIcon
      icon={faQuestionCircle}
      size="lg"
      className={`text-skBlue cursor-pointer`}
    />
  );

  const gearIcon = (
    <FontAwesomeIcon
      icon={faCog}
      size="lg"
      className={`text-skBlue cursor-pointer`}
    />
  );

  const bellIcon = (
    <FontAwesomeIcon
      icon={faBell}
      size="lg"
      className={`text-skBlue cursor-pointer`}
    />
  );
  return (
    <div className="z-20 fixed right-0 flex h-20 w-96 mr-4 items-center justify-end space-x-4">
      <div className="h-1/2 flex items-center space-x-2 border-r px-4 ">
        {questionMarkIcon}
        {gearIcon}
        {bellIcon}
      </div>
      <div className="group relative flex items-center space-x-2">
        <MiniProfile />
        {chevronDown}
        <div className="hidden absolute top-12 right-0 w-auto h-auto px-4 py-2 bg-white rounded-lg shadow font-semibold group-hover:block">
          <div
            onClick={(e) => {
              dispatch(UserLogout(false))
            }}
            className="py-2 cursor-pointer"
          >
            Logout
          </div>
        </div>
      </div>
      {/* <div className="flex items-center space-x-2">
          <img
            className="h-16 rounded-full border"
            src="/images/avatar.png"
          />
          <div className="flex flex-col">
            <p className="text-heading font-semibold">Firstname Lastname</p>
            <p className="text-subheading">ID: 000000</p>
          </div>
          {angleDownIcon}
        </div> */}
    </div>
  );
};

export default SecondaryMenu;
