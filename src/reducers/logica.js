import request from 'request';
import {
  sendContactEmail,
  formResponse,
  updateCustomerEmail,
  updateCustomerMessage,
} from './actions';

const submitContactForm = ({
  contactForm: {
    email,
    message,
  },
  'pagina-inicial': {
    contato: {
      'formcarry-url': formcarryUrl,
    },
  },
}, action) => request({
  method: 'POST',
  url: formcarryUrl,
  form: {
    email,
    message,
  },
  headers: {
    accept: 'application/json',
  },
}, err => action.asyncDispatch({
  type: formResponse,
  payload: {
    success: !err,
  },
}));

const reduce = (state, action) => {
  switch (action.type) {
    case updateCustomerEmail:
      return {
        ...state,
        contactForm: {
          ...state.contactForm,
          email: action.payload.email,
          loading: false,
          success: false,
        },
      };
    case updateCustomerMessage:
      return {
        ...state,
        contactForm: {
          ...state.contactForm,
          message: action.payload.message,
          loading: false,
          success: false,
        },
      };
    case sendContactEmail:
      submitContactForm(state, action);
      return {
        ...state,
        contactForm: {
          ...state.contactForm,
          loading: true,
        },
      };
    case formResponse:
      return {
        ...state,
        contactForm: {
          ...state.contactForm,
          loading: false,
          success: action.payload.success,
        },
      };
    default:
      return state;
  }
};

export default reduce;
