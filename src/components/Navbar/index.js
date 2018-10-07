import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const NavBar = ({ presentation }) => (
  <div className="NavBar">
    <header className="presentation">
      <div className="logo">
        <img alt={presentation.logo['descrição']} src={presentation.logo.imagem} />
        <span>{presentation.logo.texto}</span>
      </div>
      <div className="faleConosco">
        <img alt="" src={presentation['fale-conosco'].imagem} />
        <span>{presentation['fale-conosco'].texto}</span>
      </div>
    </header>
    <nav>
      <ul>
        {
          presentation['navegação'].map(
            link => (
              <li>{link.texto}</li>
            ),
          )
        }
      </ul>
    </nav>
  </div>
);

NavBar.propTypes = {
  presentation: PropTypes.isRequired,
};

export default NavBar;
