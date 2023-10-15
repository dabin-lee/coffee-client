import { useNavigate } from "react-router-dom";

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
    </div>
  );
};

export default BottomButton;
