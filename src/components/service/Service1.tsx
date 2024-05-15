import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import useGetData from "../../hooks/useGetData";

export interface ServiceItem {
  id: string;
  heading: string;
  title: string;
  icon: string;
  img: string;
}
interface RequestObject {
  services: ServiceItem[];
}

const Service1: React.FC = () => {
  const request: RequestObject = useGetData({}, "/ttech/data/services.json");
  const services = request.services;

  return (
    <React.Fragment>
      <div className="service-section gray-bg section-padding">
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="col-xl-4">
              <div className="section-title">
                <h6>Какво предлагаме</h6>
                <h2>Услуги и изработки</h2>
              </div>
            </div>
            <div className="col-xl-6">
              <p>
              Предлагаме изработка на детайли по чертеж, прикачен файл или лично договаряне от следните материали
              </p>
            </div>
            <div className="slide__navigation">
              <button className="slide__button-prev">
                <i className="las la-arrow-left"></i>
              </button>
              <button className="slide__button-next">
                <i className="las la-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              {services?.length > 0 && (
                <Swiper
                  speed={1500}
                  navigation={{
                    nextEl: ".slide__button-next",
                    prevEl: ".slide__button-prev",
                  }}
                  loop={true}
                  modules={[Pagination, Navigation]}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    "0": {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                    "768": {
                      slidesPerView: 2,
                      spaceBetween: 50,
                    },
                    "1200": {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                  }}
                  className="service-slider"
                >
                  {services?.map((service) => (
                    <SwiperSlide
                      key={service.id}
                      className="single-service-item"
                    >
                      <div className="service-icon">
                        <span>
                          <i className={service.icon}></i>
                        </span>
                      </div>
                      <div className="service-title">
                        <h4>{service?.heading}</h4>
                      </div>
                      <p>{service?.title?.substring(0, 50) + "..."}</p>
                      <Link to="/services" className="service-link">
                        <i className="las la-long-arrow-alt-right"></i>
                      </Link>
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

export default Service1;
