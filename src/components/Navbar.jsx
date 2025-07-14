import React, { useState } from 'react';
import { Navbar, Nav, Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const CustomNavbar = ({ onToggleSidebar }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const { isDark, toggleTheme } = useTheme();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search/${searchQuery}`);
            setSearchQuery('');
        }
    };

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <Navbar expand="lg" className="custom-navbar sticky-top" variant={isDark ? 'dark' : 'light'}>
            <Container fluid>
                <Button
                    variant="link"
                    onClick={onToggleSidebar}
                    className="hamburger-menu me-3"
                >
                    <span className="hamburger-icon">☰</span>
                </Button>

                <Navbar.Brand onClick={handleLogoClick} className="navbar-brand-custom">
                    <svg className="youtube-icon" viewBox="0 0 24 24" width="32" height="22">
                        <path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    <span className="brand-text">YouTube</span>
                </Navbar.Brand>

                <div className="search-container mx-auto">
                    <Form onSubmit={handleSearch} className="d-flex search-form">
                        <Form.Control
                            type="search"
                            placeholder="Search videos..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="search-input"
                        />
                        <Button type="submit" variant="outline-secondary" className="search-button">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                <path d="M20.87 20.17l-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
                            </svg>
                        </Button>
                    </Form>
                </div>

                <Nav className="ms-auto">
                    <Button
                        variant="link"
                        className="profile-btn me-2"
                    >
                        <img
                            src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop"
                            alt="Profile"
                            className="profile-avatar"
                        />
                    </Button>
                    <Button
                        variant="outline-secondary"
                        onClick={toggleTheme}
                        className="theme-toggle"
                    >
                        {isDark ? '☀️' : '🌙'}
                    </Button>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;