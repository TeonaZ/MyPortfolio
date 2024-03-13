import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';


function Contact() {
  return (
    <div className='footer'>
      <Container>
        <Row className='text-center text-md-start'>
          <Col lg={4} md={6} sm={12} className='mb-3'>
            <ListGroup>
              <ListGroup.Item className='logo'>
                <h4>Teona Zaalishvili</h4>
              </ListGroup.Item>
              <ListGroup.Item>Thank you for visiting my portfolio!</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg={2} md={6} sm={12} className='mb-3'>
            <ListGroup>
              <ListGroup.Item className='footer-link-heading'>
                <p>Contact Me</p>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <a href='https://www.linkedin.com/in/teona-zaalishvili/'>LinkedIn</a>{" "}
              </ListGroup.Item>
              <ListGroup.Item>  <a href='mailto:teonazaalishvili2@gmail.com'>
                Email-
                  <FontAwesomeIcon icon={faEnvelope} className='email-icon' />
                </a></ListGroup.Item>
                
                <ListGroup.Item> 
  <a href='tel:+13474659202'>
    Phone Number - +1 347 465 9202 <FontAwesomeIcon icon={faPhone} className='phone-icon' />
  </a>
</ListGroup.Item>

            </ListGroup>
          </Col>
          <Col lg={2} md={6} sm={12} className='mb-3'>
          </Col>   
        </Row>  
      </Container>
    </div>
  );
}

export default Contact;
