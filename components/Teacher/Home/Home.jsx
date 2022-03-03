import { useEffect, useState } from "react";
import { socket, SocketContext } from "../../../context/socket";

const Home = () => {
  const [onlineUserCount, setOnlineUserCount] = useState(0);
  const [registeredUserCount, setRegisteredUserCount] = useState(0);

  // useEffect(() => {
  //   let data = {
  //     id: 1,
  //     username: "admin",
  //     type: "1",
  //   };
  //   data ? socket.emit("CONNECT", data) : null;
  // }, []);

  // useEffect(() => {
  //   socket.emit("ONLINE_USER_COUNT");

  //   socket.on("ONLINE_USER_COUNT", (data) => {
  //     setOnlineUserCount(data);
  //   });

  //   socket.emit("REGISTERED_USER_COUNT");

  //   socket.on("REGISTERED_USER_COUNT", (data) => {
  //     setRegisteredUserCount(data);
  //   });
  // });

  return (
    <div className="relative w-full p-10 flex flex-col border min-h-content bg-blue-50 space-y-4">
      <div className="box-border flex flex-col w-full">
        <div className="m-auto box-border h-auto lg:w-1/2 md:w-1/2 sm:w-full xs:w-full flex flex-col py-2 px-4 rounded-2xl space-y-2">
          <div className="w-full bg-skBlue rounded-2xl text-white box-border flex flex-col items-end justify-between p-4 space-y-2">
            <div className="box-border w-full flex justify-between">
              <div className="border-b-2 border-white w-auto">
                <h5 className="font-semibold text-xl">Online user:</h5>
              </div>
              <h4 className="text-4xl text-white font-bold">
                {onlineUserCount}
              </h4>
            </div>
          </div>
        </div>
        <div className="m-auto box-border h-auto lg:w-1/2 md:w-1/2 sm:w-full xs:w-full flex flex-col py-2 px-4 rounded-2xl space-y-2">
          <div className="w-full bg-skBlue rounded-2xl text-white box-border flex flex-col items-end justify-between p-4 space-y-2">
            <div className="box-border w-full flex justify-between">
              <div className="border-b-2 border-white w-auto">
                <h5 className="font-semibold text-xl">Registered User:</h5>
              </div>
              <h4 className="text-4xl text-white font-bold">
                {registeredUserCount}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
