import React from 'react';
import { Card } from 'react-bootstrap';

const Widget = ({ data }) => {
  return (
    <div className="col-md-4">
      <Card>
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.description}</Card.Text>
          <Card.Text>
            <small className="text-muted">Last updated {data.lastUpdated}</small>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Widget;
