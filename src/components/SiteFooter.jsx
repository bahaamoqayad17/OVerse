import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SiteFooter = () => {
  const { allData } = useSelector((state) => state.home);
  const [item, setItem] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMessage(item));
  };

  return (
    <div>
      <>
        <div className="contact-container">
          <div className="contact-details" data-aos="zoom-in-down">
            <h1>Contact Us</h1>
            <div>
              <p>
                Have questions or need assistance? Our friendly and
                knowledgeable support team is available 24/7 to help. Contact us
                via email, live chat, or our virtual help center in the O-Verse
                app.
              </p>
              <p>
                Join us in O-Verse, and lets explore the future together. The
                world is yours to discover!
              </p>
            </div>
          </div>
          <div className="contact-form" data-aos="zoom-in-down">
            <div className="mb-2">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
                name="name"
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput2"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput3"
                placeholder="Subject"
                name="subject"
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Message"
                name="message"
                onChange={handleChange}
              ></textarea>
              <button className="submit-form-button" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
        <footer className="footer-container">
          <div className="footer-logo">
            <img src="./images/footer-logo.png" />
          </div>
          <div className="footer-desc">
            <p>Get Information News About The O Verse Trend Here!</p>
          </div>
          <div className="footer-social-links">
            <a href={allData?.home?.call}>
              {" "}
              <img src="./images/call.svg" />{" "}
            </a>
            <a href={allData?.home?.LinkedIn}>
              {" "}
              <img src="./images/LinkedIn.png" />{" "}
            </a>
            <a href={allData?.home?.facebook}>
              {" "}
              <img src="./images/Facebook.png" />{" "}
            </a>
            <a href={allData?.home?.instagram}>
              {" "}
              <img src="./images/Instagram.png" />{" "}
            </a>
          </div>
          <div>
            <span> O-Verse @ 2023 All Rights Reserved </span>
          </div>
        </footer>
      </>
    </div>
  );
};

export default SiteFooter;
