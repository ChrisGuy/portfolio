import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const data = useStaticQuery(graphql`
    query HeadQuery {
      strapiHead {
        title
        lang
        description
      }
    }
  `);

  const { title, lang, description } = data.strapiHead;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang} />
        <meta name="description" content={description} />
      </Helmet>
      <App />
    </>
  );
};
