import request from 'request';
import {
  sendContactEmail,
  formResponse,
  updateCustomerEmail,
  updateCustomerMessage,
  nextSlide,
  prevSlide,
  gotoSlide,
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
    case sendContactEmail: {
      submitContactForm(state, action);
      return {
        ...state,
        contactForm: {
          ...state.contactForm,
          loading: true,
        },
      };
    }
    case formResponse:
      return {
        ...state,
        contactForm: {
          ...state.contactForm,
          loading: false,
          success: action.payload.success,
        },
      };
    case nextSlide: {
      const isLastIndex = index => index === action.payload.length - 1;
      const activeIndex = state.carrouselActiveIndex;
      return {
        ...state,
        carrouselActiveIndex: isLastIndex(activeIndex) ? 0 : activeIndex + 1,
      };
    }
    case prevSlide: {
      const lastIndex = action.payload.length - 1;
      const activeIndex = state.carrouselActiveIndex;
      return {
        ...state,
        carrouselActiveIndex: activeIndex === 0 ? lastIndex : activeIndex - 1,
      };
    }
    case gotoSlide: {
      return {
        ...state,
        carrouselActiveIndex: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reduce;
