const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

const withImages = require("next-images");

module.exports = withCSS(
  withSass(
    withImages({
      webpack(config, options) {
        config.module.rules.push({
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 100000
            }
          }
        });

        return config;
      }
    })
  )
);
