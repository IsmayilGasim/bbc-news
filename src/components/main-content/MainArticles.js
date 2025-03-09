import { Container, Row, Col } from "react-bootstrap";
import ArticleCard from "../cards/ArticleCard";

function MainArticles({ news }) {
  if (!news) {
    news = [];
    news[0] = {};
    news[0].image_url = "Loading...";
    news[0].description = "Loading...";
    news[0].title = "Loading...";
    news[0].category=[]
  }

  return (
    <Container fluid>
      <Row>
        <Col lg={3}>
          <Row>
           {news[0] &&  <ArticleCard
              img={news[0]?.image_url}
              text={news[0]?.description}
              title={news[0]?.title}
              category={news[0]?.category[0]}
              publishingDate={news[0]?.pubDate}
            />}
          </Row>
          <Row>
            {news[1] && (
              <ArticleCard
                img={news[1]?.image_url}
                text={news[1]?.description}
                title={news[1]?.title}
                category={news[1]?.category[0]}
                publishingDate={news[1]?.pubDate}
              />
            )}
          </Row>
        </Col>

        <Col lg={6}>
          {news[2] && (
            <ArticleCard
              img={news[2]?.image_url}
              text={news[2]?.description}
              title={news[2]?.title}
              category={news[2]?.category[0]}
              publishingDate={news[2]?.pubDate}
            />
          )}
        </Col>

        <Col lg={3}>
          <Row>
            {news[3] && (
              <ArticleCard
                text={news[3]?.description}
                title={news[3]?.title}
                category={news[3]?.category[0]}
                publishingDate={news[3]?.pubDate}
              />
            )}
          </Row>
          <Row>
            {news[4] && (
              <ArticleCard
                text={news[4]?.description}
                title={news[4]?.title}
                category={news[4]?.category[0]}
                publishingDate={news[4]?.pubDate}
              />
            )}
          </Row>
          <Row>
            {news[5] && (
              <ArticleCard
                text={news[5]?.description}
                title={news[5]?.title}
                category={news[5]?.category[0]}
                publishingDate={news[5]?.pubDate}
              />
            )}
          </Row>
          <Row>
            {news[6] && (
              <ArticleCard
                text={news[6]?.description}
                title={news[6]?.title}
                category={news[6]?.category[0]}
                publishingDate={news[6]?.pubDate}
              />
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default MainArticles;
