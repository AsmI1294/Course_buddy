import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
const Personal = () => {
  return (
    <div>
      <div className="avatar h-16 w-full">
        <div className="w-16  rounded-xl">
          <img src="https://placeimg.com/192/192/people" alt="avatar" />
        </div>
        <div className="ml-3 w-full">
          <p className="text-xl font-bold">Ittehad</p>
          <p>
            <FontAwesomeIcon icon={faLocationDot} /> Dhaka, Bangladesh
          </p>
        </div>
      </div>
      <div className="h-28 rounded-xl bg-amber-50 mt-3 shadow-md grid grid-cols-3 divide-x">
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl">8</p>
          <p>Courses</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p>
            <span className="text-2xl">5</span>th
          </p>
          <p>Semester</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p>
            <span className="text-2xl">67</span> days
          </p>
          <p>Next Exam</p>
        </div>
      </div>
    </div>
  );
};

export default Personal;
