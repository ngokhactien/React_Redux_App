import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ProductActionPage from "./pages/ProductActionPage/ProductActionPage";

const routes = [
    {
        path : '/',
        exact : true ,
        main : () => <HomePage/>
    },
    {
        path : '/product-list',
        exact : false ,
        main : () => <ProductListPage/>
    },
    {
        path : '/product/:id/edit',
        exact : false ,
        main : ({match}) => <ProductActionPage match={match}/>
    },
    {
        path : '/product/add',
        exact : false ,
        main : () => <ProductActionPage/>
    },
    {
        path : '',
        exact : false ,
        main : () => <NotFoundPage/>
    }
];

export default routes;