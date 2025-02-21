import { Container, Row, Col } from "react-bootstrap";
import ArticleCard from "../cards/ArticleCard";

function MainArticles() {
  return (
    <Container fluid>
      <Row >
        <Col lg={3}>
          <Row >
            <ArticleCard />
          </Row>
          <Row >
            <ArticleCard />
          </Row>
        </Col>

        <Col lg={6}>
          <ArticleCard />
        </Col>

        <Col lg={3}>
          <Row ><ArticleCard/></Row>
          <Row  ><ArticleCard/></Row>
          <Row ><ArticleCard/></Row>
          <Row  ><ArticleCard/></Row>
        </Col>
      </Row>
    </Container>
  );
}

export default MainArticles;
