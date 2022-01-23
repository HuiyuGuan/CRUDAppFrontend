import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {


  return (
  <div>
   <h1>Looking Around</h1>  
   <section className='btn-body'>
    {/* <button className='campuses-btn'>Campuses</button> 
    <button className='students-btn'>Students</button>  */}
    <Link to={"/students"} className='link-btn'>Students</Link>
    <Link to={"/campuses"} className='link-btn'>Campuses</Link>
   </section>
   
  </div>
  );
}
