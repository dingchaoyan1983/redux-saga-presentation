export const MODIFY_STUDENT = Symbol('modify student');
export const MODIFY_STUDENT_DONE = Symbol('modify student done');

export function modifyStudentDone(student) {
  return {
    type: MODIFY_STUDENT_DONE,
    payload: {
      ...student
    }
  }
}

export function modifyStudent() {
  return {
    type: MODIFY_STUDENT,
    payload: {
      name: 'dding',
      gender: 'male'
    }
  };
}
