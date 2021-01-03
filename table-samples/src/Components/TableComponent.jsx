import React, { useState } from "react";
import {
  Button,
  Container,
  Label,
  Table,
  Input,
  Form,
  Row,
  Col,
  FormGroup,
} from "reactstrap";

const centerHeading = {
  textAlign: "center",
};

const getTodaysDate = () => {
  var today = new Date();
  var result =
    today.getFullYear() +
    "-" +
    String(today.getMonth() + 1).padStart(2, 0) +
    "-" +
    String(today.getDate()).padStart(2, 0);

  return result;
};

function TableComponent() {
  const [tableData, setTableData] = useState([
    {
      id: 1,
      firstName: "Pradheep",
      lastName: "Raj",
      dob: "12-Feb-1981",
    },
    {
      id: 2,
      firstName: "Niveda",
      lastName: "Ramalingam",
      dob: "28-Nov-1989",
    },
  ]);
  const [txtFirstName, setTxtFirstName] = useState("");
  const [txtLastName, setTxtLastName] = useState("");
  const [dtDob, setDtDob] = useState(getTodaysDate());
  const [dataId, setDataId] = useState(1);
  const [hiddenId, setHiddenId] = useState("");

  const onEditButtonPressed = (id) => {
    var item = tableData.find((x) => x.id == id);
    setHiddenId(item.id);
    setTxtFirstName(item.firstName);
    setTxtLastName(item.lastName);
    var str =
      new Date(item.dob).getFullYear() +
      "-" +
      String(new Date(item.dob).getMonth() + 1).padStart(2, 0) +
      "-" +
      String(new Date(item.dob).getDate()).padStart(2, 0);
    setDtDob(str);
  };

  const onDeleteButtonPressed = (id) => {
    var index = tableData.findIndex((x) => x.id == id);
    tableData.splice(index, 1);
    setTableData([...tableData]);
  };

  const onAddButtonPressed = () => {
    if (hiddenId != "") {
      var item = tableData.find((x) => x.id == hiddenId);
      item.firstName = txtFirstName;
      item.lastName = txtLastName;
      item.dob = dtDob;

      setTableData([...tableData]);
      setHiddenId("");
    } else {
      setTableData([
        ...tableData,
        {
          id: dataId,
          firstName: txtFirstName,
          lastName: txtLastName,
          dob: dtDob,
        },
      ]);
      setDataId((prev) => prev + 1);
    }
    setTxtFirstName("");
    setTxtLastName("");
    setDtDob(getTodaysDate());
  };

  return (
    <Container className="border m-2 align-middle">
      <Form>
        <Row form>
          <Col md={3}>
            <FormGroup>
              <Label for="txtFirstName">First Name</Label>
              <Input
                type="text"
                id="txtFirstName"
                value={txtFirstName}
                onChange={(e) => setTxtFirstName(e.target.value)}
              ></Input>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="txtLastName">Last Name</Label>
              <Input
                type="text"
                id="txtLastName"
                value={txtLastName}
                onChange={(e) => setTxtLastName(e.target.value)}
              ></Input>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="txtDob">Date of Birth</Label>
              <Input
                type="date"
                id="txtDob"
                value={dtDob}
                onChange={(e) => setDtDob(e.target.value)}
              ></Input>
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label for="btnAddUpdate" hidden></Label>
              <Button
                id="btnAddUpdate"
                color="info"
                onClick={onAddButtonPressed}
              >
                Add / Update
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
      <Container className="border m-2 align-middle">
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date of Birth</th>
              <th colSpan="2" style={centerHeading}>
                Modify Data
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, key) => (
              <tr>
                <th>{item.id}</th>
                <th>{item.firstName}</th>
                <th>{item.lastName}</th>
                <th>{item.dob}</th>
                <th>
                  <Button
                    color="info"
                    onClick={() => onEditButtonPressed(item.id)}
                  >
                    Edit
                  </Button>
                </th>
                <th>
                  <Button
                    color="danger"
                    onClick={() => onDeleteButtonPressed(item.id)}
                  >
                    Delete
                  </Button>
                </th>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </Container>
  );
}

export default TableComponent;
