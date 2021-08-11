const styles = theme => ({
  background :{
    backgroundColor : theme.palette.primary.main,
    padding : 40,
    display: 'flex',
    flexDirection :'colum' ,
    alignItems : 'center',
    justifyContent : 'center',
    minHeight : '100vh',
    textAlign : 'center',
    flex:'1 0 auto',
  },
  lableLogin :{
    fontSize : '200%'
  },
  buttonSingup : {
    margin : 10
  },
  login:{
    textDecoration: 'none'
  }
});
export default styles ;
