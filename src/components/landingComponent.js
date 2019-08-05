
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/landing.scss';
export default function Landing() {
  return (

    <div className="mainPage">
      <div className="brand">
      <header>
      <>
      <Navbar className="nav-section">
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end nav-auth-section">
          <Link to="/login">
            <Navbar.Text variant="light">
              Login &nbsp;|
            </Navbar.Text>
          </Link>
          <Link to="/signup">
            <Navbar.Text variant="light">
              &nbsp; Signup
            </Navbar.Text>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </>
    </header>
        <div className="title"><h1>EPIC MAIL</h1></div>
        <div className="info">
        <p>The internet is increasingly becoming an integral part of lives.
        Ever since the invention of electronic mail by Ray Tomlinson,
        emails have grown to become the primary medium of exchanging
        information over the internet between two or more people,
        until the advent of Instant Messaging (IM) Apps.</p>

        <p>As EPIC Andelans who work towards advancing human potential 
        and giving back to the society, we wish to empower others by
        having a web app that helps people exchange 
        messages/information over the internet.</p>
        </div>
        
      </div>
    </div>
  );
}