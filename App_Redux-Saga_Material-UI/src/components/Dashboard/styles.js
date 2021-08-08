const styles = theme =>({
  wrapper: {
    display : 'flex',
    flexDirection : 'row',
    height:'100vh',
  },
  wrapperContent : {
    width : '100%',
    padding : 10,
    hight : '100vh',
    transition: theme.transitions.create("margin", {  // hiệu ứng  theme transition create Material UI
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
  })
  },
  shiftleft :{
    marginLeft : -240,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.leavingScreen
  })
  },

})
export default styles ;
