import React, { useContext } from "react";
import { UserContext, RoleContext } from "../../App.js";

function ComponentC() {
  const Role = useContext(RoleContext);
  const Person = useContext(UserContext);
  return (
    <div>
      <h3>Component C </h3>
      {`With User as ${Person.UserName} (${Person.Sex}) and Role as ${Role}`}
    </div>
  );
}

export default ComponentC;
