import React from 'react';
import { Card, ListGroup, ListGroupItem, Badge, Row, Col } from 'react-bootstrap';
import './Profile.css';

const Profile = () => {
  const userProfile = {
    name: "Sumit Roy",
    email: "sumitroy39@gmail.com",
    joined: "July 13, 2018",
    bio: "Digital Marketing Enthusiast",
    followers: 3500,
    following: 2090,
    posts: 163,
    profilePicture: "https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg",
    socialStats: {
      facebook: 26472,
      youtube: 13911,
      instagram: 6524,
      googlePlus: 5093,
      twitter: 45322,
      linkedIn: 1765,
    },
  };

  const recentPosts = [
    "How to boost your social media presence",
    "Top 10 SEO tips for 2024",
    "The power of influencer marketing",
  ];

  const activityFeed = [
    "Liked a post on Facebook",
    "Uploaded a new video on YouTube",
    "Started following @example on Twitter",
    "Commented on a LinkedIn post",
  ];

  return (
    <div className="profile-content">
      <h1 style={{ fontWeight: 'bold' }}>Profile</h1>
      <Row>
        <Col md={4}>
          <Card className="profile-card">
            <Card.Img variant="top" src={userProfile.profilePicture} />
            <Card.Body>
              <Card.Title><strong>{userProfile.name}</strong></Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{userProfile.email}</Card.Subtitle>
              <Card.Text>
                <strong>Joined:</strong> {userProfile.joined} <br />
                <strong>Bio:</strong> {userProfile.bio} <br />
                <strong>Followers:</strong> {userProfile.followers} <br />
                <strong>Following:</strong> {userProfile.following} <br />
                <strong>Posts:</strong> {userProfile.posts}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card className="social-stats-card">
            <Card.Body>
              <Card.Title>Social Media Statistics</Card.Title>
              <Row>
                {Object.keys(userProfile.socialStats).map((key) => (
                  <Col md={4} key={key}>
                    <ListGroup>
                      <ListGroupItem className="d-flex justify-content-between align-items-center">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                        <Badge pill bg="primary">
                          {userProfile.socialStats[key]}
                        </Badge>
                      </ListGroupItem>
                    </ListGroup>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
          <Card className="recent-posts-card mt-4">
            <Card.Body>
              <Card.Title>Recent Posts</Card.Title>
              <ListGroup>
                {recentPosts.map((post, index) => (
                  <ListGroupItem key={index}>{post}</ListGroupItem>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
          <Card className="activity-feed-card mt-4">
            <Card.Body>
              <Card.Title>Activity Feed</Card.Title>
              <ListGroup>
                {activityFeed.map((activity, index) => (
                  <ListGroupItem key={index}>{activity}</ListGroupItem>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
