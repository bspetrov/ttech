import React from "react";
import Card from "./Card";
import { ServiceItem } from "./Service1";
import useGetData from "../../hooks/useGetData";

interface RequestObject {
  services: ServiceItem[];
}
const Service3: React.FC = () => {
  const request: RequestObject = useGetData({}, "/ttech/data/services.json");
  const services = request.services;

  return (
    <div className="services-area service-two gray-bg section-padding pb-50">
      <div className="container">
        <div className="row">
          {services?.length > 0 &&
            services?.map((service) => (
              <div
                key={service.id}
                className="col-xl-4 col-lg-4 col-md-6 col-12"
              >
                <Card service={service} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Service3;
