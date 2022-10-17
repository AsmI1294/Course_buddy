import React from "react";

const Break = ({ breakTime }) => {
  return (
    <div>
      <p className="text-xl mt-6 font-bold">Add a break</p>
      <div className="h-fit rounded-xl bg-amber-50 mt-3 shadow-md grid grid-cols-5 divide-x py-2">
        <button
          className="btn btn-circle btn-outline mx-auto "
          onClick={() => breakTime("a")}
        >
          <span id="a">20 </span>m
        </button>
        <button
          className="btn btn-circle btn-outline mx-auto"
          onClick={() => breakTime("b")}
        >
          <span id="b">30 </span>m
        </button>
        <button
          className="btn btn-circle btn-outline mx-auto"
          onClick={() => breakTime("c")}
        >
          <span id="c">40 </span>m
        </button>
        <button
          className="btn btn-circle btn-outline mx-auto"
          onClick={() => breakTime("d")}
        >
          <span id="d">50 </span>m
        </button>
        <button
          className="btn btn-circle btn-outline mx-auto"
          onClick={() => breakTime("e")}
        >
          <span id="e">60 </span>m
        </button>
      </div>
    </div>
  );
};

export default Break;
