import Head from "next/head";
import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { createEmotionCache } from "../utils/create-emotion-cache";
import { registerChartJs } from "../utils/register-chart-js";
import { theme } from "../theme";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import "../lang/i18";
import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "../store";
import { Provider, useDispatch, useSelector } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/index.css";
import "../styles/Loader.css";
import { fetchAllData } from "@/store/HeaderSlice";
import Loader from "@/components/Loader";

registerChartJs();

const clientSideEmotionCache = createEmotionCache();

const DataComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllData());
  }, []);
};

export default function App(props) {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState("en");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init();

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    if (lang === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
    }
    i18n.changeLanguage(lang);
  }, [lang]);

  let cacheRtl;

  if (lang === "ar") {
    cacheRtl = createCache({
      key: "muirtl",
      stylisPlugins: [prefixer, rtlPlugin],
    });
  } else {
    cacheRtl = createCache({
      key: "muirtl",
      stylisPlugins: [prefixer],
    });
  }

  if (lang === "ar") {
    import("../theme/DataTable-ar.css");
  }

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      {loading ? (
        <>
          <div className="loading-container">
            <Loader />
          </div>
        </>
      ) : (
        <>
          <Provider store={store}>
            <DataComponent />
            <CacheProvider value={cacheRtl}>
              <Head>
                <title>{`${process.env.APP_NAME}`}</title>
                <meta
                  name="viewport"
                  content="initial-scale=1, width=device-width"
                />
              </Head>
              <ThemeProvider theme={theme}>
                <ToastContainer />
                <CssBaseline />
                {getLayout(<Component {...pageProps} />)}
              </ThemeProvider>
            </CacheProvider>
          </Provider>
        </>
      )}
    </>
  );
}
