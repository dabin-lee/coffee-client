import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const navigate = useNavigate();

  const navigateToSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="content-wrap">
      <p className="cont-tit">아이디</p>
      <div className="input-wrap">
        <input type="text" placeholder="이메일을 입력해주세요." value={email} onChange={e => setEmail(e.target.value)} />
      </div>

      <div className="error-message">올바른 이메일을 입력해주세요.</div>

      <p className="cont-tit">패스워드</p>
      <div className="input-wrap">
        <input type="password" placeholder="패스워드를 입력해주세요." value={pw} onChange={e => setPw(e.target.value)} />
      </div>

      <div className="error-message">영문 숫자 특수문자를 포함한 8자 이상을 입력해주세요.</div>
      <button className="primary" onClick={navigateToSignup}>
        회원가입
      </button>
      <div className="bottom-btn">
        <button className="bottom">로그인</button>
      </div>
    </div>
  );
};

export default LoginPage;
