import React from "react";
import { FaReact } from "react-icons/fa";
import { BiDna } from "react-icons/bi";
import { IconContext } from "react-icons";

function IconComponent() {
  return (
    <IconContext.Provider value={{ size: "10rem", color: "Teal" }}>
      <div>
        <FaReact />
        <BiDna size="10rem" color="orange" />
      </div>
    </IconContext.Provider>
  );
}

export default IconComponent;
