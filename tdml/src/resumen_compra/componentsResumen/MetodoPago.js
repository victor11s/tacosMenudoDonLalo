import { Row, Container,Table } from 'react-bootstrap'

import efectivo from '../componentsResumen/images/efectivo.png'
import visa from '../componentsResumen/images/Visa.png'
export default function MetodoPago() {
    return (
        <div>
           <Container className='row justify-content-center'>
                <Row className='col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 py-4'>
                        <h1>Método de Pago</h1>
                        <Table className='table table-default table-hover m-0'>
                            <tbody>
                                <tr className='align-middle'>
                                    <td> <img src={efectivo} className='img-thumbnail' width={200} height={50}/></td>
                                    <td>Método de pago #1 - Efectivo</td>
                                    <td><button className='btn btn-outline-dark ms-5'>Escoger</button></td>
                                </tr>
                                <tr className='align-middle'>
                                    <td> <img src={visa} className='img-thumbnail' width={200}/></td>
                                    <td>Método de pago #2 - Tarjeta</td>
                                    <td><button className='btn btn-outline-dark ms-5'>Escoger</button></td>
                                </tr>
                            </tbody>
                        </Table>
                </Row>
            </Container> 
        </div>
    )
}