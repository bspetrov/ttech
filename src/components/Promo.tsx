import React from "react";
import useGetData from "../hooks/useGetData";

interface PromoItem {
  id: string;
  heading: string;
  title: string;
  icon: string;
}
interface RequestObject {
  promo: PromoItem[];
}

const Promo: React.FC = () => {
  const request: RequestObject = useGetData({}, "/data/promo.json");
  const promo = request.promo;
  return (
    <React.Fragment>
      <div className="promo-area">
        <div className="container">
          <div className="row" v-if="promo.length > 0">
            {promo?.length > 0 &&
              promo?.map((item, i) => (
                <div key={item.id} className="col-lg-4 col-12">
                  <div
                    className={`single-promo-item mb-50 ${
                      i === 1 ? "spro" : ""
                    }`}
                  >
                    <h5>{item.heading}</h5>
                    <p>{item.title}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Promo;
