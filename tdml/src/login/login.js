import React from 'react'
import { Card, Container } from 'react-bootstrap'
import DefaultNavbar from '../globalComponents/defaultNavbar'
import LoginForm from './components/LoginForm'

export default function login() {
    return (
        <div>
            <DefaultNavbar />
            <Container>
                <Card Style={"width: 28rem; margin: auto; margin-top: 10%; padding: 20px"}>
                    <LoginForm/>
                </Card>
            </Container>

        </div>
    )
}
