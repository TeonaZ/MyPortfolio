import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import MovingLogo from '../components/MovingLogo';



function Contact() {
  return (
    
    <div className='contact'>
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
      <MovingLogo src="https://img.favpng.com/11/9/1/html-element-computer-icons-clip-art-png-favpng-XTUR2n9V8Cqjdv7rryUwsfUY4.jpg" id="HTML logo" radius={50} speed={0.01}/>
       <MovingLogo src="https://www.logolynx.com/images/logolynx/a6/a60635561d41eceb9cb2411cc7648b81.jpeg" id="CSS logo" radius={320} speed={0.01} />
       <MovingLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" id="React logo" radius={300} speed={0.02}/>
      <MovingLogo src="https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Emblem.png" id="JavaScript logo" radius={70} speed={0.01} />
      <MovingLogo src="https://levunguyen.com/images/blog/typescript.png" id="TypeScript logo"radius={90} speed={0.01}/>
    </div>
  );
}

export default Contact;
