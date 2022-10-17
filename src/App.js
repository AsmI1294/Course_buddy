import { useState } from "react";
import Courses from "./components/Courses/Courses";
import Faq from "./components/Faq/Faq";
import Plan from "./components/Plan/Plan";

function App() {
  let [state, setState] = useState(0);
  function handleCourse(total) {
    setState(total);
  }
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 ">
        <div className="col-span-3 ">
          <Courses func={handleCourse} />
        </div>
        <div className="m-3 mt-6">
          <Plan sum={state} />
        </div>
      </div>
      <div className="mx-32 mb-5">
        <p className="text-2xl mb-5">Frequently asked questions</p>
        <Faq />
      </div>
    </div>
  );
}

export default App;
