import { Card } from "react-bootstrap";

function ArticleCard({img, title, text, category,publishingDate}) {
  return (
    <Card className="m-3">
      <Card.Img src={img} variant="top" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{publishingDate} | {category}</small>
      </Card.Footer>
    </Card>
  );
}

export default ArticleCard;
