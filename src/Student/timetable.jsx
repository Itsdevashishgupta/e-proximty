import React from 'react'

const Timetable = ({timetable}) => {
  const d=new Date();
  const t=d.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})
  return (
    <>
       <div >
      {timetable.days.map((day, index) => (
        <div key={index}>
          <table>
            <thead>
              <tr className=' my-3'>
                <th>Time</th>
                <th>Subject</th>
                <th>Faculty</th>
                <th>Attendence</th>
              </tr>
            </thead>
            <tbody>
              {day.schedule.map((entry, entryIndex) => (
                <tr key={entryIndex} className={(t>entry.time)?'bg-green-600 text-white':"bg-white"} >
                  <td className=''>{entry.time}</td>
                  <td className=' '>{entry.subject}</td>
                  <td className=' '>{entry.faculty}</td>
                  <td className=' '>{entry.attendence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
</>
  )
}

export default Timetable