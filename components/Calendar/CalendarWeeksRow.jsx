import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CalendarWeeksRow = (props) => {
  const calendarMarkIcon = (
    <FontAwesomeIcon
      icon={faCircle}
      className={`w-2 h-2 text-skBlue absolute bottom-0`}
    />
  );

  return (
    <div className="space-x-2 w-full flex items-center justify-center text-center text-heading font-semibold box-border">
      {
          props.days.map((elm , i) => {
              return (
                <div key={i} className={`${elm.present ? 'bg-skBlue text-white rounded-full':''} relative w-10 h-10 flex flex-col items-center justify-center box-border`}>
                    <h4>{elm && elm.day}</h4>
                    {elm.events && calendarMarkIcon}
              </div>
              )
          })
      }
    </div>
  );
};

export default CalendarWeeksRow;
