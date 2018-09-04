import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardBlock,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from 'reactstrap';

import './index.css';

const Service = ({
  título: title,
  subtítulo: subtitle,
  imagem: image,
  texto: text,
}) => (
  <div className="service">
    <Card>
      <CardImg
        top
        width="100%"
        src={image}
        alt={title}
      />
      <CardBlock>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <CardText>{text}</CardText>
      </CardBlock>
    </Card>
  </div>
);

Service.propTypes = {
  título: PropTypes.string.isRequired,
  subtítulo: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
};

const Services = ({ services }) => (
  <div className="services">
    { services.map(service => Service(service)) }
  </div>
);

Services.propTypes = {
  services: PropTypes.arrayOf(Service.PropTypes),
};

Services.defaultProps = {
  services: [],
};

export default Services;
