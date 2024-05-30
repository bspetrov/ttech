import React, { useState } from "react";
<<<<<<< HEAD
import ReactPlayer from "react-player";
=======
>>>>>>> 96df595695215013acb104e831c0dec29d692add
import Modal from "./modal/Modal";

const ChooseUs: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [getSrc, _] = useState("https://www.youtube.com/embed/SZEflIVnhH8");
  return (
    <React.Fragment>
      <div className="choose-us-area">
        <div className="container-fluid">
          <div className="row gx-0">
            <div className="col-xl-4 col-lg-4">
              <div className="choose-us-content">
                <div className="section-title">
                  <h6>Защо нас?</h6>
                  <h3>
                    Професионално <b>качество</b> с точност!
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8">
              <div className="choose-us-wrap">
                <div className="video" onClick={() => setPlaying((p) => !p)}>
                  <ReactPlayer url="/assets/video/promo.mp4" width={1101} height={528} playing={playing}/>
                </div>
                {!playing && 
                <div className="pop-up-video">
                  <div
                    className="video-play-btn"
                    onClick={() => setPlaying((p) => !p)}
                  >
                    <i className="las la-play"></i>
                  </div>
                </div>
                }
              </div>
            </div>
          </div>
          {showModal ? (
            <Modal setShowModal={setShowModal} src={getSrc} />
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChooseUs;
