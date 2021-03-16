const isProd = process.env.NODE_ENV === "production";

module.exports = {
  layout: "base",
  eleventyComputed: {
    permalink(data) {
      if (!data.pkg) {
        console.log("That's weird...", { data });
        return false;
      }
      return isProd && data.layout === "draft" ? false : data.permalink;
    },
  },
};
