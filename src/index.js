import 'babel-polyfill';
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
  bindActionCreators
} from 'redux';
import sagaMiddlewareFactory from 'redux-saga';

import StudentReducer from './reducers/Student';
import rootSaga from './saga';
import {modifyStudent} from './actions/Student';
import {fetchGithubApiList} from './actions/Github';

const rootReducer = combineReducers({
  student: StudentReducer
});

const sagaMiddleware = sagaMiddlewareFactory();
const middlewares = [sagaMiddleware];
const store = createStore(rootReducer, compose(applyMiddleware(...middlewares), window.devToolsExtension ? window.devToolsExtension() : f => f));

const actions = bindActionCreators({
  modifyStudent,
  fetchGithubApiList
}, store.dispatch);


sagaMiddleware.run(rootSaga);

const button = document.getElementById('modify_student');
button.addEventListener('click', actions.modifyStudent, false);

const github_fetch_button = document.getElementById('github_api');
github_fetch_button.addEventListener('click', actions.fetchGithubApiList, false);
