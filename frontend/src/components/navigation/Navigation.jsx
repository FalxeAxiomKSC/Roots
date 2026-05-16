import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navigation() {
  const location = useLocation();
  const { user, logout } = useAuth();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    window.location.href = '/';
  };

  const navigationItems = [
    { path: '/', label: 'Dashboard', icon: '📊' },
    { path: '/funding-sources', label: 'Funding', icon: '💰' },
    { path: '/applications', label: 'Applications', icon: '📝' },
    { path: '/matches', label: 'Matches', icon: '🎯' },
    { path: '/communities', label: 'Communities', icon: '🏘️' },
  ];

  return (
    <nav className="navigation">
      <div className="nav-content">
        <div className="nav-brand">
          <Link to="/" className="brand-link">
            <span className="brand-icon">🌱</span>
            <span className="brand-name">Roots</span>
          </Link>
        </div>

        <ul className="nav-links">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link to={item.path} className={`nav-link ${isActive ? 'active' : ''}`}>
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="nav-user">
          <div className="user-info">
            <span className="user-avatar">👤</span>
            <span className="user-name">{user?.name || 'Member'}</span>
          </div>
          <button onClick={handleLogout} className="logout-button" title="Logout">
            🚪
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
