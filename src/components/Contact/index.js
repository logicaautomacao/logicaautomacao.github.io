import React from 'react';
import {
  Form, FormGroup, Label, Button, Input
} from 'reactstrap';
import './index.css';

const Contact = ({
    contact: {
      email,
      'título': title,
      'mensagem': message,
      'email-enviado': sentMessage,
      'enviar': sendButton,
      'formcarry-url': formcarryUrl
    }
  }) => (
  <div className="contact">
    <h2>{ title }</h2>
    <Form className="contactForm" action={ formcarryUrl }>
      <FormGroup>
        <Label for="emailInput">{ email }</Label>
        <Input type="email" name="email" id="emailInput" placeholder={ email } />
      </FormGroup>
      <FormGroup>
        <Label for="messageInput">{ message }</Label>
        <Input type="textarea" name="message" id="messageInput" placeholder={ message } />
      </FormGroup>
      <Button>{ sendButton }</Button>
    </Form>
  </div>
)


export default Contact;
