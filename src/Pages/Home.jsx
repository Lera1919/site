import Header from '../Components/Header.jsx'
import React, { useEffect, useState } from 'react';
import Contacts from './Contacts.jsx';
import Poster from '../Components/Poster.jsx';

export default function Home(props) {
  // console.log(props)

  const {movies, isLoaded} = props;
  const [index, setIndex] = useState(0);
  
          

  useEffect(()=>{
      setIndex(Math.floor(Math.random() * 19))
          
  },[])



        return (
        <>
        <Header />
        <div className='w-full bg-slate-400 '>
      <Poster movies={movies} index={index} isLoaded={isLoaded}/> 
        </div>
        </>
    );
  }


  