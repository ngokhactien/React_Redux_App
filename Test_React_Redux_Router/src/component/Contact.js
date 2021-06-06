import { Prompt } from "react-router-dom";
import React, { useState } from 'react';
export default function Contact(props) {

  const [isChecked ,setisChecked] = useState(false);

  const onPromlt = (data) => {
    setisChecked(data);
  }

  return (
    <div>
      Đây là trang liên hệ
      <br/>
      <button type="button" className="btn btn-danger" onClick={ () => onPromlt(false) } >cho Phép</button> <br/>
      <button type="button" className="btn btn-info"   onClick={ () => onPromlt(true) } >Không cho phép</button> 
      <Prompt
        when={isChecked}
        message={ location => (`bạn có muốn đến ${location.pathname} `)}
      />
    </div>
  );
}


