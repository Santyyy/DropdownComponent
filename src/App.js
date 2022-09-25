import "./styles.css";
import DropdownComponent from "./dropdownComponent";
import { useState } from "react";

const options = [
  { label: "The color is red ", value: "red" },
  {
    label: "the color is green",
    value: "green"
  },
  {
    label: "the color is blue",
    value: "blue"
  }
];
export default function App() {
  const [selected, setSelected] = useState(options);
  return (
    <div className="App">
      <DropdownComponent
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
    </div>
  );
}
