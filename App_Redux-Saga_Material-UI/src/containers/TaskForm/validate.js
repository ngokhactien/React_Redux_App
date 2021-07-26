const validate = values => {  // nó dựa vào name của field
  const errors = {}
  const { title , description } = values ;

  if(! title){
    errors.title = 'Vui lòng nhập tiêu đề !';  // errors.name  .name của thuộc tính name của một field
  }else if(title.trim() && title.length < 5){
    errors.title = 'Tiêu đề phải 5 ký tự !';
  }

  if(! description) {
    errors.description = 'Vui lòng nhập mô tả !' ; //
  }else if(description.trim() && description.length < 5){
    errors.description = 'Tiêu đề phải 5 ký tự !';
  }
  return errors ;
}

export default validate ;
