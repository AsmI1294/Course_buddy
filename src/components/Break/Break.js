import React from "react";

const Break = () => {
  return (
    <div>
      <p className="text-xl mt-6 font-bold">Add a break</p>
      <div className="h-fit rounded-xl bg-amber-50 mt-3 shadow-md grid grid-cols-5 divide-x py-2">
        <button className="btn btn-circle btn-outline mx-auto">
          <span>20 </span>m
        </button>
        <button className="btn btn-circle btn-outline mx-auto">
          <span>30 </span>m
        </button>
        <button className="btn btn-circle btn-outline mx-auto">
          <span>40 </span>m
        </button>
        <button className="btn btn-circle btn-outline mx-auto">
          <span>50 </span>m
        </button>
        <button className="btn btn-circle btn-outline mx-auto">
          <span>60 </span>m
        </button>
      </div>
    </div>
  );
};

export default Break;
