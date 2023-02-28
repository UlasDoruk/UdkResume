import "./App.css";
import Right from "./components/Right";
import Left from "./components/Left";

function App() {
  return (
    <div className="App bg-slate-700 md:flex justify-center  ">
      <Left />
      <Right />
    </div>
  );
}

export default App;
