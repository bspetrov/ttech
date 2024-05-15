import React from "react";
import Card from "./Card";
import { ServiceItem } from "./Service1";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import useGetData from "../../hooks/useGetData";

interface RequestObject {
  services: ServiceItem[];
}

const Service2: React.FC = () => {
  const request: RequestObject = useGetData({}, "/ttech/data/services.json");
  const services = request.services;

  return (
    <React.Fragment>
      <div className="services-area service-two gray-bg section-padding pb-50">
        <div className="container">
          <div className="row">
            <div className="offset-lg-2 col-lg-8 text-center">
              <div className="section-title">
                <h6>What We Offer</h6>
                <h2>
                  Global <b>Industry Services</b>
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              {services?.length > 0 && (
                <Swiper
                  modules={[Autoplay]}
                  speed={1500}
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: true,
                  }}
                  breakpoints={{
                    "0": {
                      slidesPerView: 1,
                      spaceBetween: 50,
                    },
                    "768": {
                      slidesPerView: 2,
                      spaceBetween: "50",
                    },
                    "1200": {
                      slidesPerView: 3,
                      spaceBetween: "50",
                    },
                  }}
                  className="service-slider-two owl-carousel"
                >
                  {services?.map((service) => (
                    <SwiperSlide key={service.id}>
                      <Card service={service} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Service2;
