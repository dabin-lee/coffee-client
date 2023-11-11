import React from "react";

function Header(props: any) {
  return (
    <div>
      <button type="button" className="back">
        <i></i>
      </button>

      <>{props !== "" ? <p className="tit">{props.title}</p> : null}</>
    </div>
  );
}

export default Header;
