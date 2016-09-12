import {effects, delay} from 'redux-saga';
import {FETCH_GITHUB_API, FETCH_GITHUB_API_DONE} from '../actions/Github';
import api from '../Api';

const { take, fork, call, cancel, cancelled } = effects;

export default function *watchFetchGithubApi() {
  let fetchGithubApi = null;

  while (true) {
    console.log('start watching fetch github api action');
    yield take(FETCH_GITHUB_API);

    if (fetchGithubApi !== null) {
      yield cancel(fetchGithubApi);
    }

    fetchGithubApi = yield fork(fetchGithubApiList);
  }
}

export function *fetchGithubApiList() {
  try {
    yield call(delay, 5000);
    const result = yield call(api.get, 'https://api.github.com');
    console.log(result);
  } catch(e) {
    console.log(e);
  } finally {
    if (yield cancelled()) {
      console.log('cancelled');
    }
  }

  // yield put({type: FETCH_GITHUB_API_DONE, payload: {result}})
}
