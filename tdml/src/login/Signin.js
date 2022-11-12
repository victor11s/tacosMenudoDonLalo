import React from 'react'
import { Card, Container, Breadcrumb } from 'react-bootstrap'
import DefaultNavbar from '../globalComponents/defaultNavbar'
import SigninForm from './components/SigninForm'

export default function signin() {
    return (
        <div>
            <DefaultNavbar />
            <Container>
                {/* Breadcrumb */}
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Sign in</Breadcrumb.Item>
                </Breadcrumb>
                {/* End Breadcrumb */}

                <Card Style={"width: 28rem; margin: auto; margin-top: 5%; padding: 20px"}>
                    <SigninForm/>
                </Card>
            </Container>
        </div>
    )
}
