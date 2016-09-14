import 'babel-polyfill';
import {expect} from 'chai';
import {modifyStudent} from '../../src/saga/Student';
import {modifyStudentDone} from '../../src/actions/Student';
import { put } from 'redux-saga/effects';

describe('Students saga.', () => {
  it('modifyStudent should be success.', () => {
    const student = {
      name: 'dding1',
      sex: 'male'
    };
    const modifyStudentGenerator = modifyStudent(student);
    expect(modifyStudentGenerator.next().value).to.deep.equal(put(modifyStudentDone(student)));
  })
});
