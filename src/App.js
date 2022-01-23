import './App.css';
import {Routes, Route} from "react-router-dom";
import {NavBar, Home} from './components';
import {InputCampuses} from './components/campuses';
import api from '../src/api/campuses';
import { useEffect , useState} from 'react';
import ListCampuses from './components/campuses/ListCampuses';



function App() {

  const [campuses, setCampuses] = useState([]);

  console.log(campuses)

  const fetchCampuses = async () => {
    const res = await api.get("/");
    return res.data;
  }

  const addCampusHandler = async (campus) => {
    console.log(campus);
    const req = {
      //id: i
      ...campus,
    };

    const res = await api.post("/", req);
    console.log(res);
    setCampuses([...campuses,res.data]);
  };





  useEffect(() => {
    const getAllCampuses = async () => {
      const allCampuses = await fetchCampuses();
      if(allCampuses) setCampuses(allCampuses);
    };

    getAllCampuses();
  },[]);

  return (
    <div className="App">
      <NavBar fixed="top" />
      <header className="App-header"></header>
      <Routes>
        <Route exact path="/" element={<Home /> } />   
        <Route exact path="/campuses" element={<ListCampuses campuses={campuses} />} />  
        <Route exact path="/add" element={<InputCampuses campuses={campuses}
         setCampuses={setCampuses}
         addCampusHandler={addCampusHandler} 
         api={api}
         />} />             
      </Routes>
    </div>
  );
}

export default App;
