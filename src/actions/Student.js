import { MODIFY_STUDENT, MODIFY_STUDENT_DONE } from '../reducers/Student';
import { effects } from 'redux-saga';

const { take, put } = effects;

export function modifyStudent() {
  return {
    type: MODIFY_STUDENT,
    payload: {
      name: 'dding',
      gender: 'male'
    }
  };
}

export function *watchStudentModify() {
  while(true) {
    console.log('start watching MODIFY_STUDENT action');
    const student = yield take(MODIFY_STUDENT);
    yield put({type: MODIFY_STUDENT_DONE, ...student.payload});
  }
}
