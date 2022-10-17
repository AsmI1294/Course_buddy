import React, { useState } from "react";

import Break from "../Break/Break";
import Personal from "../Personal/Personal";
import Practice from "../Practice/Practice";

const Plan = ({ sum }) => {
  const [state, setState] = useState(0);

  function setBreak(id) {
    let time = document.getElementById(id).innerHTML;
    setState(parseInt(time));
    localStorage.setItem("break", time);
  }
  return (
    <div>
      <Personal />
      <Break breakTime={setBreak} />
      <Practice sum={sum} time={state} />
      <button className="btn btn-primary w-full my-10">
        Activity Completed
      </button>
    </div>
  );
};

export default Plan;
