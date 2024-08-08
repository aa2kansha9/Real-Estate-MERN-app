import {FaSearch} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useState, useEffect } from 'react'

export default function Header() {
    const {currentUser} = useSelector(state=> state.user)
    const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <header className='bg-green-100 shadow-md'>
        <div className='flex justify-between items-centre max-w-6xl mx-auto p-3'>
            <Link to ='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-green-500'>Oma</span>
            <span className='text-blue-900'>Maa</span>
        </h1>
        </Link>
        <form className='bg-green-200 p-3 rounded-lg flex items-center '>
            <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button>
            <FaSearch className='text-green-600'/>
            </button>
        </form>
        <ul className='flex gap-4'>
            <Link to='/'>
            <li className='hidden sm:inline text-green-800 hover:underline'>Home</li>
            </Link>
            <Link to='/about'>
            <li className='hidden sm:inline text-green-800 hover:underline'>About</li>
            </Link>

            <Link to='/profile'>
            {currentUser ? (
                <img className='rounded-full h-7 w-7 object-cover ' src={currentUser.avatar} alt="profile"/>
            ):(
            <li className='text-green-800 hover:underline'>Sign In</li>
           
            )}
             </Link>
            
            
            
        </ul>
        </div>
        
    </header>
  )
}
