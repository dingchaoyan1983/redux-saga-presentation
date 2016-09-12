
import { MODIFY_STUDENT_DONE } from '../actions/Student';

const initialState = {
  name: '',
  gender: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MODIFY_STUDENT_DONE:
      console.log('modify student done');
      console.log(action);
      return {...state, ...action.payload};
    default:
      return state;
  }
}
