import SiteLayout from "@/components/SiteLayout";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const { id } = useRouter().query;
  const { allData } = useSelector((state) => state.home);
  const [item, setItem] = useState(
    allData?.teams?.find((item) => item.id == id)
  );
  return (
    <>
      <div class="details-section">
        <div class="breakpages">
          {" "}
          <span> home + Products + Wallets </span>{" "}
        </div>
        <div class="details-header-preview">
          <div class="header-preview-image">
            <img src="./images/about-3.png" />
            <img src="./images/dot-vector.svg" class="dot-vector" />
          </div>
          <div class="details-team-item">
            <img src="./images/teams.png" class="team-person-bg" />
            <img src={item?.avatar} class="team-person" />
            <div class="desc-team" data-aos="fade-right">
              <h3> {item?.name} </h3>
              <p>{item?.description}</p>
              <div class="social-links">
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
        </div>
      </div>
    </>
  );
};

Page.getLayout = (page) => <SiteLayout>{page}</SiteLayout>;
export default Page;
