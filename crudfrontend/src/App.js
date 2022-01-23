import './App.css';
import Students from "./components/Students";
import StudentForm from "./components/StudentForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Campuses from "./components/Campuses";
import NavBar from './components/NavBar';

export default function App() {

  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/students" element={<Students />}></Route>
          <Route path="/campuses" element={<Campuses />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

