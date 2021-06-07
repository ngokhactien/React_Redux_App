import {Route , Link } from 'react-router-dom';



export default function Menu() {

    const menus = [
        {
            name : 'Trang Chủ',
            to : '/' ,
            exact : true
        },
        {
            name : 'Quản Lý Sản Phẩm',
            to : '/product-list' ,
            exact : false
        }
    ];

    const MenuLink = ({ label , to , activeOnlyWhenExact}) =>{
        return (
            <Route
                path ={to}
                exact={activeOnlyWhenExact}
                children = { ({match}) => {
                    var active = match ? 'active': '';
                    return (
                        <li className={active}>
                            <Link to={to}>
                                {label}
                            </Link>
                        </li>
                    );

                }}
            />
        );
    };

    const showMenu = (menus) =>{
        var result = null ;
        if(menus.length >0){
            result = menus.map((menu , index)=>{
                return (
                    <MenuLink
                        key={index}
                        label = {menu.name}
                        to ={menu.to}
                        activeOnlyWhenExact ={menu.exact}
                    />
                );
            })
        }
        return result;
    };

    return (
        <div className="navbar navbar-default">
            <Link to='/'  className="navbar-brand">TiếnNK API</Link>
            <ul className="nav navbar-nav">
                {showMenu(menus)}
            </ul>
        </div>
    );
}

