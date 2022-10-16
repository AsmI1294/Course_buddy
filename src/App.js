import Courses from "./components/Courses/Courses";

function App() {
  return (
    <div className="grid grid-cols-4 gap-4 ">
      <div className="col-span-3 ">
        <Courses />
      </div>
      <div>plan</div>
    </div>
  );
}

export default App;
