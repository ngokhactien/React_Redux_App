import Contact  from './component/Contact';
import NotFound  from './component/NotFound';
import Home  from './component/Home';
import About  from './component/About';
import Products  from './component/Products';
const routes = [
    {
        path : '/',
        exact : true ,
        main : () => <Home /> 
    },
    {
        path : '/about',
        exact : false ,
        main : () => <About /> 
    },
    {
        path : '/contact',
        exact : false ,
        main : () => <Contact /> 
    },
    {
        path : '/product',
        exact : false ,
        main : ({match}) => <Products match={match}/> 
    },
    {
        path : '',
        exact : false ,
        main : () => <NotFound /> 
    }
];

export default routes ;