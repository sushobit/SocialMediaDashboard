import React, { useState } from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import './Settings.css';

const Settings = () => {
  const [profile, setProfile] = useState({
    name: 'Sumit Roy',
    email: 'sumitroy39@gmail.com',
    bio: 'Digital Marketing Enthusiast',
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here
    alert('Settings updated!');
  };

  const handleConnect = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="settings-content">
      <h1 style={{ fontWeight: 'bold' }}>Settings</h1>
      <Row>
        <Col md={6}>
          <Card className="settings-card">
            <Card.Body>
              <Card.Title>Profile Information</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleProfileChange}
                  />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleProfileChange}
                  />
                </Form.Group>
                <Form.Group controlId="formBio">
                  <Form.Label>Bio</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="bio"
                    value={profile.bio}
                    onChange={handleProfileChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Update Profile
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="settings-card">
            <Card.Body>
              <Card.Title>Manage Notifications</Card.Title>
              <Form>
                <Form.Group controlId="formEmailNotifications">
                  <Form.Check
                    type="checkbox"
                    label="Email Notifications"
                    defaultChecked
                  />
                </Form.Group>
                <Form.Group controlId="formSMSNotifications">
                  <Form.Check
                    type="checkbox"
                    label="SMS Notifications"
                  />
                </Form.Group>
                <Form.Group controlId="formPushNotifications">
                  <Form.Check
                    type="checkbox"
                    label="Push Notifications"
                    defaultChecked
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Update Notifications
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card className="settings-card mt-4">
            <Card.Body>
              <Card.Title>Connect to Social Media Accounts</Card.Title>
              <Row>
                <Col md={4}>
                  <Button variant="primary" block onClick={() => handleConnect('https://www.facebook.com')}>
                    Connect to Facebook
                  </Button>
                </Col>
                <Col md={4}>
                  <Button variant="danger" block onClick={() => handleConnect('https://www.youtube.com')}>
                    Connect to YouTube
                  </Button>
                </Col>
                <Col md={4}>
                  <Button variant="info" block onClick={() => handleConnect('https://www.twitter.com')}>
                    Connect to Twitter
                  </Button>
                </Col>
                <Col md={4} className="mt-2">
                  <Button variant="secondary" block onClick={() => handleConnect('https://www.linkedin.com')}>
                    Connect to LinkedIn
                  </Button>
                </Col>
                <Col md={4} className="mt-2">
                  <Button variant="dark" block onClick={() => handleConnect('https://www.instagram.com')}>
                    Connect to Instagram
                  </Button>
                </Col>
                <Col md={4} className="mt-2">
                  <Button variant="danger" block onClick={() => handleConnect('https://plus.google.com')}>
                    Connect to Google+
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Settings;