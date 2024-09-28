import React from 'react';
import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div style={{ width: '100vw', height: '100vh', display: 'flex' }}>
    <Sidenav 
      defaultOpenKeys={['3', '4']}
      style={{ height: '100%', width: '240px' }}
    >
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
            <Nav.Menu eventKey="4-5" title="Custom Action">
              <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
              <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
            </Nav.Menu>
          </Nav.Menu>
        </Nav>
      </Sidenav.Body>
    </Sidenav>
    <div style={{ flex: 1, padding: '20px' }}>
      {/* Main content area */}
      <h1>Welcome to the Dashboard</h1>
      {/* Add your main content here */}
    </div>
  </div>
);

export default Navbar;