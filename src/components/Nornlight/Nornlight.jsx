import React from "react";
import "./Norn.scss";
import gr from "./Img/gr1.png";
import gr2 from "./Img/gr2.png";
import gr3 from "./Img/gr3.png";
import gr4 from "./Img/gr4.png";
const Nornlight = () => {
  return (
    <div className="container">
      <div className="norn">
        <div className="norn_text">
          <h1>Почему NORNLIGHT?</h1>
          <button>О компании</button>
        </div>
        <div className="norn_carts">
          <div className="norn_cart">
            <div className="gr">
              <img src={gr} alt="" />
            </div>
            <div className="norn_text_flex">
              <h3>
                Только проверенные <br /> бренды
              </h3>
              <p>
                Бренды, проверенные <br /> временем и качеством
              </p>
            </div>
          </div>
          <div className="norn_cart">
            <div className="gr">
              <img src={gr2} alt="" />
            </div>
            <div className="norn_text_flex">
              <h3>
                Только проверенные <br /> бренды
              </h3>
              <p>
                Бренды, проверенные <br /> временем и качеством
              </p>
            </div>
          </div>
          <div className="norn_cart">
            <div className="gr">
              <img src={gr3} alt="" />
            </div>
            <div className="norn_text_flex">
              <h3>
                Только проверенные <br /> бренды
              </h3>
              <p>
                Бренды, проверенные <br /> временем и качеством
              </p>
            </div>
          </div>
          <div className="norn_cart">
            <div className="gr">
              <img src={gr4} alt="" />
            </div>
            <div className="norn_text_flex">
              <h3>
                Только проверенные <br /> бренды
              </h3>
              <p>
                Бренды, проверенные <br /> временем и качеством
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className="btn_0">О компании</button>
    </div>
  );
};

export default Nornlight;
