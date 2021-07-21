import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';

const Blog = () => {

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const data = useStaticQuery(graphql`
    query ArticleQuery {
      allStrapiArticle {
        edges {
          node {
            strapiId
            slug
            published_at
            image {
              localFile {
                publicURL
              }
            }
            headline
            content
            Excerpt
          }
        }
      }
    }
  `)

  const articles = data.allStrapiArticle.edges;

  return (
    <section id="blog">
      <Container>
        <div className="blog-wrapper">
          <Title title="Blog" />
          {articles.map((article) => {
            const { headline, content, Excerpt, slug, image, published_at, strapiId } = article.node;

            return (
              <Row key={strapiId}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="blog-card">
                      <h2 className="blog-header">{headline || 'Project Title'}</h2>
                      <div className="blog-content">
                        <p>
                          {Excerpt ||
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                        </p>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero text-color-main"
                          href='#!'
                        >
                          Read More!
                        </a>
                      </div>
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Blog;
