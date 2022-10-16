import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import SingleCourse from "../SingleCourse/SingleCourse";
const Courses = () => {
  const [state, currentState] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => currentState(data));
  }, []);

  return (
    <div className="flex flex-col items-center p-9 pt-5">
      <div>
        <p className="text-2xl ">
          <FontAwesomeIcon icon={faBookOpenReader} /> Course Buddy
        </p>
        <p>Select today's study plan</p>
        <div className="grid grid-cols-3 gap-4 my-6 mt-12 w-fit">
          {state.map((data) => (
            <SingleCourse details={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
