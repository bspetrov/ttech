import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import useGetData from "../../hooks/useGetData";
interface Testimonial {
  id: string;
  img: string;
  comment: string;
  name: string;
  rank: string;
}

interface RequestObject {
  testimonials: Testimonial[];
}

const Testimonial2: React.FC = () => {
  const request: RequestObject = useGetData({}, "/data/testimonials.json");
  const testimonials = request.testimonials;
  return (
    <React.Fragment>
      <div className="testimonial-area-2 section-padding">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              {testimonials?.length > 0 && (
                <Swiper
                  modules={[Autoplay]}
                  speed={1500}
                  spaceBetween={50}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  className="testimonial-carousel-two"
                >
                  {testimonials?.slice(4).map((item) => (
                    <SwiperSlide
                      key={item.id}
                      className="single-testimonial-wrap"
                    >
                      <div className="testimonial-content">
                        <div className="testimonial-icon-two">
                          <i className="las la-quote-left"></i>
                        </div>
                        <p>{item?.comment}</p>
                      </div>
                      <div className="testimonial-avatar">
                        <img src={item?.img} alt="" />
                      </div>
                      <h4>
                        {item?.name}
                        <span>{item?.rank}</span>
                      </h4>
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

export default Testimonial2;
