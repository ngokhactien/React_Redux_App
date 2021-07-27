import { fork, take , call, put , delay, takeLatest , takeEvery } from 'redux-saga/effects';
import * as taskTypes from './../contants/task' ;
import { addTask, getList } from './../apis/task';
import { STATUSES, STATUS_CODE } from './../contants';
import { fetchListTaskSuccess , fetchListTaskFail, addTaskSuccess, addTaskFail, fetchListTask } from './../actions/task';
import { showLoading , hideLoading } from './../actions/ui' ;
import { toastSuccess } from './../helpers/toastHelper' ;
import { hideModal } from '../actions/modal';

function* watchFetchListTaskAction() {
  while(true){
    const action = yield take(taskTypes.FETCH_TASK); // là action khi được dispatch
    console.log('action' , action);
    yield put(showLoading());     // để dispatch một action
    const { params } = action.payload ;
    const resp = yield call(getList , params);  // call( tên func , tham số chuyền vào )
    const { status , data } = resp ;

    if(status === STATUS_CODE.SUCCESS){
      yield delay(1000);
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
  yield delay(600);
  const { keyword } = payload;
  console.log(keyword);
  yield put(
    fetchListTask({
      q:keyword
  }))
}


function* addTaskSage({ payload }) {
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
  yield delay(1300);
  yield put(hideLoading())
}


function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield takeLatest(taskTypes.FILTER_TASK , filterTaskSaga)   // nó vừa fork ra nhánh mới và có vòng lặp vô tận và nó lắng nghe các action
  // takeLatest nó có thể chuyền action  payload : data qua tham số thứ 2
  yield takeEvery(taskTypes.ADD_TASK , addTaskSage)
}

export default rootSaga;


