import React, { useState, useEffect, } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';


function App() {

  const data = useStaticQuery(graphql`
  query HeroQuery {
    strapiHero {
      title
      subtitle
      name
      cta
    }
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
        }
      }
    }
    allStrapiPortfolio {
      edges {
        node {
          content
          img {
            localFile {
              url
              childImageSharp {
                fluid(maxWidth: 595) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          repo
          slug
          strapiId
          title
          url
        }
      }
    }
    allStrapiSkill {
      edges {
        node {
          title
          devIcon
        }
      }
    }
    strapiAbout {
      content
      img
    }
    strapiContact {
      email
    }
    strapiHead {
      title
      lang
      description
    }
  }
    `)

  console.log(data);

  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero(data.strapiHero);
    setAbout(data.strapiAbout);
    setProjects(data.allStrapiPortfolio.edges);
    setContact(data.strapiContact);
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
