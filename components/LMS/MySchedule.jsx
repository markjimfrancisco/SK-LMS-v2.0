import { useState } from "react";
import CalendarControl from "../Calendar/CalendarControl";
import CalendarDayView from "../Calendar/CalendarDayView";
import CalendarSecondaryControl from "../Calendar/CalendarSecondaryControl";

const MySchedule = () => {
  const [date, setDate] = useState({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });

  return (
    <div className="box-border h-screen w-full bg-blue-50 flex flex-col py-2 space-y-2">
      <div className="box-border w-full bg-white h-auto flex flex-col p-4 space-y-4">
        <h4 className="text-xl font-bold text-subheading">My Schedule</h4>
        <CalendarControl date={date} setDate={setDate} />
        <CalendarSecondaryControl />
        <CalendarDayView />
      </div>
    </div>
  );
};

export default MySchedule;
