import React from "react";
import useGetData from "../hooks/useGetData";

interface Plan {
  id: string;
  plan: string;
  value: number;
  per: string;
  recommedation: string;
  sites: string[];
}

interface RequestObject {
  plans: Plan[];
}

const PricePlan: React.FC = () => {
  const request: RequestObject = useGetData({}, "/data/plans.json");
  const plans = request.plans;
  return (
    <React.Fragment>
      <div className="pricing-section section-padding">
        <div className="container">
          <div className="row gx-0">
            {plans?.length > 0 &&
              plans.map((plan, i) => (
                <div
                  key={plan.id}
                  className={`col-lg-4  ${i === 2 ? "col-md-12" : "col-md-6"}`}
                >
                  <div
                    className={`single-price-item wow  ${
                      i % 2 === 1 ? "active fadeInUp" : "fadeInLeft"
                    }`}
                    data-wow-delay={`${(i + 3) * 100}ms`}
                  >
                    <h5>{plan.plan}</h5>
                    <div className="price-box">
                      <p>
                        $<b>{plan.value}</b>/{plan.per}
                      </p>
                      <h6>{plan.recommedation}</h6>
                    </div>
                    <div className="price-list">
                      <ul>
                        {plan?.sites?.length > 0 &&
                          plan?.sites?.map((site) => (
                            <li>
                              <i className="las la-check"></i>
                              {site}
                            </li>
                          ))}
                      </ul>
                    </div>
                    <div className="main-btn small-btn">Choose Plan</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PricePlan;
