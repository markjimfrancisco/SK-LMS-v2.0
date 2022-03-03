const Select = ({id, classNames, selected, setValue, placeholder, label, compare, value, options}) => {
    return (
      <select
        id={id}
        className={classNames}
        defaultValue={selected}
        onChange={(e) => setValue(e.target.value)}
      >
        <option value="">------ {placeholder} ------</option>
        {options &&
          options.map((option, index) => {
            return (
              <option
                selected={option[compare] == selected}
                key={index}
                value={option[value]}
              >
                {option[label]}
              </option>
            );
          })}
      </select>
    );
  };

  export default Select;