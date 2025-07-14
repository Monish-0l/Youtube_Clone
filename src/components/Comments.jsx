import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { dummyComments } from '../data/dummyData';

const Comments = ({ videoId }) => {
    const [comments, setComments] = useState(
        dummyComments.filter(comment => comment.videoId === videoId)
    );
    const [newComment, setNewComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim()) {
            const comment = {
                id: comments.length + 1,
                videoId,
                author: 'You',
                avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop',
                content: newComment,
                timestamp: 'Now',
                likes: 0
            };
            setComments([comment, ...comments]);
            setNewComment('');
        }
    };

    return (
        <div className="comments-section">
            <h4>Comments ({comments.length})</h4>

            <Form onSubmit={handleSubmit} className="comment-form">
                <div className="comment-input-container">
                    <img
                        src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop"
                        alt="Your avatar"
                        className="comment-avatar"
                    />
                    <Form.Control
                        as="textarea"
                        rows={2}
                        placeholder="Add a comment..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="comment-input"
                    />
                </div>
                <div className="comment-actions">
                    <Button type="submit" variant="primary" size="sm">
                        Comment
                    </Button>
                </div>
            </Form>

            <div className="comments-list">
                {comments.map(comment => (
                    <Card key={comment.id} className="comment-card">
                        <Card.Body>
                            <div className="comment-header">
                                <img
                                    src={comment.avatar}
                                    alt={comment.author}
                                    className="comment-avatar"
                                />
                                <div className="comment-info">
                                    <div className="comment-author">{comment.author}</div>
                                    <div className="comment-timestamp">{comment.timestamp}</div>
                                </div>
                            </div>
                            <div className="comment-content">{comment.content}</div>
                            <div className="comment-actions">
                                <Button variant="link" size="sm" className="comment-like">
                                    👍 {comment.likes}
                                </Button>
                                <Button variant="link" size="sm" className="comment-dislike">
                                    👎
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Comments;