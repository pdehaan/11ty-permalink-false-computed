const del = require("del").sync;

module.exports = (eleventyConfig) => {
  del("./www");

  eleventyConfig.addLayoutAlias("base", "layouts/base.njk");
  eleventyConfig.addLayoutAlias("draft", "layouts/draft.njk");

  eleventyConfig.setDataDeepMerge(true);

  return {
    dir: {
      input: "src",
      output: "www",
    },
  };
};
