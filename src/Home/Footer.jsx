import logo from '../Images/mainlogo.png';
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon ,MDBBtn} from 'mdb-react-ui-kit';
import "@fortawesome/fontawesome-free/css/all.min.css";
function Footer(){
    return(
        <MDBFooter className='text-center text-lg-start text-muted footerbody' style={{backgroundColor:"#492BA0"}}>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
            <div className='me-5 d-none d-lg-block'>
              <span  style={{color:"white"}}>Get connected with us on social networks:</span>
            </div>
              <div style={{color:"white"}}>
              <a href='' className='me-4 text-reset'><MDBIcon fab icon="twitter" /></a>
              <a href='' className='me-4 text-reset'><MDBIcon fab icon="google" /></a>
              <a href='' className='me-4 text-reset'><MDBIcon fab icon="instagram" /></a>
              <a href='' className='me-4 text-reset'><MDBIcon fab icon="linkedin" /></a>
            </div>
        </section>
        <section className=''>
          <MDBContainer fluid className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4' style={{color:"white"}}>
                  <img src={logo} className='img-thumbnail' style={{borderRadius:"50%" ,height:"90px"}} alt='...'/>
                </h6>
                <p style={{color:"white"}}>
                  Dr. Ambedkar Institute of Technology For Handicapped , Kanpur
                </p>
              </MDBCol>
              <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4' style={{color:"white"}}>
                <h6 className='text-uppercase fw-bold mb-4'>Admission</h6>
                <p><a href='#!' className='text-reset' style={{textDecoration:"none"}}>Addmission Open</a></p>
                <p><a href='#!' className='text-reset' style={{textDecoration:"none"}}>Fee Structure</a></p>
                <p><a href='#!' className='text-reset' style={{textDecoration:"none"}} >Registration</a></p>
                <p><a href='#!' className='text-reset' style={{textDecoration:"none"}}>Anti-Ragging</a></p>
              </MDBCol>
              <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4' style={{color:"white"}}>
                <h6 className='text-uppercase fw-bold mb-4' >Quick links</h6>
                <p><a href='#!' className='text-reset' style={{textDecoration:"none"}} >Addmission</a></p>
                <p><a href='#!' className='text-reset' style={{textDecoration:"none"}} >Academic</a></p>
                <p><a href='#!' className='text-reset' style={{textDecoration:"none"}}>Scholarship</a></p>
                <p><a href='#!' className='text-reset' style={{textDecoration:"none"}}>Help</a></p>
              </MDBCol>
              <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4' style={{color:"white"}}>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                  <p>
                    <MDBIcon color='secondary' icon='home' className='me-2' />
                    Awadhpuri Khyora , Near RamaDental College , Kanpur 208024
                  </p>
                  <p>
                    <MDBIcon color='secondary' icon='envelope' className='me-3'/>
                    aith@example.com
                  </p>
                  <p>
                    <MDBIcon color='secondary' icon='phone' className='me-3'/> + 91 xxxxxxxxxx
                  </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <div className='text-center p-2'  style={{ backgroundColor: "#292626", color:"white",fontSize:"0.8rem"}}>
          © 2024 Copyright : E-Proximity all rights reserved
        </div>
      </MDBFooter>
    );
}
export default Footer;