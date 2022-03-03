import { useState } from "react";

import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CalendarControl = (props) => {
  const [months, setMonths] = useState([
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]);

  const calendarBackIcon = (
    <FontAwesomeIcon
      icon={faAngleLeft}
      onClick={() => {
          backClick();
      }}
      size="2x"
      color=""
      className={`text-skBlue cursor-pointer hover:text-subheading`}
    />
  );

  const calendarForwardIcon = (
    <FontAwesomeIcon
      icon={faAngleRight}
      onClick={() => {
        forwardClick();
      }}
      size="2x"
      color=""
      className={`text-skBlue cursor-pointer hover:text-subheading`}
    />
  );

  const forwardClick = () => {
    if (props.date.month + 1 > 11)
      props.setDate({ month: '0', year: parseInt(props.date.year) + 1 });
    else props.setDate({ ...props.date, month: parseInt(props.date.month) + 1 });
  };

  const backClick = () => {
    if (props.date.month - 1 < 0)
      props.setDate({ month: 11, year: parseInt(props.date.year) - 1 });
    else props.setDate({ ...props.date, month: parseInt(props.date.month) - 1 == 0 ? '0' : parseInt(props.date.month) - 1 });
  };


  return (
    <div className="w-full flex items-center justify-center space-x-4">
      {calendarBackIcon}
      <p className="text-heading text-xl">{months[props.date.month]} {props.date.year}</p>
      {calendarForwardIcon}
    </div>
  );
};

export default CalendarControl;
