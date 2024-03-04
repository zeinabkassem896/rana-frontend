
import React from "react";
import "./FindUs.css";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Announcement from "../../Components/Announcement";
import Newsletter from "../../Components/NewsLetter";

const FindUs = () => {
  return (
    <>
    <Navbar/>
    <Announcement/>
    <div className="d-flex align-items-center justify-content-center" style={{marginBottom:'120px', marginTop:'-100px'}}>
      <div className="d-flex row w-75 mb-5">
        <h2 className="findus-page-title mb-5" style={{fontSize:'45px'}}>FIND US</h2>
        <div
          className="find-us-page-container border rounded-5 d-flex row gap-5 py-5"
          style={{
            boxShadow:
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 6px 10px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fcf5f5",
          }}
        >
          <div className="findus-left-div">
            <div className="findus-websites-title d-flex gap-3 align-items-baseline justify-content-center mb-5">
              <i className="bi bi-globe"></i>
              <h4 className="m-0">Shop Our peeksbymn Online</h4>
            </div>
            <div className="findus-website-links">
              <p className="findus-link-text">
                peeksbymn Online:{" "}
                <a
                  href="https://www.instagram.com/peeksbymn/?hl=en"
                  target="_blank"
                  title="click me"
                  style={{ color: "rgb(200, 57, 138)" }}
                >
                  https://peeksbymn.com
                </a>
              </p>

              <p className="findus-link-text">
                peekshijab:{" "}
                <a
                  href="https://www.instagram.com/peekshijab/?hl=en"
                  target="_blank"
                  title="click me"
                  style={{ color: "rgb(57, 131, 200) " }}
                >
                  https://peekshijab.com
                </a>
              </p>
              {/* <p className="findus-link-text">
                Made by Nature Online:{" "}
                <a
                  href="https://madebynaturelb.com/?s=aunty+scrunchies&post_type=product"
                  target="_blank"
                  title="click me"
                  style={{ color: "rgb(28, 128, 66) " }}
                >
                  https://madebynaturelb.com
                </a>
              </p> */}
            </div>
          </div>
          <div className="findus-right-div">
            <div className="findus-locations-title d-flex gap-3 align-items-baseline justify-content-center mb-5">
              <i className="bi bi-shop-window"></i>
              <h4 className="m-0">Our Team</h4>
            </div>
            <div className="findus-locations-links">
              <p className="findus-link-text">
                MODA BELLA - Tyre - in front of alfa store:{" "}
                <a
                  href="https://maps.app.goo.gl/QSUz42jJG9Wi5RkVA"
                  target="_blank"
                  title="click me"
                  style={{ color: "rgb(135, 31, 187)" }}
                >
                  https://maps.app.goo.gl
                </a>
              </p>

              <p className="findus-link-text">
                STAR NGAGE:{" "}
                <a
                  href="https://starngage.com/plus/en-us/brands/instagram/peeksbymn"
                  target="_blank"
                  title="click me"
                  style={{ color: "rgb(31, 91, 187)" }}
                >
                  https://starngage.com
                </a>
              </p>
              <p className="findus-link-text">
                MODA BELLA ARGENTINA{" "}
                <a
                  href="https://tiendamodabella.com/"
                  target="_blank"
                  title="click me"
                  style={{ color: "rgb(158, 187, 31) " }}
                >
                  tiendamodabella.com
                </a>
              </p>
              {/* <p className="findus-link-text">
                Rooted Cafe - Kfarhbab Ghazir{" "}
                <a
                  href="https://maps.app.goo.gl/yRxreNQNqNwzck2XA"
                  target="_blank"
                  title="click me"
                  style={{ color: "rgb(187, 31, 31) " }}
                >
                  https://maps.app.goo.gl
                </a>
              </p>
              <p className="findus-link-text">
                The Super Design Store at The Smallville Hotel - Badaro, Lebanon{" "}
                <a
                  href="https://maps.app.goo.gl/uwRPoSMyQch3aw5K8"
                  target="_blank"
                  title="click me"
                  style={{ color: "rgb(31, 151, 187) " }}
                >
                  https://maps.app.goo.gl
                </a>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Newsletter/>
    <Footer/>
    </>
  );
};

export default FindUs;
