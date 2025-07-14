import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import VideoCard from '../components/VideoCard';
import Sidebar from '../components/Sidebar';
import { dummyVideos } from '../data/dummyData';

const HomePage = ({ sidebarCollapsed, setSidebarCollapsed }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('home');

  useEffect(() => {
    
    setTimeout(() => {
      setVideos(dummyVideos);
      setLoading(false);
    }, 1000);
  }, []);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setLoading(true);
    
    setTimeout(() => {
      if (categoryId === 'home' || categoryId === 'trending' || categoryId === 'shorts' || categoryId === 'subscriptions' || categoryId === 'you' || categoryId === 'history') {
        setVideos(dummyVideos);
      } else {
        
        const categoryMap = {
          'news': 'science',
          'sports': 'fitness',
          'learning': 'technology',
          'fashion': 'art',
          'podcasts': 'music'
        };
        
        const targetCategory = categoryMap[categoryId] || categoryId;
        const filtered = dummyVideos.filter(video => video.category === targetCategory);
        setVideos(filtered);
      }
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setSidebarCollapsed(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setSidebarCollapsed]);

  return (
    <div className="home-page" style={{ minHeight: '100vh' }}>
      <Container fluid>
        <Row>
          <Col md={sidebarCollapsed ? 1 : 2} className="sidebar-col">
            <Sidebar
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
              isCollapsed={sidebarCollapsed}
            />
          </Col>
          <Col md={sidebarCollapsed ? 11 : 10} className={`content-col ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
            <div className="video-grid">
              <Row>
                {loading ? (
                  
                  Array(12).fill(0).map((_, index) => (
                    <Col key={index} xl={3} lg={4} md={6} sm={12} className="video-card-col d-flex justify-content-center">
                      <VideoCard showSkeleton={true} />
                    </Col>
                  ))
                ) : (
                  videos.map(video => (
                    <Col key={video.id} xl={3} lg={4} md={6} sm={12} className="video-card-col d-flex justify-content-center">
                      <VideoCard video={video} />
                    </Col>
                  ))
                )}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;