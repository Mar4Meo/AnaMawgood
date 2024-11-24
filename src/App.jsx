import "./public/css/App.css";

import { Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage/Index";
import CheckPage from "./pages/CheckPage/Index";
import TalebPage from "./pages/TalebPage/Index";
import Mo3alemPage from "./pages/Mo3alemPage/Index";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mo" element={<CheckPage />} />
          <Route path="/taleb" element={<TalebPage />} />
          <Route path="/mo3alem" element={<Mo3alemPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
