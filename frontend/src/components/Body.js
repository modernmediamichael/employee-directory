import React from "react";
import EmployeeTable from "./EmployeeTable";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import employees from "../employees.json";

class Body extends React.Component {
  state = {
    employees,
    search: ''
  };

  filterByDepartment = (employeeDepartment) => {
    const employees = this.state.employees.filter(
      (employee) => employee.department === employeeDepartment
    );
    this.setState({ employeeList: employees });
  };

  updateSearch(event) {
    this.setState({search: event.target.value.substr(0,20)})
  }

  filterByName = () => {};

  render() {
    let searchResults = this.state.employees.filter(
      (employee) => {
        return employee.name.indexOf(this.state.search) !== -1;
      }
    )

    return (
      <Container>
        <Row>
          <Col className="search-form__wrapper">
            <Form>
              <Form.Row className="align-items-center">
                <Col xs="auto">
                  <Form.Label htmlFor="inlineFormInput" srOnly>
                    Name
                  </Form.Label>
                  <Form.Control
                    className="mb-2"
                    id="inlineFormInput"
                    placeholder="Enter Employee Name"
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)}
                  />
                </Col>
                
                <Col xs="auto">
                  <Button type="submit" className="mb-2">
                    Submit
                  </Button>
                </Col>
              </Form.Row>
            </Form>
          </Col>
        </Row>
        <Row>
          {searchResults.map((employee) => (
            <Col>
              <EmployeeTable key={employee.id} employee={employee} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Body;
