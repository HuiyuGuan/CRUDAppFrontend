import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {


  return (
  <div>
   <h1>Looking Around</h1>  
   <section className='btn-body'>  
    <Link to={"/students"} className='link-btn'>Students</Link>   
    <Link to="/addcampus">
                 <button>Add campus </button>
     </Link> 
   </section>
   
  </div>
  );
}
