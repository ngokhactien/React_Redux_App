const validate = values => {  // nó dựa vào name của field
  const errors = {}
  const { email , password } = values ;

  if(! email){
    errors.email = 'Vui lòng nhập Gmail !';  // errors.name  .name của thuộc tính name của một field
  }else if(email.trim() && email.length < 5){
    errors.email = 'Tiêu đề phải 5 ký tự !';
  }

  if(! password) {
    errors.password = 'Vui lòng nhập password !' ; //
  }else
    if(password.trim() && password.length < 5){
      errors.password = 'Tiêu đề phải 5 ký tự !';
  }
  return errors ;
}

export default validate ;
