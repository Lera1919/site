import Header from '../Components/Header.jsx'
import React, { useEffect, useState } from 'react';
import Contacts from './Contacts.jsx';
import Poster from '../Components/Poster.jsx';

export default function Home(props) {
  // console.log(props)

  const {movies, isLoaded} = props;



        return (
        <>
        <Header />
        <div className='w-full bg-slate-400 '>
      <Poster movies={movies} isLoaded={isLoaded}/> 
        </div>
        </>
    );
  }


  