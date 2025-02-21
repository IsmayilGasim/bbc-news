import React from "react";
import { Card } from "react-bootstrap";

function ArticleCard() {
  return (
    <Card className="m-3">
      <Card.Img src="https://ichef.bbci.co.uk/news/480/cpsprodpb/1d70/live/d43adf10-ecd2-11ef-9030-294a14d14932.jpg.webp" variant="top"/>
      <Card.Body>
        <Card.Title>
          Can Europe and UK persuade Trump they're relevant to Ukraine's future?
        </Card.Title>
        <Card.Text>
          Europe's hastily convened security summit in Paris is proof of
          leaders' anxiety about their role in defending Ukraine, the BBC's
          Katya Adler writes.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        
        <small className="text-muted">2 hours ago   |   Politics</small>
        
        
      </Card.Footer>
    </Card>
  );
}

export default ArticleCard;
