import React from "react";

import Break from "../Break/Break";
import Personal from "../Personal/Personal";
import Practice from "../Practice/Practice";

const Plan = () => {
  return (
    <div>
      <Personal />
      <Break />
      <Practice />
      <button className="btn btn-primary w-full my-10">
        Activity Completed
      </button>
    </div>
  );
};

export default Plan;
