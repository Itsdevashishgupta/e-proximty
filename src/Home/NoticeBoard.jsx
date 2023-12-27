import './Noticeboard.css';
function Noticeboard(){
    return(
        <div className="Noticeboard">
            <div className="NoticeBoard-heading">NOTICE BOARD</div>
            <div className="Notice-Boxes">
               <div className="NoticeBox">
                <div className="news-title">News</div>
                  <div className="News">
                    <ul className="Newslist">
                        <li>Registration</li>
                        <li>Admission 2023-2024</li>
                        <li>View Your Calender</li>
                        <li>Fee structure</li>
                    </ul>
                    <button className='BtnNoticeBoard'>View all</button>
                  </div>
                </div>
               <div className="NoticeBox">
                <div className="events-title">Events</div>
                 <div className="Events">
                   <ul className="Newslist">
                        <li>Sankhnaad</li>
                        <li>Aveg</li>
                        <li>Placement Drives</li>
                        <li>Induction</li>
                    </ul>
                    <button className='BtnNoticeBoard'>View all</button>
                 </div>
                </div>   
            </div>
        </div>
    )
}
export default Noticeboard;