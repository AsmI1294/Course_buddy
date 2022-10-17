import React from "react";

const Practice = () => {
  return (
    <div>
      <p className="text-xl mt-6 font-bold">Practice Details</p>
      <div className="h-16 rounded-xl bg-amber-50 mt-3 shadow-md grid grid-cols-2 py-2 place-items-center">
        <p className="font-bold ">Exercise time</p>
      </div>
      <div className="h-16 rounded-xl bg-amber-50 mt-3 shadow-md grid grid-cols-2 py-2 place-items-center">
        <p className="font-bold ">Break time</p>
      </div>
    </div>
  );
};

export default Practice;
