import React from "react";

const SingleCourse = ({ details, func }) => {
  const time = parseInt(details.time.slice(0, 2));

  return (
    <div>
      <div className="card w-72  bg-amber-50 shadow-xl">
        <figure className="px-5 pt-5">
          <img
            src={details.image}
            alt="books not found"
            className="rounded-xl h-72"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title mx-auto">{details.title}</h2>
          <p className="text-slate-500 line-clamp-3 ">{details.description}</p>
          <p>Chapters: {details.chapter}</p>
          <p>Time required: {time} min</p>
          <div className="card-actions w-full">
            <button
              className="btn btn-primary w-full"
              id={details.id}
              onClick={() => func(time, details.id)}
            >
              Add to list
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
