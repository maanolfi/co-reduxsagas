import { takeLatest, all } from 'redux-saga/effects'
import axios from 'axios'
import getIP from './ipSagas'
import getUA from './uaSagas'

function* index() {
  yield all([
    takeLatest('LOAD_DATA_REQUEST', getIP, axios),
    takeLatest('LOAD_DATA_UA_REQUEST', getUA, axios)
  ])
}

export default index
