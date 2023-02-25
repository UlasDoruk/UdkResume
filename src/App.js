import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Resume from "./components/pages/Resume";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <div className="App bg-slate-800">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </div>
  );
}

export default App;
