import React from 'react'
import { Card, Container } from 'react-bootstrap'
import DefaultNavbar from '../globalComponents/defaultNavbar'
import SinginForm from './components/SinginForm'

export default function singin() {
    return (
        <div>
            <DefaultNavbar />
            <Container>
                <Card Style={"width: 28rem; margin: auto; margin-top: 5%; padding: 20px"}>
                    <SinginForm/>
                </Card>
            </Container>
        </div>
    )
}
