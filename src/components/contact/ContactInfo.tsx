import React from "react";
import useGetData from "../../hooks/useGetData";

interface Contact {
  street: string;
  mail1: string;
  mail2: string;
  mobile1: string;
  mobile2: string;
}

interface RequestObject {
  contact: Contact;
}

const ContactInfo: React.FC = () => {
  const request: RequestObject = useGetData({}, "/data/contact.json");
  const contact = request.contact;

  return (
    <React.Fragment>
      <div className="contact-info-wrap section-padding pt-0 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="single-contact-info">
                <div className="contact-icon">
                  <img src="/ttech/assets/img/contact/1.png" alt="" />
                </div>
                <p>{contact?.street}</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="single-contact-info">
                <div className="contact-icon">
                  <img src="/ttech/assets/img/contact/2.png" alt="" />
                </div>
                <p>{contact?.mail1}</p>
                <p>{contact?.mail2}</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="single-contact-info">
                <div className="contact-icon">
                  <img src="/ttech/assets/img/contact/1.png" alt="" />
                </div>
                <p>{contact?.mobile1}</p>
                <p>{contact?.mobile2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactInfo;
