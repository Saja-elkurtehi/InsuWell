import React from 'react';
import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import { Link } from 'react-router-dom';
import 'rsuite/dist/rsuite.min.css';
import './Navbar.css'; 

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
          <Nav.Item as={Link} to="/dashboard" eventKey="1" icon={<DashboardIcon />}>
            Dashboard
          </Nav.Item>
          <Nav.Item as={Link} to="/about" eventKey="2" icon={<GroupIcon />}>
            Diary
          </Nav.Item>
          <Nav.Menu eventKey="3" title="Glycemic Insights" icon={<MagicIcon />}>
            <Nav.Item as={Link} to="/average-gi" eventKey="3-1">Average GI</Nav.Item>
            <Nav.Item as={Link} to="/gi-tracking" eventKey="3-2">GI Tracking</Nav.Item>
            <Nav.Item as={Link} to="/meal-planning" eventKey="3-3">Meal Planning</Nav.Item>
          </Nav.Menu>
          <Nav.Menu eventKey="4" title="Settings" icon={<GearCircleIcon />}>
            <Nav.Item as={Link} to="/profile" eventKey="4-1">Profile Settings</Nav.Item>
            <Nav.Item as={Link} to="/notifications" eventKey="4-2">Notifications</Nav.Item>
            <Nav.Item as={Link} to="/preferences" eventKey="4-3">Preferences</Nav.Item>
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
