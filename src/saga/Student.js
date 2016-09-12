import {MODIFY_STUDENT, MODIFY_STUDENT_DONE} from '../actions/Student';
import { effects } from 'redux-saga';

const {take, put, fork} = effects;

export function *watchStudentModify() {
  while(true) {
    console.log('start watching MODIFY_STUDENT action');
    const student = yield take(MODIFY_STUDENT);
    yield fork(modifyStudent, student);
  }
}

function *modifyStudent(student) {
  yield put({type: MODIFY_STUDENT_DONE, ...student.payload})
}
