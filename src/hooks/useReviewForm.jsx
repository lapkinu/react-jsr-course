import { useReducer, useCallback } from 'react';
import { COUNTER_CONST_RATING } from '../constants/counterConst';

const INITIAL_STATE = {
  name: '',
  text: '',
  rating: COUNTER_CONST_RATING.DEFAULT,
};

const ACTIONS = {
  SET_NAME: 'SET_NAME',
  SET_TEXT: 'SET_TEXT',
  INCREMENT_RATING: 'INCREMENT_RATING',
  DECREMENT_RATING: 'DECREMENT_RATING',
  RESET: 'RESET',
};

const reviewReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_NAME:
      return { ...state, name: action.payload };
    case ACTIONS.SET_TEXT:
      return { ...state, text: action.payload };
    case ACTIONS.INCREMENT_RATING:
      return {
        ...state,
        rating: Math.min(state.rating + COUNTER_CONST_RATING.STEP, COUNTER_CONST_RATING.MAX),
      };
    case ACTIONS.DECREMENT_RATING:
      return {
        ...state,
        rating: Math.max(state.rating - COUNTER_CONST_RATING.STEP, COUNTER_CONST_RATING.MIN),
      };
    case ACTIONS.RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const useReviewForm = () => {
  const [form, dispatch] = useReducer(reviewReducer, INITIAL_STATE);

  const setName = useCallback((value) => {
    dispatch({ type: ACTIONS.SET_NAME, payload: value });
  }, []);

  const setText = useCallback((value) => {
    dispatch({ type: ACTIONS.SET_TEXT, payload: value });
  }, []);

  const incrementRating = useCallback(() => {
    dispatch({ type: ACTIONS.INCREMENT_RATING });
  }, []);

  const decrementRating = useCallback(() => {
    dispatch({ type: ACTIONS.DECREMENT_RATING });
  }, []);

  const clearForm = useCallback(() => {
    dispatch({ type: ACTIONS.RESET });
  }, []);

  return { form, setName, setText, incrementRating, decrementRating, clearForm };
};
