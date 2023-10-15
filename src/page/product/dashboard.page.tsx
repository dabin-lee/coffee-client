import { useEffect } from "react";
// component
import BottomButton from "../../component/bottom-button";

const DashboardPage = () => {
  useEffect(() => {
    console.log("LoginPage render ...");
    if (!sessionStorage.getItem("accessToken")) btnRoute.route = "login";
  }, []);

  let btnRoute = {
    tit: "Get Started",
    route: "categories", //로그인 아닐 경우 login
  };

  return (
    <div>
      <h2>FOOD & BEVERAGE</h2>
      <img src="/images/photo-1490474504059-bf2db5ab2348.avif" alt="" />
      <p>Enjoy the best restuarants or get what you need from neadby stores, delivered</p>

      <BottomButton {...btnRoute}></BottomButton>
    </div>
  );
};

export default DashboardPage;
