const CalendarSecondaryControl = () => {
  return (
    <div className="box-border flex items-center justify-around">
      <button className="box-border w-14 h-8 bg-skBlue text-white rounded-lg font-semibold">
        Day
      </button>
      <button className="box-border w-14 h-8 px-4 py-2 rounded-lg font-semibold">Month</button>
      <button className="box-border w-14 h-8 px-4 py-2 rounded-lg font-semibold">Year</button>
    </div>
  );
};

export default CalendarSecondaryControl;
