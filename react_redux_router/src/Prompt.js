import { Prompt } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      Đây là trang liên hệ
      <br/>
      <button type="button" class="btn btn-danger">cho Phép</button> <br/>
      <button type="button" class="btn btn-info">Không cho phép</button> 
      <Prompt
        when={true}
        message={ location => (`bạn có muốn đến ${location.pathname} `)}
      />
    </div>
  );
}
