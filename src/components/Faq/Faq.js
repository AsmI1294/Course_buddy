import React from "react";

const Faq = () => {
  return (
    <div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-3"
      >
        <div className="collapse-title text-xl font-medium">
          How Does React Works?
        </div>
        <div className="collapse-content">
          <p>
            React uses a declarative paradigm that makes it easier to reason
            about your application and aims to be both efficient and flexible.
            It designs simple views for each state in your application, and
            React will efficiently update and render just the right component
            when your data changes.
          </p>
        </div>
      </div>
      <div
        tabIndex={1}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-3"
      >
        <div className="collapse-title text-xl font-medium">
          Difference Between Props and States in React JS?
        </div>
        <div className="collapse-content">
          <p>
            props are passed via component properties, they're not reactive.
            State are variables that react will react , updating the UI when
            values changes.
          </p>
        </div>
      </div>
      <div
        tabIndex={2}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-3"
      >
        <div className="collapse-title text-xl font-medium">
          Usage of useEffect
        </div>
        <div className="collapse-content">
          <li>Running on state change: validating input field</li>
          <li>Running on state change: live filtering</li>
          <li>Running on state change: trigger animation on new array value</li>
          <li>
            Running on props change: update paragraph list on fetched API data
            update
          </li>
        </div>
      </div>
    </div>
  );
};

export default Faq;
