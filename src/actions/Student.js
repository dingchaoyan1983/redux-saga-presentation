export const MODIFY_STUDENT = Symbol('modify student');
export const MODIFY_STUDENT_DONE = Symbol('modify student done');

export function modifyStudent() {
  return {
    type: MODIFY_STUDENT,
    payload: {
      name: 'dding',
      gender: 'male'
    }
  };
}
