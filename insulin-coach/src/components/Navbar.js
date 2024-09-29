import React from 'react';
import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import { Link } from 'react-router-dom';
import 'rsuite/dist/rsuite.min.css';
import './Navbar.css'; // Make sure to create this CSS file

const Navbar = () => (
  <div style={{ display: 'flex', position: 'relative' }}>
    <Sidenav
      appearance="subtle"
      defaultOpenKeys={['3', '4']}
      style={{
        position: 'fixed', // Keep the sidenav fixed
        height: '100vh', // Full height
        width: '240px',
        overflow: 'auto', // Allow scrolling if content exceeds height
        zIndex: 1000, // Ensure it stays above other content
      }}
    >
      <Sidenav.Header style={{ padding: '20px 0' }}>
        <span style={{ marginLeft: '22px', fontSize: '25px', fontWeight: 'bold'}}>
          insuWell
        </span>
      </Sidenav.Header>
      <Sidenav.Body>
        <Nav activeKey="1">
          <Nav.Item as={Link} to="/home" eventKey="1" icon={<DashboardIcon />}>
            Dashboard
          </Nav.Item>
          <Nav.Item as={Link} to="/about" eventKey="2" icon={<GroupIcon />}>
            Diary
          </Nav.Item>
          <Nav.Menu eventKey="3" title="Advanced" icon={<MagicIcon />}>
            <Nav.Item eventKey="3-1">Geo</Nav.Item>
            <Nav.Item eventKey="3-2">Devices</Nav.Item>
            <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
            <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
          </Nav.Menu>
          <Nav.Menu eventKey="4" title="Settings" icon={<GearCircleIcon />}>
            <Nav.Item eventKey="4-1">Applications</Nav.Item>
            <Nav.Item eventKey="4-2">Channels</Nav.Item>
            <Nav.Item eventKey="4-3">Versions</Nav.Item>
          </Nav.Menu>
        </Nav>
      </Sidenav.Body>
    </Sidenav>
    <div style={{ marginLeft: '240px', padding: '20px', flex: 1 }}>
      {/* This is where your main content will go */}
      {/* Ensure your main content is properly positioned without being pushed */}
    </div>
  </div>
);

export default Navbar;
