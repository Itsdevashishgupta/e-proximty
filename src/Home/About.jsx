import './About.css';
import Image from '../Images/mam.jpg';
function About(){
    return(
        <div className="AboutOuter">
            <div className="AboutDescriptionSection">
                <span className="AboutDescriptionHeading">
                    <span className="Aboutunderline">About</span> E-proximity
                </span>
                <div className="AboutDescription">
                  <p>
                    E-Proximity is the largest E-portal for College Management System. An E-Proximity is the solution that enables the institutes to conduct online admissions, 
                    generate reports, create ID cards, enable online communication, manage curriculum, time tables and conduct online evaluations, track student progress, 
                    conduct data analysis, teach remotely, and handle enquiries and ...
                  </p>
                </div>
            </div>
            <div className="AboutPhotoSection">
                <div className='About-image-caption'>
                    <img src={Image} className="AboutImg"/>
                    <div className='caption'>
                    <span className="AboutImageCaption">Professor Rachna Aasthna</span><br/>
                    <span className="AboutImageCaptionbottom">Director AITH,kanpur</span> 
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;