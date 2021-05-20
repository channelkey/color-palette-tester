module.exports = {
   siteMetadata: {
      title: "Color Palette Tester",
   },
   plugins: [
      "gatsby-plugin-gatsby-cloud",
      {
         resolve: `gatsby-plugin-sass`,
         options: {
            implementation: require("sass"),
            postCssPlugins: [],
            sassOptions: {
               precision: 10,
            },
         },
      },
   ],
};
