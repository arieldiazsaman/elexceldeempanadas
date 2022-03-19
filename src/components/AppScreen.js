import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

import { DATA } from "../utils/constants";
import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";
import { TablePeopleSummary } from "./TablePeopleSymmary";

const data = DATA;

export const AppScreen = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th></th>
                {TableHead(data.names)}
                <th>+</th>
              </tr>
            </thead>
            <tbody>
              {TableBody(data.names, data.flavors)}
              {TablePeopleSummary(data.names, data.flavors)}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};
