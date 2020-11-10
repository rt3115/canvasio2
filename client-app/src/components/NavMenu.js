import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import '../styles/NavMenu.css';

export const NavMenu = ( {children } ) => {
      const [value,  setValue] = React.useState(2);

      const handleChange = (event, newValue) => {
        setValue(newValue);
      }

        return (
            <div>
                <AppBar position="static">
                    <Tabs>
                        <Tab icon={<PersonPinIcon/>} />
                        <Tab label="New Canvas" href="#/Drawing" />
                        <Tab label="New Party" href="#/Party" />
                    </Tabs>
                </AppBar>
                <AppBar position="static" id="LowerAppBar">
                    <Tabs centered value={value} onChange={handleChange}>
                        <Tab label="Home" href="#/" />
                        <Tab label="Discover" href="#/Discover" />
                        <Tab label="Dashboard" href="#/Dashboard" />
                        <Tab label="party" href="#/Party" />
                        <Tab label="Drawing" href="#/Drawing" />
                        <Tab label="Profile" href="#/ProfileSettings" />
                    </Tabs>
                </AppBar>
            </div>
        )

        /*
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Canvas.io</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nac" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mr-auto">
                        <LinkContainer to={'/'} exact>
                            <NavItem>
                                <Glyphicon glyph='home' /> Home
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/Discover'} exact>
                            <NavItem>
                                Discover
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/Dashboard'} exact>
                            <NavItem>
                                Dashboard
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/party'} exact>
                            <NavItem>
                                Party
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/Drawing'} exact>
                            <NavItem>
                                Drawing
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/profileSettings'} exact>
                            <NavItem>
                                <Glyphicon glyph='home' />
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            )
            
        /*
    return (
      <Navbar inverse fixedTop fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>Canvas.io</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={'/'} exact>
              <NavItem>
                <Glyphicon glyph='home' /> Home
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/counter'}>
              <NavItem>
                <Glyphicon glyph='education' /> Counter
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/fetchdata'}>
              <NavItem>
                <Glyphicon glyph='th-list' /> Fetch data
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    ); */
}
