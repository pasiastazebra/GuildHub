/** @type {import('next').NextConfig} */
const path = require("path");

export default {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
