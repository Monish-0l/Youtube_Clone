import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const VideoCard = ({ video, showSkeleton = false }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/video/${video.id}`);
    };

    if (showSkeleton) {
        return (
            <Card className="video-card skeleton">
                <div className="skeleton-thumbnail"></div>
                <Card.Body>
                    <div className="skeleton-text skeleton-title"></div>
                    <div className="skeleton-text skeleton-channel"></div>
                    <div className="skeleton-text skeleton-meta"></div>
                </Card.Body>
            </Card>
        );
    }

    return (
        <Card className="video-card" onClick={handleClick}>
            <div className="video-thumbnail-container">
                <Card.Img
                    variant="top"
                    src={video.thumbnail}
                    alt={video.title}
                    className="video-thumbnail"
                />
                <div className="video-duration">{video.duration}</div>
            </div>
            <Card.Body>
                <div className="video-info">
                    <img
                        src={video.channelAvatar}
                        alt={video.channelName}
                        className="channel-avatar"
                    />
                    <div className="video-details">
                        <Card.Title className="video-title">{video.title}</Card.Title>
                        <div className="channel-name">{video.channelName}</div>
                        <div className="video-meta">
                            {video.views} views • {video.uploadTime}
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default VideoCard;