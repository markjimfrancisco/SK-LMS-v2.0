import { useEffect, useState } from "react";
import { socket, SocketContext } from "../../../context/socket";
import { useHttp } from "../../../hooks/http";

import { BarChart, XAxis, YAxis, Bar, Tooltip, CartesianGrid } from "recharts";
import { useDispatch } from "react-redux";
import { UserLogout } from "../../../redux/actions/UserAction";

const Home = () => {
  const dispatch = useDispatch()

  const [studentPerSchoolsCountLoading, studentPerSchoolCount] = useHttp(
    "/analytics/count/student/school",
    []
  );

  const [studentWithSchoolsCountLoading, studentWithSchoolsCount] = useHttp(
    "/analytics/count/student/other",
    []
  );

  const [studentFavoriteSubjectCountLoading, studentFavoriteSubjectCount] = useHttp(
    "/analytics/count/student/favoritesubject",
    []
  );

  const [registeredUserCountLoading, registeredUserCount] = useHttp(
    "/analytics/count/student/all",
    []
  );

  useEffect(() => {
    if(studentPerSchoolCount && studentWithSchoolsCount && studentFavoriteSubjectCount && registeredUserCount && !studentPerSchoolCount.success && !studentWithSchoolsCount.success && !studentFavoriteSubjectCount.success && !registeredUserCount.success)
      dispatch(UserLogout(false))
  },[studentPerSchoolCount, studentWithSchoolsCount, studentFavoriteSubjectCount, registeredUserCount])

  return (
    <div className="relative w-full p-10 flex flex-col border min-h-content bg-blue-50 space-y-4">
      <div className="box-border flex flex-col w-full space-y-4">
        <div className="w-full flex">
        <div className="m-auto box-border h-auto lg:w-1/2 md:w-1/2 sm:w-full xs:w-full flex flex-col py-2 px-4 rounded-2xl space-y-2">
          <div className="w-full bg-skBlue rounded-2xl text-white box-border flex flex-col items-end justify-between p-4 space-y-2">
            <div className="box-border w-full flex justify-between">
              <div className="border-b-2 border-white w-auto">
                <h5 className="font-semibold text-xl">Online User:</h5>
              </div>
              <h4 className="text-4xl text-white font-bold">
              0
              </h4>
            </div>
          </div>
        </div>        <div className="m-auto box-border h-auto lg:w-1/2 md:w-1/2 sm:w-full xs:w-full flex flex-col py-2 px-4 rounded-2xl space-y-2">
          <div className="w-full bg-skBlue rounded-2xl text-white box-border flex flex-col items-end justify-between p-4 space-y-2">
            <div className="box-border w-full flex justify-between">
              <div className="border-b-2 border-white w-auto">
                <h5 className="font-semibold text-xl">Registered User:</h5>
              </div>
              <h4 className="text-4xl text-white font-bold">
                {registeredUserCount && registeredUserCount.result}
              </h4>
            </div>
          </div>
        </div>
        </div>
        <div className="bg-white box-border h-auto lg:w-auto md:w-auto sm:w-full xs:w-full flex flex-col py-2 px-4 rounded-2xl space-y-2">
          <h1 className="text-heading font-semibold text-xl">Student Count Per School</h1>
          <BarChart
            className="m-auto w-auto h-auto"
            height={250}
            width={800}
            data={
              studentPerSchoolCount &&
              studentPerSchoolCount.success &&
              studentPerSchoolCount.result
            }
            onClick={e => console.log(e)}
          >
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Tooltip />
            <XAxis dataKey="name" />
            <YAxis dataKey="count" />
            <Bar dataKey="count" fill="rgba(0, 128, 246, var(--tw-bg-opacity))" />
          </BarChart>
        </div>
        <div className="bg-white box-border h-auto lg:w-auto md:w-auto sm:w-full xs:w-full flex flex-col py-2 px-4 rounded-2xl space-y-2">
          <h1 className="text-heading font-semibold text-xl">Student with Other School Count</h1>
          <BarChart
            className="m-auto w-auto h-auto"
            height={250}
            width={800}
            data={
              studentWithSchoolsCount &&
              studentWithSchoolsCount.success &&
              studentWithSchoolsCount.result
            }
            onClick={e => console.log(e)}
          >
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Tooltip />
            <XAxis dataKey="name" />
            <YAxis dataKey="count" />
            <Bar dataKey="count" fill="rgba(0, 128, 246, var(--tw-bg-opacity))" />
          </BarChart>
        </div>
        <div className="bg-white box-border h-auto lg:w-auto md:w-auto sm:w-full xs:w-full flex flex-col py-2 px-4 rounded-2xl space-y-2">
          <h1 className="text-heading font-semibold text-xl">Student Favorite Subject</h1>
          <BarChart
            className="m-auto w-auto h-auto"
            height={250}
            width={800}
            data={
              studentFavoriteSubjectCount &&
              studentFavoriteSubjectCount.success &&
              studentFavoriteSubjectCount.result
            }
            onClick={e => console.log(e)}
          >
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Tooltip />
            <XAxis dataKey="name" />
            <YAxis dataKey="count" />
            <Bar dataKey="count" fill="rgba(0, 128, 246, var(--tw-bg-opacity))" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Home;
