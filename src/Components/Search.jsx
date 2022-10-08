import './search.css';
import search from '../image/search.webp' 



function Search() {



  return (

    <div className='search'>
        <input className='search-input' type='text'/>
      <img className='search-icon' src={search} alt='search'/>
    </div>
  );
}

export default Search;
