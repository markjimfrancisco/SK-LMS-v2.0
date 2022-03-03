import CalendarLayout from "../Calendar/CalendarLayout";
import AnalyticsSummary from "./AnalyticsSummary";
import ModuleActivityWrapper from "./ModuleActivity/ModuleActivityWrapper";

const Dashboard = () => {
  return (
    <div className="box-border h-screen w-full bg-blue-50 flex flex-col py-2 space-y-2">
      <div className="w-full h-auto box-border relative px-4">
        <img className="w-full h-full" src="/images/dashboard-content-1.svg" />
        <p className="absolute top-2 left-8 text-skBlue font-bold">
          Hi Firstname,
        </p>
      </div>
      <AnalyticsSummary />
      <div className="box-border h-auto w-full flex flex-col py-2 px-4 rounded-2xl">
        <CalendarLayout />
      </div>
      <ModuleActivityWrapper />
    </div>
  );
};

export default Dashboard;
