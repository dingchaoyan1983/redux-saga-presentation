
export const MODIFY_STUDENT = Symbol('modify student');
export const MODIFY_STUDENT_DONE = Symbol('modify student done');

const initialState = {
  name: '',
  gender: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MODIFY_STUDENT_DONE:
      console.log('modify student done');
      return {...state, ...action.payload};
    default:
      return state;
  }
}
