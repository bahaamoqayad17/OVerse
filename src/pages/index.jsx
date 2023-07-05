import SiteLayout from "@/components/SiteLayout";
import { addMessage } from "@/store/HeaderSlice";
import Router from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
  const [item, setItem] = useState({});
  const { allData } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  return (
    <>
      <img src="./images/header-bg.png" className="header-bg-img" />
      <div className="header-body">
        <div className="desc-header" data-aos="fade-right">
          <h1>
            <span> O Verse </span>
          </h1>
          <h2>{allData?.home?.title}</h2>
          <p>{allData?.home?.description}</p>
        </div>
        <div className="image-header" data-aos="zoom-in-down">
          <img src="./images/head-preview.png" alt="header-image" />
        </div>
      </div>

      <div className="about-section">
        <img src="./images/about-3.png" className="about-art" />
        <img src="./images/about-3.png" className="about-art-two" />
        <div className="title">
          <h1>About</h1>
        </div>
        <div className="about-box" data-aos="zoom-in-down">
          {allData?.abouts?.map((item, i) => (
            <div className="about-section-desc" key={i}>
              <div className="about-img-box">
                <img src={item?.icon} />
              </div>
              <h2>{item.title}</h2>
              <p>{item?.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="features-section">
        <img src="./images/about-3.png" className="feature-art" />
        <div className="title">
          <h1>Features</h1>
        </div>
        <div className="features-list">
          {allData?.features?.map((item, i) => (
            <div className="feature-item" key={i}>
              <div className="image-feature">
                <img src={item?.icon} />
              </div>
              <div className="image-feature2">
                <img src="./images/features-sub.png" />
              </div>
              <h2>{item?.title}</h2>
              <p>{item?.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="teams-container">
        <div className="title">
          <h1>Teams</h1>
        </div>
        <div className="teams-list" data-aos="zoom-in-down">
          {allData?.teams?.map((item, i) => (
            <div className="team-item" key={i}>
              <img src="./images/teams.png" />
              <img src={item?.avatar} className="team-person" />
              <div className="desc-team">
                <h3
                  onClick={() => Router.push(`/${item.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  {item?.name}
                </h3>
                <p>{item?.description}</p>
                <div className="social-links">
                  <a href={item?.call}>
                    {" "}
                    <img src="./images/call.svg" />{" "}
                  </a>
                  <a href={item?.LinkedIn}>
                    {" "}
                    <img src="./images/LinkedIn.png" />{" "}
                  </a>
                  <a href={item?.facebook}>
                    {" "}
                    <img src="./images/Facebook.png" />{" "}
                  </a>
                  <a href={item?.instagram}>
                    {" "}
                    <img src="./images/Instagram.png" />{" "}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="fqa-section">
        <div className="title">
          <h1>FAQ</h1>
        </div>
        <div className="fqa-container">
          <div className="fqa-text">
            {allData?.faqs?.map((item, i) => (
              <div className="text-box" data-aos="fade-right" key={i}>
                <h1>{item?.question}</h1>
                <div className="text-body">
                  <img src="./images/arrow-to-right.svg" />
                  <p>{item?.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="fqa-image">
            <img src="./images/head-preview.png" />
          </div>
        </div>
      </div>
    </>
  );
};

Page.getLayout = (page) => <SiteLayout>{page}</SiteLayout>;

export default Page;
