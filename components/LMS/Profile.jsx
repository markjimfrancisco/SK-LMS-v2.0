import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import AnalyticsSummary from "./AnalyticsSummary";

const Profile = () => {
  const user = useSelector((state) => state.UserReducer);

  const editProfilePhoto = (
    <FontAwesomeIcon
      className="ml-2 mt-2 text-skBlue"
      icon={faPen}
      size={`xl`}
    />
  );

  return (
    <div className="box-border h-screen w-full bg-blue-50 flex flex-col py-2 space-y-2">
      <div className="box-border relative w-full flex flex-row items-center justify-center">
        <div className="box-border relative w-1/2 rounded-full">
          <img src={`${process.env.ASSETS_DOMAIN}/public/avatar.png`} />
          <div
            className={`absolute bottom-5 right-5 bg-blue-50 h-8 w-8 rounded-full`}
          >
            {editProfilePhoto}
          </div>
        </div>
      </div>
      <div className="box-border relative w-full flex flex-col items-center justify-center">
        <h1 className="font-bold text-2xl text-skBlue">{`${user.data.firstname} ${user.data.lastname}`}</h1>
        <h4 className="text-lg text-subheading">{`@${user.data.username}`}</h4>
      </div>
      <div className="box-border relative w-full flex flex-col items-center justify-center px-4">
        <div className="box-border rounded-xl shadow bg-white w-full h-auto flex flex-col py-2 px-4">
          <div className="flex flex-row items-center space-x-4">
            <div className="w-1/4">
              <h1 className="font-semibold text-heading">Name</h1>
            </div>
            <div>
              <h1>{`${user.data.firstname} ${user.data.lastname}`}</h1>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <div className="w-1/4">
            <h1 className="font-semibold text-heading">Username</h1>
            </div>
            <div>
              <h1>{user.data.username}</h1>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <div className="w-1/4">
              <h1 className="font-semibold text-heading">Email</h1>
            </div>
            <div>
              <h1>{user.data.email}</h1>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <div className="w-1/4">
              <h1 className="font-semibold text-heading">Mobile</h1>
            </div>
            <div>
              <h1>{user.data.mobile}</h1>
            </div>
          </div>
        </div>
      </div>
      <AnalyticsSummary />
    </div>
  );
};

export default Profile;
