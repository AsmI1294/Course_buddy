import React, { useEffect, useState } from "react";

import Break from "../Break/Break";
import Personal from "../Personal/Personal";
import Practice from "../Practice/Practice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Plan = ({ sum }) => {
  const [state, setState] = useState(0);
  useEffect(() => {
    setState(parseInt(localStorage.getItem("break")));
  }, []);
  function setBreak(id) {
    let time = document.getElementById(id).innerHTML;
    setState(parseInt(time));
    localStorage.setItem("break", time);
  }
  const notif = () => toast("Task Completed!");
  return (
    <div>
      <Personal />
      <Break breakTime={setBreak} />
      <Practice sum={sum} time={state} />
      <button className="btn btn-primary w-full my-10" onClick={notif}>
        Activity Completed
      </button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Plan;
