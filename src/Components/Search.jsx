import './search.css';
// import search from '../image/search.webp' 
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'


function Search() {



  return (

    <div className='search'>
        <input className='search-input' type='text'/>
      {/* <img className='search-icon' src={search} alt='search'/> */}
      <MagnifyingGlassIcon className="h-6 w-6" />
      
    </div>
  );
}

export default Search;
