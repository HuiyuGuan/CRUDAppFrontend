import './App.css';
import {Routes, Route} from "react-router-dom";
import {NavBar, Home} from './components';
import AddCampus from './components/campuses/AddCampus';
import CampusView from './components/campuses/CampusView';
import SingleCampus from './components/campuses/SingleCampus';



function App() {

  return (
    <div className="App">
      <NavBar fixed="top" />
      <header className="App-header"></header>
     
      <Routes>
        <Route exact path="/" element={<Home /> } />   
         <Route exact path="/campuses" element={<CampusView />} />
         <Route exact path="/addcampus" element={<AddCampus />} />    
         <Route exact path="/campuses/:i" element={<SingleCampus />} />

      </Routes>
    </div>
  );
}

export default App;
