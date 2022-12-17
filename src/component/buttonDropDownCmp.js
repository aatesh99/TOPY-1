import React from "react";
import Button from "./Button";
import DropDownCard from "./dropDownCard";
const sampleData = new Array(7).fill("item name");
const ButtonWithDropDownCmp = () => {
  const [open, setOpen] = React.useState(false);
  const drop = React.useRef(null);
  function handleClick(e) {
    if (!e.target.closest(`.${drop.current.className}`) && open) {
      setOpen(false);
    }
  }
  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  return (
    <div
      className="dropdown"
      ref={drop}
      style={{
        position: "relative",
        margin: "16px",
        width: "auto",
        display: "inline-block"
      }}
    >
      <Button onClick={() => setOpen(open => !open)} />
      {open && <DropDownCard data={sampleData} setOpen={setOpen} />}
    </div>
  );
};

export default ButtonWithDropDownCmp;
