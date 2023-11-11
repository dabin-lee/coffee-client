import { Outlet, useNavigate } from "react-router-dom";
import loginImg from "../assets/react.svg";
import Header from "../layout/header";

const LoginTemplate = () => {
  return (
    <div>
      <Header title="로그인"></Header>
      <h2 className="tit">로그인</h2>
      {/* <img src={loginImg} alt="" /> */}
      <Outlet></Outlet>
    </div>
  );
};

export default LoginTemplate;
