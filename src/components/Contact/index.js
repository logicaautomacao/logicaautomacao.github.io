import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, FormGroup, Label, Button, Input,
} from 'reactstrap';
import './index.css';

const Contact = ({
  contact: {
    email,
    título: title,
    mensagem: message,
    enviar: sendButton,
    'formcarry-url': formcarryUrl,
  },
}) => (
  <div className="contact">
    <h2>{title}</h2>
    <Form className="contactForm" action={formcarryUrl}>
      <FormGroup>
        <Label for="emailInput">{email}</Label>
        <Input type="email" name="email" id="emailInput" placeholder={email} />
      </FormGroup>
      <FormGroup>
        <Label for="messageInput">{message}</Label>
        <Input type="textarea" name="message" id="messageInput" placeholder={message} />
      </FormGroup>
      <Button>{sendButton}</Button>
    </Form>
  </div>
);

Contact.propTypes = {
  contact: PropTypes.shape({
    email: PropTypes.string.isRequired,
    título: PropTypes.string.isRequired,
    mensagem: PropTypes.string.isRequired,
    enviar: PropTypes.string.isRequired,
    'formcarry-url': PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;
