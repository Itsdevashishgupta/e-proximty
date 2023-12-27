import React, { useState } from 'react';
import { Calendar } from './calendar';
import timetabledata from './TIMETABLE.json';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import Timetable from './timetable';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';

const Dashboard = () => {

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Extract the day from the selected date
    const dayOfWeek = date.getDay();
    console.log('Selected Day:', dayOfWeek);
  };

  const d=new Date();
    console.log(d.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}));
    const t=d.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})
    const [value,set]=useState();
    console.log(value);
     console.log(value===5? "fri":"mon");
     console.log(typeof(value));
    
  return (<>
  <Navbar/>
  <div className=' flex justify-center items-center max-sm:flex-col-reverse w-[90%] h-[80vh] m-auto text-white'>
  <div className='w-1/3 bg-[#492ba0] max-sm:w-full mx-11 text-white'>
      <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DateCalendar value={value} onChange={(newValue) => set(newValue)} label="Controlled calendar" className=' text-white'/>

    </LocalizationProvider>
    </div>
    <div className="App w-2/3 flex justify-center bg-[#492ba0] mx-10 max-sm:w-full max-sm:my-10 ">
      <Timetable timetable={timetabledata} val={value}/>
    </div>
    </div>

</>
  );
};

export default Dashboard;
