import './DashBoardOuter.css';
function DashBoard(props){
    return(
        <div className='FacultyDashBoardContainer'>           
            {props.children}
        </div>
    );
}
export default DashBoard;