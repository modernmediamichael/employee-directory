import React from 'react'
import EmployeeTable from './EmployeeTable'
import { Container, Row, Col } from 'react-bootstrap'
import employees from '../employees.json'

class Body extends React.Component {

   state={
    employees
  }

  filterByDepartment = (employeeDepartment) => {
    const employees = this.state.employees.filter((employee)=>employee.department===employeeDepartment)
    this.setState({employeeList:employees})
  }

  filterByName = () => {

  }

  render() {
    return (
      <Container>
        <Row>
          {this.state.employees.map(employee => (
              <Col>
                  <EmployeeTable key={employee.id} employee={employee}/>
              </Col>
          ))}
        </Row>                  
      </Container>
    )
  }
}

export default Body
