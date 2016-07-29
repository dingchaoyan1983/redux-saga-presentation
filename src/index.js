import 'babel-polyfill';
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
  bindActionCreators
} from 'redux';
import sagaMiddlewareFactory, { effects } from 'redux-saga';

import StudentReducer from './reducers/Student';
import { modifyStudent, watchStudentModify } from './actions/Student';

const { fork } = effects;

const rootReducer = combineReducers({
  student: StudentReducer
});

const sagaMiddleware = sagaMiddlewareFactory();
const middlewares = [sagaMiddleware];
const store = createStore(rootReducer, compose(applyMiddleware(...middlewares), window.devToolsExtension ? window.devToolsExtension() : f => f));

const studentAction = bindActionCreators({
  modifyStudent
}, store.dispatch);


sagaMiddleware.run(function *() {
  yield fork(watchStudentModify);
});

var button = document.getElementById('modify_student');

button.addEventListener('click', studentAction.modifyStudent, false);
