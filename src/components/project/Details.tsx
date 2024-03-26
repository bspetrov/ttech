import React from "react";
import useGetData from "../../hooks/useGetData";

interface details {
  id: string;
  img1: string;
  img2: string;
  img3: string;
  serviceType: string;
  category: string;
  time: string;
  materials: string[];
}

interface RequestObject {
  details: details;
}

const Details: React.FC = () => {
  const request: RequestObject = useGetData({}, "/data/project-details.json");
  const details = request.details;
  return (
    <React.Fragment>
      <div className="project-single-section section-padding pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Поръчкови плотове за маси</h3>
              <p>
                Нашите екип изработва всяка поръчка с грижа и внимание към детайла, използвайки най-качествените видове дърво. 
                В нашия асортимент ще откриете разнообразие от стилове, размери и обработки, които да отговарят на вашите индивидуални предпочитания. 
                </p>
              <div className="row">
                <div className="col-lg-8">
                  <div className="project-feature-img mt-40">
                    <img src={details?.img1} alt="" />
                  </div>
                  <div className="project-overview">
                    <h4>Project Overview</h4>
                    <p>
                      Cases of fraud were found in Indonesia in 2017 involving
                      PT Jatisari Sri Rejeki. The company is cheating by
                      producing rice that is not suitable with standard quality
                      stated in the packaging label. The correlation of the case
                      against fraudulent financial statements is that there is a
                      difference in the inventory account contained in the
                      financial statements due to changes in the quality of
                      products made by the company.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="project-info">
                    <h5>Техническа информация</h5>
                    <p>
                      <b>Тип услуга:</b>
                      <span>{details?.serviceType}</span>
                    </p>
                    <p>
                      <b>Категория:</b>
                      <span>{details?.category}</span>
                    </p>
                    <p>
                      <b>Време за изработка:</b>
                      <span>{details?.time}</span>
                    </p>
                    <p>
                      <b>Материали:</b>
                      <span>
                        {details?.materials?.length > 0 &&
                          details?.materials.map((material, i) =>
                            i === details?.materials?.length - 1 ? material : material + ", "
                          )}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-8"></div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="port-img mt-10 mb-50">
                <img src={details?.img2} alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="port-img mt-10 mb-50">
                <img src={details?.img3} alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="port-img mt-10 mb-50">
                <img src={details?.img3} alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="port-img mt-10 mb-50">
                <img src={details?.img3} alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="port-img mt-10 mb-50">
                <img src={details?.img3} alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="port-img mt-10 mb-50">
                <img src={details?.img3} alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="port-img mt-10 mb-50">
                <img src={details?.img3} alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="port-img mt-10 mb-50">
                <img src={details?.img3} alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="port-img mt-10 mb-50">
                <img src={details?.img3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Details;
