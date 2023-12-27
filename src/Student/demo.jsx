import React from 'react';

const ScheduleTable = () => {
  const schedule = [
    {
      time: '02:53 PM',
      end:'03:53 PM',
      subject: 'Math',
      faculty: 'John Doe',
      attendance: 'Present',
    },
    {
      time: '09:00 AM',
      subject: 'Science',
      faculty: 'Jane Smith',
      attendance: 'Absent',
    },
    // Add more schedule entries here
  ];
  const d=new Date();
    console.log(d.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}));
    const t=d.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})
    schedule.map((entry, index) => {
        console.log(entry.time);
    })
  return (
    <div className="flex justify-center items-center min-h-screen">
      <table className="w-full bg-white shadow-lg rounded-lg">
        <thead>
          <tr>
            <th className="px-4 py-2">Time</th>
            <th className="px-4 py-2">Subject</th>
            <th className="px-4 py-2">Faculty</th>
            <th className="px-4 py-2">Attendance</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((entry, index) => (
            <tr
              key={index}
              className={(t>entry.time && t<entry.end) ? 'bg-green-600' : 'bg-gray-100'}
            >
              <td className="px-4 py-2">{entry.time}</td>
              <td className="px-4 py-2">{entry.subject}</td>
              <td className="px-4 py-2">{entry.faculty}</td>
              <td className="px-4 py-2">{entry.attendance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;
