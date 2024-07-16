import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <Nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <Nav.Item>
          <Nav.Link href="/">Overview</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/reports">Reports</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/analytics">Analytics</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/settings">Settings</Nav.Link>
        </Nav.Item>
      </div>
    </Nav>
  );
};

export default Sidebar;
