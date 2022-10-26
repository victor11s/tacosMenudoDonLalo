
import {Row, Col} from 'react-bootstrap'

import  {Component} from 'react'
import Feature1 from './components/Feature1'



export default class LandingPage extends Component {
    render() {
        return (
        <div>
            <Row className="p-5">
                <Col>
                <Feature1/>
                </Col>
                <Col>
                    <h1>Test2</h1>
                </Col>
            </Row>
        </div>
        );
    }
}
