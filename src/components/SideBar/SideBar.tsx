import React, { useState } from 'react';
import './SideBar.css'; // Import your CSS file
import 'boxicons/css/boxicons.min.css'; // Import the bx icons CSS

interface LinkData {
  text: string;
  icon: string;
  isActive: boolean;
}

function SideBar() {
  const linkData: LinkData[] = [
    { text: 'Dashboard', icon: 'bx bx-grid-alt', isActive: true },
    { text: 'Saved', icon: 'bx bx-save', isActive: false },
    { text: 'Files', icon: 'bx bx-folder', isActive: false },
  ];

  const handleLinkClick = (index: number) => {
    const updatedLinks = linkData.map((link, i) => ({
      ...link,
      isActive: i === index,
    }));
    // Update the state with the new active link
    // You can add logic here to perform actions when a link is clicked
  };

  return (
      <Navbar linkData={linkData} onLinkClick={handleLinkClick} />
  );
}

interface NavbarProps {
  linkData: LinkData[];
  onLinkClick: (index: number) => void;
}

const Navbar: React.FC<NavbarProps> = ({ linkData, onLinkClick }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className={`SB-l-navbar ${isNavOpen ? 'SB-show' : ''}`} id="nav-bar">
      <nav className="SB-nav">
        <div className="SB-header_toggle" onClick={toggleNavbar}>
          <i className={`bx ${isNavOpen ? 'bx-x' : 'bx-menu'}`} id="header-toggle"></i>
        </div>
        <div>
          <a href="#" className="SB-nav_logo">
            <i className="bx bx-layer SB-nav_logo-icon"></i>
            <span className="SB-nav_logo-name">Quick Access</span>
          </a>
          <div className="SB-nav_list">
            {linkData.map((link, index) => (
              <a
                key={index}
                href="#"
                className={`SB-nav_link ${link.isActive ? 'SB-active' : ''}`}
                onClick={() => onLinkClick(index)}
              >
                <i className={`bx ${link.icon} SB-nav_icon`}></i>
                <span className="SB-nav_name">{link.text}</span>
              </a>
            ))}
          </div>
        </div>
        <a href="#" className="SB-nav_link">
          <i className="bx bx-log-out SB-nav_icon"></i>
          <span className="SB-nav_name">SignOut</span>
        </a>
      </nav>
    </div>
  );
};

export default SideBar;
