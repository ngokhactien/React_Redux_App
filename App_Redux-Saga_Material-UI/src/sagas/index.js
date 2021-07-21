import { fork, take , call, put , delay, takeLatest ,select } from 'redux-saga/effects';
import * as taskTypes from './../contants/task' ;
import { getList } from './../apis/task';
import { STATUS_CODE } from './../contants';
import { fetchListTaskSuccess , fetchListTaskFail, filterTaskSUCCESS } from './../actions/task';
import { showLoading , hideLoading } from './../actions/ui' ;
import { toastSuccess } from './../helpers/toastHelper' ;

function* watchFetchListTaskAction() {
  while(true){
    yield take(taskTypes.FETCH_TASK); // là action khi được dispatch
    yield put(showLoading());     // để dispatch một action
    const resp = yield call(getList);
    const { status , data } = resp ;
    if(status === STATUS_CODE.SUCCESS){
      yield delay(1500);
      toastSuccess();
      yield put(fetchListTaskSuccess(data)) // để dispath action { type : taskConstants.FETCH_TASK_SUCCESS, payload : {data } }
    }else {
      yield delay(1500);
      yield put(fetchListTaskFail(data)); // thất bại
    }
    yield put(hideLoading());
  }
}

function* filterTaskSaga({ payload }) {    // muốn vào dữ liệu bên trong dùng { } để v
  yield delay(500);
  const { keyWord } = payload ;
  const list = yield select(state => state.task.listTask);
  const filteredTask = list.filter(task =>
    task.title
      .trim()
      .toLowerCase()
      .includes(keyWord.trim().toLowerCase())
  );
  yield put(filterTaskSUCCESS(filteredTask))
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield takeLatest(taskTypes.FILTER_TASK , filterTaskSaga)   // nó vừa fork ra nhánh mới và có vòng lặp vô tận và nó lắng nghe các action
  // takeLatest nó có thể chuyền action  payload : data qua tham số thứ 2
}

export default rootSaga;


