import SiteLayout from "@/components/SiteLayout";
import { useSelector } from "react-redux";

const Page = () => {
  const { secondPage } = useSelector((state) => state.home);

  return (
    <>
      <div className="about-page-sections">
        {/* Rest of the code */}
        <div className="about-desc-header" data-aos="fade-right">
          <h1>
            <span> Wallets </span>
          </h1>
          <h2>{secondPage?.title}</h2>
          {secondPage?.descriptions && <p>{secondPage.descriptions[0]}</p>}
        </div>
        {/* Rest of the code */}
        <div className="about-preview">
          <div className="about-text">
            {secondPage?.descriptions && <p>{secondPage.descriptions[1]}</p>}
            {secondPage?.descriptions && <p>{secondPage.descriptions[2]}</p>}
          </div>
          {/* Rest of the code */}
        </div>
      </div>
    </>
  );
};

Page.getLayout = (page) => <SiteLayout>{page}</SiteLayout>;

export default Page;
