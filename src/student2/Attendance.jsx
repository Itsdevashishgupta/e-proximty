import './Attendance.css';
import greentick from '../Images/greeenTick.png';
import redtick from '../Images/RedCross.png';
function Attendance(){
   return(
    <div className='AttendanceOuter'>
         <h3>Today's Attendance</h3>
         <div className='AttendanceTableOuter'>
            <table>
              <tr>
                <th>Subject</th>
                <th>Student Name</th>
                <th>Marked by Student</th>
                <th>Marked by teacher</th>
              </tr>
              <tr>
                <td>COA</td>
                <td>Anjali Verma</td>
                <td>
                    <img src={greentick} className='greentick'/>
                    <img src={redtick} className='redtick'/>
                    
                </td>
                <td>
                    <img src={greentick} className='greentick'/>
                    <img src={redtick} className='redtick'/>
                </td>               
              </tr>
              <tr>
                <td>COA</td>
                <td>Anjali Verma</td>
                <td>
                    <img src={greentick} className='greentick'/>
                    <img src={redtick} className='redtick'/>
                </td>
                <td>
                   <img src={greentick} className='greentick'/>
                    <img src={redtick} className='redtick'/>
                </td>               
              </tr>
              <tr>
                <td>COA</td>
                <td>Anjali Verma</td>
                <td>
                <img src={greentick} className='greentick'/>
                    <img src={redtick} className='redtick'/>
                </td>
                <td>
                <img src={greentick} className='greentick'/>
                    <img src={redtick} className='redtick'/>
                </td>               
              </tr>
              <tr>
                <td>COA</td>
                <td>Anjali Verma</td>
                <td>
                <img src={greentick} className='greentick'/>
                    <img src={redtick} className='redtick'/>
                </td>
                <td>
                <img src={greentick} className='greentick'/>
                    <img src={redtick} className='redtick'/>
                </td>               
              </tr>
            </table>
         </div>
    </div>
   );
}
export default Attendance;