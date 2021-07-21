import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

const Skills = () => {

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
    query SkillQuery {
      allStrapiSkill {
        edges {
          node {
            title
            devIcon
          }
        }
      }
    }
  `)

  const skills = data.allStrapiSkill.edges;

  return (
    <section id="skills">
      <Container>
        <div className="skills-wrapper">
          <Title title="Skills" />
          <Fade
            left={isDesktop}
            bottom={isMobile}
            duration={1000}
            delay={500}
            distance="30px"
          >
          {skills.map((skill) => {
            console.log(skill);
            return (
              skill.node.title
            )
          })}
        </Fade>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
