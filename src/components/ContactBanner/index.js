import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const ContactBanner = ({ info }) => (
  <div className="ContactBanner">
    {
      info.map(
        contact => (
          <div className="contactBlock">
            <img alt={contact['descrição']} src={contact.imagem} />
            <span className="contact">
              {contact.contato}
            </span>
          </div>
        ),
      )
    }
  </div>
);

ContactBanner.propTypes = {
  info: PropTypes.isRequired,
};

export default ContactBanner;
