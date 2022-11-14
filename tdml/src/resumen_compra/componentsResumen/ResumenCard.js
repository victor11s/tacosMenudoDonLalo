import { Row, Container, Card,Table } from 'react-bootstrap'

import tacos from '../componentsResumen/images/tacos.jpg'
export default function ResumenCard() {
    return (
        <div>
           <Container className='row justify-content-center'>
                <Row className='col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 py-4'>
                    <Card className='border-dark'>
                        <Table className='table table-default table-hover m-0'>
                            <tbody>
                                <tr className='align-middle'>
                                    <td> <img src={tacos} className='img-thumbnail' width={200}/></td>
                                    <td>Tacos de Chicharron</td>
                                    <td>$18</td>
                                    <td>1</td>
                                </tr>
                                <tr className='align-middle'>
                                    <td> <img src={tacos} className='img-thumbnail' width={200}/></td>
                                    <td>Tacos de Chicharron</td>
                                    <td>$18</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Container className='d-flex justify-content-end py-5'>
                                <h4>Total a pagar: $ 36</h4>
                        </Container>
                    </Card>
                </Row>
           </Container>
        </div>
    )
}