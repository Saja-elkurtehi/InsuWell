import React from 'react';
import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import { Link } from 'react-router-dom';
import 'rsuite/dist/rsuite.min.css';

const darkTheme = {
  backgroundColor: '#1a1a1a',
  color: '#ffffff',
  hoverColor: '#2980b9',
  activeColor: '#3498db',
};

const navItemStyle = {
  color: darkTheme.color,
  ':hover': {
    backgroundColor: darkTheme.hoverColor,
  },
};

const navMenuStyle = {
  ...navItemStyle,
  '& .rs-nav-menu-title': {
    color: darkTheme.color,
  },
};

const Navbar = () => (
  <div style={{height: '100vh', display: 'flex' }}>
    <Sidenav 
      appearance="subtle"
      defaultOpenKeys={['3', '4']}
      style={{ 
        height: '100%', 
        width: '240px',
        backgroundColor: darkTheme.backgroundColor,
        color: darkTheme.color
      }}
    >
      <Sidenav.Body>
        <Nav activeKey="1">
          <Nav.Item as={Link} to="/home" eventKey="1" icon={<DashboardIcon style={navItemStyle} />} style={navItemStyle}>
            Dashboard
          </Nav.Item>
          <Nav.Item as={Link} to="/about" eventKey="2" icon={<GroupIcon style={navItemStyle} />} style={navItemStyle}>
            Diary
          </Nav.Item>
          <Nav.Menu eventKey="3" title="Advanced" icon={<MagicIcon style={navItemStyle} />} style={navMenuStyle}>
            <Nav.Item eventKey="3-1" style={navItemStyle}>Geo</Nav.Item>
            <Nav.Item eventKey="3-2" style={navItemStyle}>Devices</Nav.Item>
            <Nav.Item eventKey="3-3" style={navItemStyle}>Loyalty</Nav.Item>
            <Nav.Item eventKey="3-4" style={navItemStyle}>Visit Depth</Nav.Item>
          </Nav.Menu>
          <Nav.Menu eventKey="4" title="Settings" icon={<GearCircleIcon style={navItemStyle} />} style={navMenuStyle}>
            <Nav.Item eventKey="4-1" style={navItemStyle}>Applications</Nav.Item>
            <Nav.Item eventKey="4-2" style={navItemStyle}>Channels</Nav.Item>
            <Nav.Item eventKey="4-3" style={navItemStyle}>Versions</Nav.Item>
          </Nav.Menu>
        </Nav>
      </Sidenav.Body>
    </Sidenav>
  </div>
);

export default Navbar;