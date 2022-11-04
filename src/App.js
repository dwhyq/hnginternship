import "./App.css";
import { Routes, Route } from "react-router-dom";
import PreTask from "./component/preTask";
import Contact from "./component/contact-page/contact.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PreTask />} />
        <Route path="/contact" element={<Contact name="{name}" />} />
      </Routes>
    </div>
  );
}

export default App;
