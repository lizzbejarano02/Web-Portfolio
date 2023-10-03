import emailjs from '@emailjs/browser';
import { Container, Row, Col} from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
    const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_irie1u9','template_ttprggl',event.target,'BXBcp1qHYfkydkf39')
    .then(response => console.log(response))
    event.target.reset()
    .catch(error => console.log(error))
  }
   
    return (
      <section className="contact" id="connect">
        <Container>
          <Row className="align-items-center">
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
                }
              </TrackVisibility>
            </Col>
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form className='form-mail' onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text"  placeholder="Name" name='user_name' required/>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" placeholder="Email Address" name='user_email' required/>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" placeholder="Phone No." name='user_phone'required/>
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" placeholder="Message" name='user_message' required></textarea>
                        <button type="submit"><span>Send</span></button>
                      </Col>

                    </Row>
                  </form>
                </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    )
    
  }

  export default Contact