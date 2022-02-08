import React , { useState }from 'react';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';



function Header() {
  const [searchInput, setSearchInput] = useState("");

  console.log(searchInput)

  return <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 ">
      
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
            src='https://links.papareact.com/qd3'
            layout='fill'
            objectFit='contain' objectPosition="left"
        />
      </div>

      {/* Middle - search */}
      <div className=" flex items-center lg:border-2 rounded-full py-2 lg:shadow-sm">
          
          <input 
          value = {searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400" type="text" placeholder="Start your search"
          />
          <SearchIcon className="hidden lg:inline-flex  h-8 w-8 cursor-pointer bg-red-400 text-white rounded-full p-2 mx-2"/>
      
      </div>
      
      {/* right */}
      <div className="flex items-center space-x-4 justify-end text-gray-600">
        <p className='hidden md:inline cursor-pointer'>Become a Host</p>
        <LanguageIcon className="h-6 cursor-pointer"></LanguageIcon>
        <div className='flex items-center space-x-1 border-2 rounded-full p-1'>
          <MenuIcon className="h-6 cursor-pointer"></MenuIcon>
          <AccountCircleIcon className="h-6 cursor-pointer"/>
          
        </div>
      </div>

      {searchInput && <h1>Hello WOrld</h1>}
      
      
      </header>;
}

export default Header;
