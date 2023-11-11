import { Outlet } from "react-router-dom";
import { GnbLayout } from "../layout/gnb.layout";

const DefaultTemplate = () => {
  return (
    <>
      {/* <GnbLayout></GnbLayout> */}
      <Outlet></Outlet>
    </>
  );
};

export default DefaultTemplate;
