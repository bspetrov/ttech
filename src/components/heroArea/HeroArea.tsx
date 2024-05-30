import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import useGetData from "../../hooks/useGetData";

interface Props {
  type: boolean;
}
interface BannerItem {
  id: string;
  img: string;
  heading: string;
  motive: {
    m1: string;
    m2: string;
  };
  title: {
    t1: string;
    t2: string;
  };
}
interface RequestObject {
  banner: BannerItem[];
}

const HeroArea: React.FC<Props> = ({ type }) => {
  const request: RequestObject = useGetData({}, "/data/banner.json");
  const banner = request.banner;
  return (
    <React.Fragment>
      {banner?.length > 0 && (
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          loop={true}
          speed={1500}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          id="home-1"
          className="homepage-slides"
        >
          {(type ? banner.slice(0, 2) : banner.slice(2)).map((item) => (
            <SwiperSlide key={item.id} className="single-slide-item">
              <div
                className="image-layer"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="overlay"></div>
              </div>
              <div className="hero-area-content">
                <div className="container">
                  <div className="row justify-content-center">
                    <div
                      className="col-lg-12 wow fadeInUp animated"
                      data-wow-delay=".2s"
                    >
                      <div className="section-title col-12 col-lg-6">
                        <h1>
                          Tenev Tech
                          <br/>
                          <b></b>
                        </h1>
                        <p>Нашият екип от опитни и всеотдайни професионалисти е винаги готов да достави и произведе качество - навреме!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </React.Fragment>
  );
};

export default HeroArea;
