
import {Row, Col, Container} from 'react-bootstrap'

import  {Component} from 'react'
import Feature1 from './components/feature1'
import DefaultNavbar from '../globalComponents/defaultNavbar';
import Footer from './components/footer'





export default class LandingPage extends Component {
    render() {
        return (
        <div className="TacosColor">
            <DefaultNavbar/>
            <Container className='FondoImagenP'>
            <Row>
                <Col>
                <Feature1/>
                </Col>
            </Row>
                
            </Container>
            <Footer></Footer>
            
        </div>
        );
    }
}
