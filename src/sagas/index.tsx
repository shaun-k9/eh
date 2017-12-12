import { fork, all } from 'redux-saga/effects';

function* watchNavigate() {
  return true;
}

export default function* root() {
    yield all([
      fork(watchNavigate)
    ])
}