import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

import {
  nextSlide as nextSlideAction,
  prevSlide as prevSlideAction,
  gotoSlide as gotoSlideAction,
} from '../../reducers/actions';

import './index.css';

const Slide = ({ image, alt, text }) => (
  <CarouselItem key={image}>
    <div className="slide-container">
      <div className="slide">
        <img
          src={process.env.PUBLIC_URL + image}
          alt={alt}
          className="slide-image"
        />
        <div className="side-card">
          <span className="side-text">
            { text }
          </span>
        </div>
      </div>
    </div>
  </CarouselItem>
);

Slide.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const Slides = ({
  slides,
  carrouselActiveIndex,
  nextSlide,
  prevSlide,
  gotoSlide,
}) => (
  <Carousel
    activeIndex={carrouselActiveIndex}
    next={nextSlide(slides)}
    prev={prevSlide(slides)}
  >
    <CarouselIndicators
      items={slides}
      activeIndex={carrouselActiveIndex}
      onClickHandler={gotoSlide}
    />
    {
      slides.map(
        ({
          imagem: image,
          descrição: description,
          'texto-lateral': text,
        }) => Slide({ image, alt: description, text }),
      )
    }
    <CarouselControl className="slide-control" direction="prev" directionText="Anterior" onClickHandler={prevSlide(slides)} />
    <CarouselControl className="slide-control" direction="next" directionText="Próximo" onClickHandler={nextSlide(slides)} />
  </Carousel>
);

Slides.propTypes = {
  slides: PropTypes.arrayOf(Slide.propTypes).isRequired,
  carrouselActiveIndex: PropTypes.isRequired,
  nextSlide: PropTypes.func.isRequired,
  prevSlide: PropTypes.func.isRequired,
  gotoSlide: PropTypes.func.isRequired,
};

const mapStateToProps = ({ carrouselActiveIndex }) => ({
  carrouselActiveIndex,
});

const mapDispatchToActions = dispatch => ({
  nextSlide: items => () => dispatch({ type: nextSlideAction, payload: items }),
  prevSlide: items => () => dispatch({ type: prevSlideAction, payload: items }),
  gotoSlide: slide => dispatch({ type: gotoSlideAction, payload: slide }),
});

export default connect(mapStateToProps, mapDispatchToActions)(Slides);
