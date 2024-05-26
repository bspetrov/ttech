import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
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

const Testimonial1: React.FC = () => {
  const request: RequestObject = useGetData({}, "/data/testimonials.json");
  const testimonials = request.testimonials;

  return (
    <React.Fragment>
      <div className="testimonial-area gray-bg section-padding pb-50">
        <div className="capricorn-testimonial">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="section-title">
                  <h6>Партньори и клиенти</h6>
                  <h2>
                    Те ни се довериха, направете го и вие!
                  </h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                {testimonials?.length > 0 && (
                  <Swiper
                    speed={1500}
                    modules={[Pagination]}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      "0": {
                        slidesPerView: 1,
                        spaceBetween: 30,
                      },
                      "768": {
                        slidesPerView: 2,
                        spaceBetween: 30,
                      },
                      "1100": {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                    }}
                    className="testimonial-carousel"
                  >
                    {testimonials?.slice(0, 4).map((testimonial) => (
                      <SwiperSlide
                        key={testimonial.id}
                        className="single-testimonial-item"
                      >
                        <div className="testimonial-icon">
                          <i className="las la-quote-left"></i>
                        </div>
                        <p>"{testimonial.comment}"</p>
                        <div className="author-wrap">
                          <div className="author-thumb">
                            <img src={testimonial.img} alt={testimonial.name} />
                          </div>
                          <div className="author-desc">
                            <h5>{testimonial.name}</h5>
                            <span>{testimonial.rank}</span>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Testimonial1;
