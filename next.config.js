/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APP_NAME: "Next Dashboard",
    API_URL: "https://overse.dominoict.com/api/v1/",
    // API_URL: "https://dd5b-188-161-191-52.eu.ngrok.io/api/v1/",
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
