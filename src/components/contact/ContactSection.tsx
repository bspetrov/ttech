import React from "react";

const ContactSection: React.FC = () => {
  return (
    <React.Fragment>
      <div className="contact-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-12">
              <div className="contact-page google-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2931.0179401741357!2d23.326205376593816!3d42.72451101199816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8f0049339a61%3A0x85c1c38859378d73!2sTenev%20Tech!5e0!3m2!1sen!2sbg!4v1710357134792!5m2!1sen!2sbg"
                  width="600"
                  height="600"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-12">
              <div className="contact-form dark-bg">
                <div className="section-title">
                  <h2 className="text-white">Свържете се с нас...</h2>
                </div>
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Име*</label>
                      <input type="text" placeholder="Вашите имена" />
                    </div>
                    <div className="col-md-6">
                      <label>Email Address*</label>
                      <input type="email" placeholder="E-mail Address" />
                    </div>
                    <div className="col-12">
                      <label>Тема*</label>
                      <input type="text" placeholder="Тема" />
                    </div>
                    <div className="col-12">
                      <label>Съобщение*</label>
                      <textarea
                        name="message"
                        id="message"
                        cols={30}
                        rows={10}
                        placeholder="Съобщение..."
                      ></textarea>
                    </div>
                    <div>
                      <button type="submit" className="bordered-btn">
                        Изпрати
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactSection;
