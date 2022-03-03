const CalendarDaysHeader = (props) => {
  return (
    <div className="space-x-2 w-full flex items-center justify-center text-center text-heading font-semibold box-border">
      <div className="w-10 items-center justify-center box-border">
        <h4>SUN</h4>
      </div>
      <div className="w-10 items-center justify-center box-border">
        <h4>MON</h4>
      </div>
      <div className="w-10 items-center justify-center box-border">
        <h4>TUE</h4>
      </div>
      <div className="w-10 items-center justify-center box-border">
        <h4>WED</h4>
      </div>
      <div className="w-10 items-center justify-center box-border">
        <h4>THU</h4>
      </div>
      <div className="w-10 items-center justify-center box-border">
        <h4>FRI</h4>
      </div>
      <div className="w-10 items-center justify-center box-border">
        <h4>SAT</h4>
      </div>
    </div>
  );
};

export default CalendarDaysHeader;
