import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { dummyVideos } from '../data/dummyData';

const RelatedVideos = ({ currentVideoId }) => {
    const navigate = useNavigate();
    const relatedVideos = dummyVideos.filter(video => video.id !== currentVideoId);

    const handleVideoClick = (videoId) => {
        navigate(`/video/${videoId}`);
        window.scrollTo(0, 0);
    };

    return (
        <div className="related-videos">
            <h5>Related Videos</h5>
            {relatedVideos.map(video => (
                <Card
                    key={video.id}
                    className="related-video-card"
                    onClick={() => handleVideoClick(video.id)}
                >
                    <div className="related-video-content">
                        <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="related-video-thumbnail"
                        />
                        <div className="related-video-info">
                            <h6 className="related-video-title">{video.title}</h6>
                            <div className="related-video-meta">
                                <div className="related-channel">{video.channelName}</div>
                                <div className="related-views">{video.views} views</div>
                            </div>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default RelatedVideos;