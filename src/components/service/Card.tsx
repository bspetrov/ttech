import React from "react";
import { ServiceItem } from "./Service1";

interface Props {
  service: ServiceItem;
}

const Card: React.FC<Props> = ({ service }) => {
  return (
    <React.Fragment>
      <div className="single-service-area mb-50">
        <div className="service-img">
          <img src={service.img} alt={service.id} />
          {/* <div className="service-icon">
            <span>
              <i className={service.icon}></i>
            </span>
          </div> */}
        </div>
        <div className="service-content white-bg">
          <h5>{service.heading}</h5>
          <p>{service.title}</p>
          <hr />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
