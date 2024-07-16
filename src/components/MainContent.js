import React from 'react';
import { Radar, Bar, Pie } from 'react-chartjs-2';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
} from 'chart.js';

ChartJS.register(
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title
);

const dummyData = {
    metrics: {
        facebook: { likes: 26472 },
        youtube: { subscribers: 13911 },
        instagram: { followers: 6524 },
        twitter: { followers: 45322 },
        linkedin: { followers: 1765 },
    },
    radarChartData: {
        labels: ['Facebook', 'YouTube', 'Instagram', 'Twitter', 'LinkedIn'],
        datasets: [
            {
                label: 'Followers/Subscriptions',
                data: [26472, 13911, 6524, 45322, 1765],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
            },
        ],
    },
    barChartData: {
        labels: ['Facebook', 'YouTube', 'Instagram', 'Twitter', 'LinkedIn'],
        datasets: [
            {
                label: 'Followers/Subscriptions',
                data: [21472, 13911, 26524, 15322, 2965],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    },
    pieChartData: {
        labels: ['Facebook', 'Twitter', 'Instagram'],
        datasets: [
            {
                data: [21472, 12992, 26524],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
    },
};

const growthData = {
    facebook: 5,    // Positive growth
    youtube: 3,    // Negative growth
    twitter: -4,     // No change
    instagram: 10,  // Positive growth
    linkedin: -2    // Negative growth
};

const renderArrow = (growth) => {
    if (growth > 0) {
        return <FaArrowUp style={{ color: 'green', marginLeft: '8px' }} />;
    } else if (growth < 0) {
        return <FaArrowDown style={{ color: 'red', marginLeft: '8px' }} />;
    }
    return null;
};

const MainContent = () => {
    return (
        <Container className="main-content">
            <h1 style={{ fontWeight: 'bold' }}>Home</h1>
            <Row>
                <Col md={6} className="mb-4">
                    <div className="metric-card">
                        <div className="individual" style={{ fontWeight: 'bold', color: "#1877F2" }}>
                            <h3>Facebook</h3>
                            <p>Likes: {dummyData.metrics.facebook.likes} {renderArrow(growthData.facebook)}</p>
                        </div>
                        <div className="individual" style={{ fontWeight: 'bold', color: "#E62117" }}>
                            <h3>YouTube</h3>
                            <p>Subscribers: {dummyData.metrics.youtube.subscribers} {renderArrow(growthData.youtube)}</p>
                        </div>
                        <div className="individual" style={{ fontWeight: 'bold', color: "#08A0E9" }}>
                            <h3>Twitter</h3>
                            <p>Followers: {dummyData.metrics.twitter.followers} {renderArrow(growthData.twitter)}</p>
                        </div>
                        <div className="individual" style={{ fontWeight: 'bold', color: "#DD2A7B" }}>
                            <h3>Instagram</h3>
                            <p>Followers: {dummyData.metrics.instagram.followers} {renderArrow(growthData.instagram)}</p>
                        </div>
                        <div className="individual" style={{ fontWeight: 'bold', color: "#0E7688" }}>
                            <h3>LinkedIn</h3>
                            <p>Followers: {dummyData.metrics.linkedin.followers} {renderArrow(growthData.linkedin)}</p>
                        </div>
                    </div>
                </Col>
                <Col md={6} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Likes Distribution</Card.Title>
                            <Bar data={dummyData.barChartData} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={4} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Followers/Subscriptions</Card.Title>
                            <Radar data={dummyData.radarChartData} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Social Media Distribution</Card.Title>
                            <Pie data={dummyData.pieChartData} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default MainContent;
