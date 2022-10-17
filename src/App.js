import Courses from "./components/Courses/Courses";
import Plan from "./components/Plan/Plan";

function App() {
  return (
    <div className="grid grid-cols-4 gap-4 ">
      <div className="col-span-3 ">
        <Courses />
      </div>
      <div className="m-3 mt-6">
        <Plan />
      </div>
    </div>
  );
}

export default App;
