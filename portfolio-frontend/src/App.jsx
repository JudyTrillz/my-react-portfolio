import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./container/home/Home";
import Upload from "./container/upload/Upload";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </>
  );
}

export default App;
