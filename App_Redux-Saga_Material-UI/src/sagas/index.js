import { call, delay, fork, put, select, take, takeEvery, takeLatest } from 'redux-saga/effects';
import { hideModal } from '../actions/modal';
import { addTaskFail, addTaskSuccess, deleteTaskFail, deleteTaskSuccess, fetchListTask, fetchListTaskFail, fetchListTaskSuccess, updateTaskFail, updateTaskSuccess } from './../actions/task';
import { hideLoading, showLoading } from './../actions/ui';
import { addTask, getList, updateTask , deleteTask } from './../apis/task';
import { STATUSES, STATUS_CODE } from './../contants';
import * as taskTypes from './../contants/task';
import { toastSuccess } from './../helpers/toastHelper';

function* watchFetchListTaskAction() {
  while(true){
    const action = yield take(taskTypes.FETCH_TASK); // là action khi được dispatch
    yield put(showLoading());     // để dispatch một action
    const { params } = action.payload ;
    const resp = yield call(getList , params);  // call( tên func , tham số chuyền vào )
    const { status , data } = resp ;
    if(status === STATUS_CODE.SUCCESS){
      yield delay(1000);
      toastSuccess('Load Data Success') ;
      yield put(fetchListTaskSuccess(data)) // để dispath action { type : taskConstants.FETCH_TASK_SUCCESS, payload : {data } }
    }else {
      yield delay(1000);
      yield put(fetchListTaskFail(data)); // thất bại
    }
    yield put(hideLoading());
  }
}

function* filterTaskSaga({ payload }) {    // muốn vào dữ liệu bên trong dùng { } để v
  yield delay(600);
  const { keyword } = payload;
  yield put(
    fetchListTask({
      q:keyword
  }))
}


function* addTaskSaga({ payload }) {
  const { title , description } = payload ;
  yield put(showLoading())
  const resp = yield call(addTask , {  // chuyền thao số vào
    title ,
    description ,
    status : STATUSES[0].value
  }) ;
  const { data , status } = resp ;
  if(status === STATUS_CODE.CREATED) {
    yield put(addTaskSuccess(data)) ;
    yield put(hideModal())
  }else {
    yield put(addTaskFail(data))
  }
  yield delay(1000);
  yield put(hideLoading())
}

function* updateTaskSaga({ payload }) {
  const { title , description , status } = payload ;
  const taskEditting = yield select(state =>  state.task.taskEditting);
  yield put(showLoading());
  const resp = yield call( updateTask, {title , description , status} , taskEditting.id );
  const { data , status : statusCode } = resp ;  // status : statusCode  dùng để đổi tên lại
  if(statusCode === STATUS_CODE.SUCCESS) {
    yield put(updateTaskSuccess(data)) ;
    yield put(hideModal())
  }else {
    yield put(updateTaskFail(data))
  }
  yield delay(800);
  yield put(hideLoading())
}

function* deleteTaskSaga({ payload }) {
  const { id } = payload ;
  yield put(showLoading())
  const resp = yield call(deleteTask , id) ;
  const { data , status } = resp ;
  if(status === STATUS_CODE.SUCCESS) {
    yield put(deleteTaskSuccess(id)) ;
    yield put(hideModal())
  }else {
    yield put(deleteTaskFail(data))
  }
  yield delay(800);
  yield put(hideLoading())
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield takeLatest(taskTypes.FILTER_TASK , filterTaskSaga)   // nó vừa fork ra nhánh mới và có vòng lặp vô tận và nó lắng nghe các action
  // takeLatest nó có thể chuyền action  payload : data qua tham số thứ 2
  yield takeEvery(taskTypes.ADD_TASK , addTaskSaga)
  yield takeLatest(taskTypes.UPDATE_TASK , updateTaskSaga)
  yield takeLatest(taskTypes.DELETE_TASK , deleteTaskSaga)
}

export default rootSaga;


