import React from 'react';
import { Container } from 'reactstrap';

import Navbar from '../../components/Navbar';
import Slides from '../../components/Slides';
import Presentation from '../../components/Presentation';
import Services from '../../components/Services';
import Contact from '../../components/Contact';
import tech from '../../logo.svg';
import './index.css';

export default () => (
  <div className="Home">
    <Navbar />
    <Slides
      image={tech}
      alt="potato"
      text="Um texto muito explicativo"
    />
    <Container>
      <Presentation />
      <Services />
      <hr />
      <Contact />
    </Container>
  </div>
);
