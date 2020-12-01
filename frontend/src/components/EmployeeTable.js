import React from 'react'
import { Card, Button, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const EmployeeTable = ({ employee }) => {

    return (
        <Row>     
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={employee.image} />
                <Card.Body>
                <Card.Title>{employee.name}</Card.Title>
                <Card.Text>
                {employee.position}
                </Card.Text>
                <Link href={`mailto:${employee.email}`}>
                    <Button variant="primary">Send Email</Button>
                </Link>
                </Card.Body>
            </Card>        
        </Row>
    )
}

export default EmployeeTable