import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const ProjectImg = ({localFile}) => {
  const imageFluid = localFile.childImageSharp.fluid;
  return <Img fluid={imageFluid} />;
};

ProjectImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default ProjectImg;
