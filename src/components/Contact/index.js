import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, FormGroup, Label, Button, Input, UncontrolledAlert,
} from 'reactstrap';
import { connect } from 'react-redux';

import {
  sendContactEmail,
  updateCustomerEmail,
  updateCustomerMessage,
} from '../../reducers/actions';

import './index.css';

const Contact = ({
  contact: {
    email,
    título: title,
    mensagem: message,
    enviar: sendButton,
    enviando: sending,
    'email-enviado': sent,
  },
  updateEmail,
  updateMessage,
  submitContactForm,
  loading,
  success,
}) => (
  <div className="contact">
    <h2>{title}</h2>
    <UncontrolledAlert className="successAlert" isOpen={success}>{sent}</UncontrolledAlert>
    <Form className="contactForm">
      <FormGroup>
        <Label for="emailInput">{email}</Label>
        <Input
          id="emailInput"
          type="email"
          name="email"
          placeholder={email}
          onChange={e => updateEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="messageInput">{message}</Label>
        <Input
          id="messageInput"
          type="textarea"
          name="message"
          placeholder={message}
          onChange={e => updateMessage(e.target.value)}
        />
      </FormGroup>
      <Button
        color="primary"
        outline={success || loading}
        disabled={success || loading}
        onClick={submitContactForm}
      >
        {loading ? sending : sendButton}
      </Button>
    </Form>
  </div>
);

Contact.propTypes = {
  contact: PropTypes.shape({
    email: PropTypes.string.isRequired,
    título: PropTypes.string.isRequired,
    mensagem: PropTypes.string.isRequired,
    enviar: PropTypes.string.isRequired,
    enviando: PropTypes.string.isRequired,
    'email-enviado': PropTypes.string.isRequired,
  }).isRequired,
  updateEmail: PropTypes.func.isRequired,
  updateMessage: PropTypes.func.isRequired,
  submitContactForm: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ contactForm: { loading, success } }) => ({
  loading,
  success,
});

const mapDispatchToActions = dispatch => ({
  updateEmail: email => dispatch({
    type: updateCustomerEmail,
    payload: { email },
  }),
  updateMessage: message => dispatch({
    type: updateCustomerMessage,
    payload: { message },
  }),
  submitContactForm: () => dispatch({
    type: sendContactEmail,
  }),
});

export default connect(mapStateToProps, mapDispatchToActions)(Contact);
