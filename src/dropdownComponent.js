const DropdownComponent = ({ options, selected, onSelectedChange }) => {
  const rendredItems = options.map((option) => {
    if (selected.value === option.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        className="items"
        onClick={() => onSelectedChange(option)}
      >
        {" "}
        {option.label}{" "}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <div className="label">Select the color </div>
        <div className="ui fluid selection dropdown visible active ">
          <i className="dropdown icon"></i>
          <div className=" default text">{selected.label}</div>
          <div className="menu visible transition">{rendredItems}</div>
        </div>
      </div>
    </div>
  );
};

export default DropdownComponent;
