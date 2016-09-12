import { effects } from 'redux-saga';
import {watchStudentModify} from './Student';
import watchFetchGithubApi from './Github';

const { fork } = effects;
export default function *rootSaga() {
  yield fork(watchStudentModify);
  yield fork(watchFetchGithubApi);
}
