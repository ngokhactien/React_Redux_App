import AdminHomePage from "./../containers/AdminHomePage";
import TaskBoard from "./../containers/taskboard";

export const API_ENDFOINT = 'http://localhost:8080'

export const STATUSES = [
    {
        value : 0 ,
        label : 'READY'
    },
    {
        value : 1 ,
        label : 'IN PROGRESS'
    },
    {
        value : 2 ,
        label : 'COMPLETE'
    }
];

export const STATUS_CODE = {
  SUCCESS : 200 ,
  CREATED : 201 ,
  UPDATE : 202
};

export const ADMIN_ROUTES = [
  {
    path :'/',
    name : 'Trang quảng trị' ,
    exact : true,
    component : AdminHomePage
  },
  {
    path :'/task-board',
    name : 'Quản lý Công Việc' ,
    component : TaskBoard
  }
]
