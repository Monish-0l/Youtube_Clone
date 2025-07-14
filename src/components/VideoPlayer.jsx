import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const VideoPlayer = ({ video }) => {
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const [subscribed, setSubscribed] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
        if (disliked) setDisliked(false);
    };

    const handleDislike = () => {
        setDisliked(!disliked);
        if (liked) setLiked(false);
    };

    const handleSubscribe = () => {
        setSubscribed(!subscribed);
    };

    return (
        <div className="video-player-container">
            <div className="video-embed">
                <iframe
                    src={video.embedUrl}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            <div className="video-info-section">
                <h1 className="video-title">{video.title}</h1>

                <div className="video-actions">
                    <div className="channel-info">
                        <img
                            src={video.channelAvatar}
                            alt={video.channelName}
                            className="channel-avatar-large"
                        />
                        <div className="channel-details">
                            <div className="channel-name">{video.channelName}</div>
                            <div className="video-meta">{video.views} views • {video.uploadTime}</div>
                        </div>
                    </div>

                    <div className="action-buttons">
                        <ButtonGroup>
                            <Button
                                variant={liked ? 'primary' : 'outline-secondary'}
                                onClick={handleLike}
                                className="action-btn"
                            >
                                👍 {liked ? video.likes + 1 : video.likes}
                            </Button>
                            <Button
                                variant={disliked ? 'danger' : 'outline-secondary'}
                                onClick={handleDislike}
                                className="action-btn"
                            >
                                👎 {disliked ? video.dislikes + 1 : video.dislikes}
                            </Button>
                        </ButtonGroup>

                        <Button
                            variant={subscribed ? 'danger' : 'primary'}
                            onClick={handleSubscribe}
                            className="subscribe-btn"
                        >
                            {subscribed ? 'Subscribed' : 'Subscribe'}
                        </Button>
                    </div>
                </div>

                <div className="video-description">
                    <p>{video.description}</p>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;