import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavMenu } from './NavMenu';

export const Layout = ( {children} ) => {
    return (
      <Container fluid>
        <Col>
          <Row sm={3}>
            <NavMenu />
          </Row>
          <Row sm={9}>{children}</Row>
        </Col>
      </Container>
    );
  }
