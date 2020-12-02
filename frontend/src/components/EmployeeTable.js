import React from 'react'
import { Card, Button, Row } from 'react-bootstrap'

const EmployeeTable = ({ employee }) => {

    return (
        <Row>     
            <Card className="employee-card">
                <div className="employee-img__wrapper">
                    <Card.Img className="employee-img" variant="top" src={employee.image} alt={employee.alt}/>
                </div>
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