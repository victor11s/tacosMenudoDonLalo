import React, { useEffect } from 'react';
import InformacionPersonal from './InformacionPersonal';
import InformacionEditar from './InformacionEditar';
import Axios from 'axios';

import { Row, Col, Container, Tab, Tabs } from 'react-bootstrap'
import DefaultNavbar from '../../globalComponents/defaultNavbar'

let ligaAxios = 'http://localhost:3001/api/';

export default function AdministrarUser() {
    const [user, setUser] = React.useState([])
    

    useEffect(() => {
        // Obteniendo usuario de la base de datos 
        async function getUser() {
            const userID = localStorage.getItem('nombre_usuario');
            console.log(userID);
            await Axios.post(ligaAxios + 'getAdmin', {
                id: userID,
            }).then( async (response) => {
                    if (response.data[0] !== undefined) { //Condicion que sirve para validar datos de retorno
                        await setUser(response.data[0]);
                        //console.log(response.data)
                    } else {
                        console.log("Error: No se recibió información del usuario");
                    }
                });
        }
        getUser();

    }, []);
    console.log(user) 

    return (
        <div>
            <DefaultNavbar />

            <Container>

                <Row className="d-flex justify-content-center m-5">
                    <Col className='d-flex justify-content-center my-auto'>
                        <h1>Datos Personales</h1>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center m-5 FBBN">
                    <Tabs
                        defaultActiveKey="PersonalInfo"
                        id="justify-tab-example"
                        className="mb-3"
                        justify
                    >
                        <Tab eventKey="PersonalInfo" title="Informacion Personal">
                            <InformacionPersonal 
                                nombre_usuario={user.nombre_usuario}
                                nombre={user.nombre}
                                direccion={user.direccion}
                            />
                        </Tab>
                        
                    
                        
                    </Tabs>
                </Row>

            </Container>




        </div>
    )
}
