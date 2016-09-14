import {MODIFY_STUDENT, MODIFY_STUDENT_DONE} from '../actions/Student';
import { effects } from 'redux-saga';
import {modifyStudentDone} from '../actions/Student';

const {take, put, fork} = effects;

export function *watchStudentModify() {
  while(true) {
    console.log('start watching MODIFY_STUDENT action');
    const student = yield take(MODIFY_STUDENT);
    yield fork(modifyStudent, student);
  }
}

export function *modifyStudent(student) {
  yield put(modifyStudentDone(student))
}
