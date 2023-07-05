import Layout from "@/components/dashboard/Layout";

import React from "react";

const Page = () => {
  return <div>test</div>;
};

Page.getLayout = (page) => <Layout>{page}</Layout>;

export default Page;
