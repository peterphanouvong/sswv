const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles"), "./src"],
    prependData: `
      @import "./tokens.scss";
      @import "./typography.scss";
    `,
  },
};

module.exports = nextConfig;
