import CalendarControl from "./CalendarControl";
import CalendarDaysHeader from "./CalendarDaysHeader";
import CalendarWeeksRow from "./CalendarWeeksRow";

import { useHttp } from "../../hooks/http";
import { useState } from "react";
const CalendarLayout = (props) => {
  const [date, setDate] = useState({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });

  const [calendarLoading, calendar] = useHttp(
    `/calendar?${date.month ? `month=${date.month}&` : ""}${
      date.year ? `year=${date.year}&` : ""
    }`,
    [date]
  );

  return (
    <div className="w-full h-auto flex flex-col box-border rounded-2xl p-2">
      <CalendarControl date={date} setDate={setDate} />
      <CalendarDaysHeader />
      {calendar &&
        calendar.map((elm, i) => {
          return <CalendarWeeksRow key={i} days={elm} />;
        })}
    </div>
  );
};

export default CalendarLayout;
