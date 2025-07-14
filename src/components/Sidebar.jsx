import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = ({ activeCategory, onCategoryChange, isCollapsed }) => {
  const sidebarItems = [
    {
      id: 'home',
      name: 'Home',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12 4.44l-6.55 5.9v8.16h4.47v-5.5h4.16v5.5h4.47V10.34L12 4.44zM12 3.5l8 7.2v9.8h-6v-5.5H10v5.5H4v-9.8l8-7.2z" />
        </svg>
      )
    },
    {
      id: 'shorts',
      name: 'Shorts',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25z" />
        </svg>
      )
    },
    {
      id: 'subscriptions',
      name: 'Subscriptions',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M10 18v-6l5 3-5 3zm7.5-12H6.5L5.5 4h13l-1 2zM19 7H5c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2z" />
        </svg>
      )
    },
    {
      id: 'you',
      name: 'You',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      )
    },
    {
      id: 'history',
      name: 'History',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" />
        </svg>
      )
    },
    {
      id: 'trending',
      name: 'Trending',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M17.53 11.2c-.23-.3-.5-.56-.77-.82-.81-.8-1.98-1.28-3.25-1.28h-.01c-.69 0-1.33.16-1.89.44l-.46-.45c-.39-.4-1.02-.4-1.42-.01-.4.4-.4 1.03 0 1.42l.45.45C9.85 11.33 9.69 11.97 9.69 12.64v.01c0 1.28.48 2.44 1.28 3.25.26.27.52.54.82.78l.81.72c.04.04.08.06.12.09.52.41 1.25.36 1.7-.09.4-.4.4-1.02.01-1.41l-.45-.45c.28-.56.44-1.2.44-1.89v-.01c0-1.28-.48-2.44-1.28-3.25z" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        </svg>
      )
    },
    {
      id: 'music',
      name: 'Music',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
      )
    },
    {
      id: 'gaming',
      name: 'Gaming',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M21.58 16.09l-1.09-7.66C20.21 6.46 18.52 5 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19c.68 0 1.32-.27 1.8-.75L9 16h6l2.25 2.25c.48.48 1.12.75 1.8.75 1.55 0 2.74-1.37 2.53-2.91zM11 11H9v2H8v-2H6v-1h2V8h1v2h2v1zm4-0.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zm2 3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5z" />
        </svg>
      )
    },

    {
      id: 'sports',
      name: 'Sports',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z" />
        </svg>
      )
    },
    {
      id: 'learning',
      name: 'Learning',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
        </svg>
      )
    },

    {
      id: 'podcasts',
      name: 'Podcasts',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      )
    }
  ];

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <Nav className="flex-column">
        {sidebarItems.map((item, index) => (
          <React.Fragment key={item.id}>
            <Nav.Link
              className={`sidebar-item ${activeCategory === item.id ? 'active' : ''}`}
              onClick={() => onCategoryChange(item.id)}
            >
              <span className="sidebar-icon">{item.icon}</span>
              {!isCollapsed && <span className="sidebar-text">{item.name}</span>}
            </Nav.Link>
            
            {index === 3 && !isCollapsed && <hr className="sidebar-separator" />}
            
            {index === 4 && !isCollapsed && <hr className="sidebar-separator" />}
          </React.Fragment>
        ))}
      </Nav>
    </div>
  );
};

export default Sidebar;