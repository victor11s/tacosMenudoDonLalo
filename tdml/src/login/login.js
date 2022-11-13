import React from 'react'
import { Breadcrumb, Card, Container } from 'react-bootstrap'
import DefaultNavbar from '../globalComponents/defaultNavbar'
import LoginForm from './components/LoginForm'

export default function login() {
    return (
        <div>
            <DefaultNavbar />

            <Container>

                {/* Breadcrumb */}
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Login</Breadcrumb.Item>
                </Breadcrumb>
                {/* End Breadcrumb */}

                <Card Style={"width: 28rem; margin: auto; margin-top: 5%; padding: 20px"}>
                    <LoginForm />
                </Card>
            </Container>

        </div>
    )
}
