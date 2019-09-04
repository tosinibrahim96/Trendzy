import { actionTypes } from '../actions/actionTypes';
import { initialState } from '../initialState';

const { SET_CURRENT_USER } = actionTypes;
export const setCurrentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};
