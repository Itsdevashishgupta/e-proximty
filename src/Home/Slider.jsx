import './Slider.css';
import Marquee from "react-fast-marquee";
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../Images/college.jpeg';
function Slider(){
 return(
  <div className='sliderOuter'>
      <Carousel>
        <Carousel.Item>
          <div className="SliderOpacity">
          <img/>
          <Carousel.Caption>
                <h2 className='sliderCaption'>Welcome To E-Proximity
                <p className='sliderLowerCaption'>The Largest E-portal for College Management</p>
                </h2>    
          </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="SliderOpacity">
          <img />
          <Carousel.Caption>
              <h2 className='sliderCaption'>Welcome To E-Proximity
                <p className='sliderLowerCaption'>The Largest E-portal for College Management</p>
              </h2>  
          </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="SliderOpacity">
          <img/>
          <Carousel.Caption>
              <h2 className='sliderCaption'>Welcome To E-Proximity
                <p className='sliderLowerCaption'>The Largest E-portal for College Management</p>
              </h2>    
          </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
      
      <div className='LatestAnnouncementOuter'>
        <div className="LatestAnnouncementCaption"><p>Latest Announcement !</p></div>
        <div className='LatestAnnouncementTriangle'></div>
        <div className="LatestAnnouncement">
          <Marquee scrollamount='20000'direction='left'> 
          Addmission-Open<div className='line'></div>Register Now<div className='line'></div>Fee Details<div className='line'></div>Scholarship 2023<div className='line'></div>Events
          </Marquee>
        </div>
      </div>
  </div>
 );
  
}
export default Slider;