import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';

import Navbar from '../../components/Navbar';
import Slides from '../../components/Slides';
import Presentation from '../../components/Presentation';
import Services from '../../components/Services';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import './index.css';

const Home = ({ home }) => {
  const {
    'imagens-superiores': slides,
    apresentação: presentation,
    serviços: services,
    contato: contact,
    rodapé: footer,
  } = home;

  return (
    <div className="Home">
      <Navbar />
      <Slides slides={slides} />
      <Container>
        <Presentation presentation={presentation} />
        <Services services={services} />
        <hr />
        <Contact contact={contact} />
      </Container>
      <Footer footer={footer} />
    </div>
  );
};

Home.propTypes = {
  home: PropTypes.isRequired,
};

export default connect(state => ({ home: state['pagina-inicial'] }))(Home);
