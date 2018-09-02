import React from 'react';
import PropTypes from 'prop-types';

const Slides = ({ image, alt, text }) => (
  <div className="slide">
    <div className="slide-image">
      <img
        src={image}
        alt={alt}
        className="img-responsive img-back"
        style={{ width: '100%', height: 300 }}
      />
      <div className="slide-text">
        <span>{text}</span>
      </div>
    </div>
  </div>
);

Slides.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Slides;
