import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
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
            <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
            <FaSearch className='text-green-600'/>
        </form>
        <ul className='flex gap-4'>
            <Link to='/'>
            <li className='hidden sm:inline text-green-800 hover:underline'>Home</li>
            </Link>
            <Link to='/about'>
            <li className='hidden sm:inline text-green-800 hover:underline'>About</li>
            </Link>
            <Link to='/sign-in'>
            <li className='text-green-800 hover:underline'>Sign In</li>
            </Link>
        </ul>
        </div>
        
    </header>
  )
}