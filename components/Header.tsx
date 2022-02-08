import React , { useState }from 'react';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GroupIcon from '@mui/icons-material/Group';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

interface selectionRangeInterface {
  key: string;
  startDate: Date;
  endDate: Date;

}


function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests ] = useState(1);

  const handleSelect = (ranges: any) => {
    console.log(ranges)
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  // const handleGuest = ()

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  }

 

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

      {searchInput && (
        <div className='flex flex-col col-span-3 mx-auto'>
          <DateRangePicker
          ranges={[selectionRange]}
          minDate={new Date()}
          rangeColors={["#FF5A5F"]}
          onChange={handleSelect}
          />
          <div className='flex items-center border-b mb-4'>
            <h2 className='text-2xl flex-grow font-semibold '>Number of Guests</h2>
            <PeopleAltIcon className="h-8"/>
            <input 
            value={numberOfGuests}
            onChange={(e) => setNumberOfGuests(parseInt(e.target.value))}
            type="number" 
            className='w-12 pl-2 text-lg outline-none text-red-400'/>
          </div>
        </div>
      )}
      
      
      </header>;
}

export default Header;
