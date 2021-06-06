import './App.css';
import { Switch , Route, BrowserRouter as Router} from 'react-router-dom'
import Menu from './Components/Menu/Menu';
import routes from './routes';

function App(props) {
    var showContentMenu = (routes) =>{
        var result = null ;
        if(routes.length >0){
            result = routes.map((route , index)=>{
                return (
                    <Route
                        key={index}
                        exact ={route.exact}
                        path = {route.path}
                        component ={route.main}
                    />
                );
            })
        }
        return <Switch>{result}</Switch>
    };
    return (
        <Router>
            <div>
                <Menu/>
                <div className="container">
                    
                    <div className="row">
                        { showContentMenu(routes)}
                    </div>
                </div>
            
            </div>
        </Router>
    );
}

export default App;
