import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { Bar, Pie, Line } from 'react-chartjs-2';
import './Reports.css';

const Reports = () => {
  // Dummy data for charts
  const barData = {
    labels: ['Facebook', 'YouTube', 'Twitter', 'Instagram', 'LinkedIn'],
    datasets: [
      {
        label: 'Followers',
        data: [29500, 13900, 4200, 18520, 1760],
        backgroundColor: ['#3b5998', '#FF0000', '#1DA1F2', '#C13584', '#0077B5'],
      },
    ],
  };

  const pieData = {
    labels: ['Engaged Users', 'Page Impressions'],
    datasets: [
      {
        data: [19878, 91834],
        backgroundColor: ['#42A5F5', '#66BB6A'],
      },
    ],
  };

  const lineData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Daily Reach',
        data: [600, 1000, 1300, 900],
        borderColor: '#42A5F5',
        fill: false,
      },
      {
        label: 'Average Reach',
        data: [800, 900, 1000, 1100],
        borderColor: '#FFA726',
        fill: false,
      },
    ],
  };

  return (
    <div className="reports-content">
      <Container>
        <h1 style={{ fontWeight: 'bold' }}>Reports</h1>
        <Row>
          <Col md={6}>
            <Card className="reports-card">
              <Card.Body>
                <Card.Title>Social Media Followers</Card.Title>
                <Bar data={barData} />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="reports-card">
              <Card.Body>
                <Card.Title>Engagement Metrics</Card.Title>
                <Pie data={pieData} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={12}>
            <Card className="reports-card">
              <Card.Body>
                <Card.Title>Facebook Daily Reach</Card.Title>
                <Line data={lineData} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Reports;
