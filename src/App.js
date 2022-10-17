import { useState } from "react";
import Courses from "./components/Courses/Courses";
import Plan from "./components/Plan/Plan";

function App() {
  let [state, setState] = useState(0);
  function handleCourse(total) {
    setState(total);
  }
  return (
    <div className="grid grid-cols-4 gap-4 ">
      <div className="col-span-3 ">
        <Courses func={handleCourse} />
      </div>
      <div className="m-3 mt-6">
        <Plan sum={state} />
      </div>
    </div>
  );
}

export default App;
