
const styles = theme  =>({
  drawerPaper : {
    width: 240,
    zIndex : 10,
    maxWidth : 240,
    height : '100%',
    position : 'relative'
  },
  menuLink :{
    textDecoration : 'none',
    color : theme.color.defaultTextColor
  },
  menuLinkActive :{
    '&>div' : {
      backgroundColor: theme.color.hover
    }
  }
})
export default styles ;
