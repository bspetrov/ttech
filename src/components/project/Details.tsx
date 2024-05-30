import React from "react";
import useGetData from "../../hooks/useGetData";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

interface details {
  id: string;
  images: string[];
  serviceType: string;
  category: string;
  time: string;
  materials: string[];
}

interface RequestObject {
  details: details;
}

const Details: React.FC = () => {
  const routePath = location.pathname.split("/");
  const currentPath = routePath[2];
  let request: undefined | RequestObject;
  let title: string = "";
  let topic: string = "";

  if (currentPath === "table-tops") {
    request = useGetData({}, "/data/project-details-table-tops.json");
    title = "Плотове за маси";
    topic = 'wood'
  } else if (currentPath === "table-legs") {
    request = useGetData({}, "/data/project-details-table-legs.json");
    title = "Крака за маси";
    topic = 'wood'
  } else if (currentPath === "finished-tables") {
    request = useGetData({}, "/data/project-details-finished-tables.json");
    title = "Готови маси";
    topic = 'wood'
  } else if (currentPath === "machine-elements") {
    request = useGetData({}, "/data/project-details-machine-elements.json");
    title = "Машинни елементи";
  } else if (currentPath === "auto-elements") {
    request = useGetData({}, "/data/project-details-auto-elements.json");
    title = "Авто елементи";
  } else if (currentPath === "specials") {
    request = useGetData({}, "/data/project-details-specials.json");
    title = "Специални";
  } else if (currentPath === "metalwork-others") {
    request = useGetData({}, "/data/project-details-metalwork-others.json");
    title = "Други";
  } else if (currentPath === "chairs") {
    request = useGetData({}, "/data/project-details-chairs.json");
    title = "Столове";
    topic = 'wood'
  } else if (currentPath === "woodwork-others") {
    request = useGetData({}, "/data/project-details-woodwork-others.json");
    topic = 'wood'
    title = "Други";
  }
  const details = (request as RequestObject).details;

  return (
    <React.Fragment>
      <div className="project-single-section section-padding pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>{title}</h3>
              <p>
                Нашите екип изработва всяка поръчка с грижа и внимание към
                детайла, използвайки най-качествените видове дърво. В нашия
                асортимент ще откриете разнообразие от стилове, размери и
                обработки, които да отговарят на вашите индивидуални
                предпочитания.
              </p>
              <div className="row">
                <div className="col-lg-8">
                  <div className="project-feature-img mt-40">
                    <img src={details?.images[0]} alt="" />
                  </div>
                  <div className="project-overview">
                    <h4>Допълнителна информация</h4>
                    {topic === 'wood' ? (
                      <p>
                        Масива се закупува, след това се калибрира и нарязва по зададени параметри, които отговарят на необходимия проект.
                        При финалната обработка се нанася слой върху дървото.В зависимост от нуждата вашите нужди и изсиквания - лак или масло за дърво.
                      </p>
                    ) : (
                      <p>Създава се 3D модел на детайла с помощта на CAD софтуер. Моделът се импортира в CAM софтуер, където се генерират CNC инструкции (G-код).  G-кодът се зарежда в CNC машината, която след това автоматично изпълнява операциите по рязане, пробиване или фрезоване, за да създаде крайния продукт.
                    </p>
                    )}
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
                            i === details?.materials?.length - 1
                              ? material
                              : material + ", "
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
            {details?.images.map((img, idx) => (
              <div className="col-lg-4 col-md-4">
                <div className="port-img mt-10 mb-50">
                  <Zoom>
                    <img key={idx} src={img} alt="" />
                  </Zoom>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Details;
