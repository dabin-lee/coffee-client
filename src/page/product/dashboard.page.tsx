import { useEffect, useState } from "react";
// component
import BottomButton from "../../component/bottom-button";

const DashboardPage = () => {
  useEffect(() => {
    console.log("LoginPage render ...");
    if (!localStorage.getItem("accessToken")) {
      setBtnRoute({
        tit: "Login",
        route: "login",
      });
    }
  }, []);

  const [btnRoute, setBtnRoute] = useState({
    tit: "Get Started",
    route: "categories", //로그인 아닐 경우 login
  });

  return (
    <div>
      <div className="content-wrap main">
        <h2 className="main-tit">FOOD & BEVERAGE</h2>
        <div className="main-cont">
          <img src="/images/photo-1490474504059-bf2db5ab2348.avif" alt="" />
          <p>Enjoy the best restuarants or get what you need from neadby stores, delivered</p>
        </div>
      </div>

      <BottomButton {...btnRoute}></BottomButton>
    </div>
  );
};

export default DashboardPage;
