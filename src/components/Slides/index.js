import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({ image, alt, text }) => (
  <div className="slide">
    <div className="slide-image">
      <img
        src={process.env.PUBLIC_URL + image}
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

Slide.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const Slides = ({ slides }) => (
  <div className="slides">
    {
      slides.map(
        ({
          imagem: image,
          descrição: description,
          'texto-inferior': text,
        }) => <Slide image={image} alt={description} text={text} />,
      )
    }
  </div>
);

Slides.propTypes = {
  slides: PropTypes.arrayOf(Slide.propTypes).isRequired,
};

export default Slides;
