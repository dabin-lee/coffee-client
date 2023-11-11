import { useNavigate } from "react-router-dom";
import FullScreenDialog from "./modal-bottom";

const BottomButton = (btnType: any) => {
  const navigate = useNavigate();
  const moveRoute = (): void => {
    navigate(`/${btnType.route}`);
  };

  return (
    <div className="bottom-btn">
      <button className="bottom" onClick={moveRoute}>
        {btnType.tit}
      </button>
      <FullScreenDialog />
    </div>
  );
};

export default BottomButton;
