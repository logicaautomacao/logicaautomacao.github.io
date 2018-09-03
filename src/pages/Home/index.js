import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

import Navbar from '../../components/Navbar';
import Slides from '../../components/Slides';
import Presentation from '../../components/Presentation';
import Services from '../../components/Services';
import Contact from '../../components/Contact';
import './index.css';

const Home = ({ home }) => {

  const {
    'imagens-superiores': slides,
    'apresentação': presentation,
    'serviços': services,
    'contato': contact,
  } = home;

  return <div className="Home">
    <Navbar />
    <Slides slides={ slides } />
    <Container>
      <Presentation presentation={ presentation }/>
      <Services services={ services } />
      <hr />
      <Contact contact={ contact }/>
    </Container>
  </div>;
}

Home.propTypes = {
  slides: PropTypes.isRequired
};

export default Home;
