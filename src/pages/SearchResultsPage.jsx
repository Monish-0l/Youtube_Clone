import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import VideoCard from '../components/VideoCard';
import { dummyVideos } from '../data/dummyData';

const SearchResultsPage = ({ sidebarCollapsed, setSidebarCollapsed }) => {
    const { query } = useParams();
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState('home');

    useEffect(() => {
        // Simulate search
        setTimeout(() => {
            const searchResults = dummyVideos.filter(video =>
                video.title.toLowerCase().includes(query.toLowerCase()) ||
                video.channelName.toLowerCase().includes(query.toLowerCase()) ||
                video.description.toLowerCase().includes(query.toLowerCase()) ||
                video.category.toLowerCase().includes(query.toLowerCase())
            );
            setResults(searchResults);
            setLoading(false);
        }, 800);
    }, [query]);

    const handleCategoryChange = (categoryId) => {
        setActiveCategory(categoryId);
        
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 992) {
                setSidebarCollapsed(true);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div className="search-results-page">
            <Container fluid>
                <Row>
                    <Col md={sidebarCollapsed ? 1 : 2} className="sidebar-col">
                        <Sidebar
                            activeCategory={activeCategory}
                            onCategoryChange={handleCategoryChange}
                            isCollapsed={sidebarCollapsed}
                        />
                    </Col>
                    <Col md={sidebarCollapsed ? 11 : 10} className="content-col">
                        <div className="search-results">
                            <div style={{ padding: '1rem' }}>
                                <h2>Search Results for "{query}"</h2>
                                <p>{loading ? 'Searching...' : `${results.length} results found`}</p>
                            </div>

                            <div className="video-grid">
                                <Row>
                                    {loading ? (
                                        Array(6).fill(0).map((_, index) => (
                                            <Col key={index} xl={3} lg={4} md={6} sm={12} className="video-card-col d-flex justify-content-center">
                                                <VideoCard showSkeleton={true} />
                                            </Col>
                                        ))
                                    ) : results.length > 0 ? (
                                        results.map(video => (
                                            <Col key={video.id} xl={3} lg={4} md={6} sm={12} className="video-card-col d-flex justify-content-center">
                                                <VideoCard video={video} />
                                            </Col>
                                        ))
                                    ) : (
                                        <Col>
                                            <div className="text-center mt-5 moni" style={{ marginLeft: '25rem' }}>
                                                <h4>No results found</h4>
                                                <p>Try different keywords or check your spelling.</p>
                                            </div>
                                        </Col>
                                    )}
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SearchResultsPage;