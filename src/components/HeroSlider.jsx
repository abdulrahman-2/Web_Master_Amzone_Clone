import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const HeroSlider = () => {
  return (
    <div>
      <Swiper
        modules={[EffectFade, Autoplay, Navigation]}
        effect="fade"
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
      >
        {[
          "images/banner/bannerImgOne.jpg",
          "images/banner/bannerImgTwo.jpg",
          "images/banner/bannerImgThree.jpg",
          "images/banner/bannerImgFour.jpg",
          "images/banner/bannerImgFive.jpg",
          "images/banner/slide4.jpeg",
        ].map((src) => (
          <SwiperSlide key={src}>
            <div
              className="w-[100vw] h-[100vw] md:h-[calc(100vh-66px)] bg-cover bg-center  bg-no-repeat"
              style={{ backgroundImage: `url(${src})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
