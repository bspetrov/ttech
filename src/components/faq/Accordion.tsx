import React, { useState } from "react";
import useGetData from "../../hooks/useGetData";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface RequestObject {
  faq: FAQ[];
}

const Accordion: React.FC = () => {
  const [firstTime, setFirstTime] = useState<boolean>(true);

  const request: RequestObject = useGetData({}, "/data/faq.json");
  const faq = request.faq;
  return (
    <div className="accordion faqs" id="accordionFaq">
      {faq?.length > 0 &&
        faq?.map((fq) => (
          <div key={fq.id} className="card">
            <div className="card-header" id={`heading${fq.id}`}>
              <h5 className="mb-0 subtitle">
                <button
                  className={`btn btn-link active ${
                    fq.id === "1" && firstTime ? "" : "collapsed"
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${fq.id}`}
                  aria-expanded="true"
                  aria-controls={`collapse${fq.id}`}
                >
                  {fq.question}
                </button>
              </h5>
            </div>

            <div
              onClick={() => setFirstTime(false)}
              id={`collapse${fq.id}`}
              className={`collapse ${fq.id === "1" && firstTime ? "show" : ""}`}
              aria-labelledby={`heading${fq.id}`}
              data-parent="#accordionFaq"
            >
              <div className="card-body">
                <div className="content">
                  <p>{fq.answer}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Accordion;
