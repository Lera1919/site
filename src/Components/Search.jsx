import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

function Search() {
  return (

    <div className='flex flex item-center'>
      <input className='w-64 h-6 border border-slate-500' type='text'/>
      <MagnifyingGlassIcon className="h-6 w-6" />
    </div>
  );
}

export default Search;
