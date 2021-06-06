import './App.css';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Menu  from './component/Menu';
import routes  from './routes';

export default function App() {
  return (
    <Router>
      <div className='App'>
        
        <Menu/>
    
        <Switch>
            { showContentMenus(routes) }
        </Switch>
      </div>
    </Router>
  );
};

const showContentMenus = (routes) => {
  var result = null ;
  if(routes.length >0){
    result = routes.map( (route , index) => {
      return (
        <Route 
          key = {index}
          path={route.path} 
          exact ={route.exact}
          component={route.main}
        />
      );
    })
  }
  return result ;
};

