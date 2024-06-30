import React, { useRef, useState } from "react";
import "../Hero/Hero.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import st from "./img/st.png";
import "swiper/css";
import "swiper/css/pagination";

export default function App() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="hero_cart">
            <div className="hero_text">
              <h1>
                Скидка 15% <br /> на все <br /> подвесные <br /> светильники
              </h1>
              <button>До 5 Февраля</button>
            </div>
            <div className="hero_img">
              <img src={st} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero_cart">
            <div className="hero_text">
              <h1>
                Скидка 15% <br /> на все <br /> подвесные <br /> светильники
              </h1>
              <button>До 5 Февраля</button>
            </div>
            <div className="hero_img">
              <img src={st} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero_cart">
            <div className="hero_text">
              <h1>
                Скидка 15% <br /> на все <br /> подвесные <br /> светильники
              </h1>
              <button>До 5 Февраля</button>
            </div>
            <div className="hero_img">
              <img src={st} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero_cart">
            <div className="hero_text">
              <h1>
                Скидка 15% <br /> на все <br /> подвесные <br /> светильники
              </h1>
              <button>До 5 Февраля</button>
            </div>
            <div className="hero_img">
              <img src={st} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
