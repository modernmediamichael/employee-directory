import React from 'react'
import { Card, Button, Row } from 'react-bootstrap'

const EmployeeTable = ({ employee }) => {

    return (
        <Row>     
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={employee.image} alt={employee.alt}/>
                <Card.Body>
                <Card.Title>{employee.name}</Card.Title>
                <Card.Text>{employee.occupation}</Card.Text>
                <a href={`mailto:${employee.email}`}>
                    <Button variant="primary">Send Email</Button>
                </a>
                </Card.Body>
            </Card>        
        </Row>
    )
}

export default EmployeeTable