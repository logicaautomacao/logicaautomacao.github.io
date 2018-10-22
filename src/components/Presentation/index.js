import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Presentation = ({ presentation: { texto: presentationText } }) => (
  <div className="Presentation">
    {
      presentationText.map(text => <p>{ text }</p>)
    }
  </div>
);

Presentation.propTypes = {
  presentation: PropTypes.shape({
    texto: PropTypes.string.isRequired,
  }).isRequired,
};

export default Presentation;
