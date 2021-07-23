import React, { useEffect, useState } from 'react';
import ReactMarkdown from "react-markdown"
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
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
                childImageSharp {
                  fluid(maxWidth: 595) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            headline
            content
            excerpt
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

          <div className="blog-banner">
          {articles.slice(articles.length -3, articles.length).map((article) => {
            const { headline, slug, image, strapiId } = article.node;

            const imageFluid = image.localFile.childImageSharp.fluid;

            return (
              <Tilt
                options={{
                  reverse: false,
                  max: 8,
                  perspective: 1000,
                  scale: 1,
                  speed: 300,
                  transition: true,
                  axis: null,
                  reset: true,
                  easing: 'cubic-bezier(.03,.98,.52,.99)',
                }}
                key={strapiId}
              >
                  <a
                    href={'/articles/' + slug }
                    aria-label="Project Link"
                    rel="noopener noreferrer"
                  >
                    <div className="blog-card">
                      <Img fluid={imageFluid} />
                      <h2 className="blog-header">{headline || 'Project Title'}</h2>
                      <div className="blog-content">
                        
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero text-color-main"
                          href={'/articles/' + slug }
                        >
                          Read Me!
                        </a>
                      </div>
                    </div>
                  </a>
              </Tilt>
            );
          })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Blog;
