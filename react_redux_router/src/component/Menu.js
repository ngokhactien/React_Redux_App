import { Route ,Link } from "react-router-dom";

const menus = [
  {
    name: 'Trang chủ' ,
    to:"/",
    exact:true
  },
  {
    name: 'Giới thiệu' ,
    to:"/about",
    exact:false
  },
  {
    name: 'Liên hệ' ,
    to:"/contact",
    exact:false
  },
  {
    name: 'Sản Phẩm' ,
    to:"/product",
    exact:false
  }
];

const MenuLink = ({label , to , activeOnlyWhenExect}) => {
  return (
    <Route path={to} exact={activeOnlyWhenExect} children={ ({match}) => {
      var active = match ? 'active abc' : '';
      return (
        <li className={`my-link ${active}`}>
          <Link to={ to } className='my-link' >{label}</Link>
        </li>
      );
    }}>

    </Route>
  );
};
const showMenus = (menus) => {
  var result = null ;
  if(menus.length > 0){
    result = menus.map((item , index)=> {
      return(
        <MenuLink 
          key={index} 
          label={item.name} 
          to={item.to} 
          activeOnlyWhenExect={item.exact}
        />
      );
    })
  }
  return result ;
}

export default function Menu() {
  return (
    <nav className="navbar navbar-default">
      <ul className="nav navbar-nav">
        { showMenus(menus) }
      </ul>
    </nav>
  );
}


