import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { Bar, Pie, Line } from 'react-chartjs-2';
import './Analytics.css';

const Analytics = () => {
  // Dummy data for charts
  const barData = {
    labels: ['Facebook', 'YouTube', 'Twitter', 'Instagram', 'LinkedIn'],
    datasets: [
      {
        label: 'Post Engagements',
        data: [17500, 9900, 3200, 19520, 8960],
        backgroundColor: ['#3b5998', '#FF0000', '#1DA1F2', '#C13584', '#0077B5'],
      },
    ],
  };

  const pieData = {
    labels: ['Likes', 'Shares', 'Comments'],
    datasets: [
      {
        data: [9587, 7654, 12345],
        backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
      },
    ],
  };

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'New Followers',
        data: [1500, 1700, 1800, 2200, 2600, 3000],
        borderColor: '#42A5F5',
        fill: false,
      },
      {
        label: 'Unfollowers',
        data: [500, 600, 400, 300, 200, 100],
        borderColor: '#FFA726',
        fill: false,
      },
    ],
  };

  return (
    <div className="analytics-content">
      <Container>
        <h1 style={{ fontWeight: 'bold' }}>Analytics</h1>
        <Row>
          <Col md={6}>
            <Card className="analytics-card">
              <Card.Body>
                <Card.Title>Post Engagements</Card.Title>
                <Bar data={barData} />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="analytics-card">
              <Card.Body>
                <Card.Title>Engagement Metrics</Card.Title>
                <Pie data={pieData} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={12}>
            <Card className="analytics-card">
              <Card.Body>
                <Card.Title>Follower Trends</Card.Title>
                <Line data={lineData} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Analytics;
