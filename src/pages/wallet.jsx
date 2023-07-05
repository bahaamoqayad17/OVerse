import SiteLayout from "@/components/SiteLayout";
import { useSelector } from "react-redux";

const Page = () => {
  const { secondPage } = useSelector((state) => state.home);

  return (
    <>
      <div class="about-page-sections">
        <div class="breakpages">
          {" "}
          <span> home + Products + Wallets </span>{" "}
        </div>
        <div class="about-header-body">
          <div class="about-desc-header" data-aos="fade-right">
            <h1>
              {" "}
              <span> Wallets </span>{" "}
            </h1>
            <h2> {secondPage.title} </h2>
            <p>{secondPage.descriptions[0] && secondPage.descriptions[0]}</p>
          </div>
          <div class="about-image-header">
            <img src="./images/about-3.png" alt="header-image" />
            <img src="./images/dot-vector.svg" class="dot-vector" />
          </div>
        </div>
        <div class="about-preview">
          <div class="about-text">
            <p>
              <p>{secondPage.descriptions[1] && secondPage.descriptions[1]}</p>
            </p>
            <p>
              <p>{secondPage.descriptions[2] && secondPage.descriptions[2]}</p>
            </p>
          </div>
          <div class="about-image">
            <img src="./images/about-page-preview.png" class="about-image" />
            <img src={secondPage.image} class="about-bg" />
          </div>
        </div>
      </div>
    </>
  );
};

Page.getLayout = (page) => <SiteLayout>{page}</SiteLayout>;

export default Page;
