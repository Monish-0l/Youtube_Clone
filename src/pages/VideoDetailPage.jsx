import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import VideoPlayer from '../components/VideoPlayer';
import Comments from '../components/Comments';
import RelatedVideos from '../components/RelatedVideos';
import { dummyVideos } from '../data/dummyData';

const VideoDetailPage = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      const foundVideo = dummyVideos.find(v => v.id === parseInt(id));
      setVideo(foundVideo);
      setLoading(false);
    }, 500);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="video-detail-page" style={{ minHeight: '100vh' }}>
        <Container className="mt-4">
          <Row>
            <Col lg={8}>
              <div className="video-skeleton">
                <div className="skeleton-video-player"></div>
                <div className="skeleton-text skeleton-title-large"></div>
                <div className="skeleton-text skeleton-channel-large"></div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="related-videos-skeleton">
                {Array(5).fill(0).map((_, index) => (
                  <div key={index} className="skeleton-related-video"></div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  if (!video) {
    return (
      <div className="video-detail-page" style={{ minHeight: '100vh' }}>
        <Container className="mt-4">
          <div className="text-center">
            <h2>Video not found</h2>
            <p>The video you're looking for doesn't exist.</p>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="video-detail-page" style={{ minHeight: '100vh' }}>
      <Container className="mt-4">
        <Row>
          <Col lg={8}>
            <VideoPlayer video={video} />
            <Comments videoId={video.id} />
          </Col>
          <Col lg={4}>
            <RelatedVideos currentVideoId={video.id} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default VideoDetailPage;