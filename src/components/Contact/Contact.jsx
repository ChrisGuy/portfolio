import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

const Contact = () => {

  const data = useStaticQuery(graphql`
    query ContactQuery {
      strapiContact {
        email
      }
    }
  `)

  const { email } = data.strapiContact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              Like what you see and would like to work with me?
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={email ? `mailto:${email}` : 'https://github.com/cobidev/react-simplefolio'}
            >
              Get in touch!
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
