import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";

const MiniProfile = () => {
  const router = useRouter();
  const user = useSelector((state) => state.UserReducer);

  return (
    <div onClick={() => router.push(`/lms/${user.data.username}`)} className="box-border w-auto flex flex-row space-x-2 cursor-pointer">
      <img className="h-12 rounded-full border" src="/images/avatar.png" />
      <div className="box-border flex flex-col">
        <p className="text-heading font-semibold truncate">
          {user.data && `${user.data.firstname} ${user.data.lastname}`}
        </p>
        <p className="text-subheading">ID: 000000</p>
      </div>
    </div>
  );
};

export default MiniProfile;
