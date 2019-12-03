/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-03 09:40:13
 * @LastEditTime: 2019-12-03 17:31:47
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
const webpack = require("webpack");
const path = require("path");
const appData = require("./data.json");
const seller = appData.seller;
const goods = appData.goods;
const ratings = appData.ratings;

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        "resolve url": true,
        import: ["./src/theme"]
      }
    }
  },
  pluginOptions: {
    "cube-ui": {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    },

    before(app) {
      app.get("/api/seller", function(req, res) {
        res.json({
          errno: 0,
          data: seller
        });
      });
      app.get("/api/goods", function(req, res) {
        res.json({
          errno: 0,
          data: goods
        });
      });
      app.get("/api/ratings", function(req, res) {
        res.json({
          errno: 0,
          data: ratings
        });
      });
    }
  },
  chainWebpack(config) {
    config.resolve.alias
      .set("components", resolve("src/components"))
      .set("common", resolve("src/common"))
      .set("api", resolve("src/api"));

    config
      .plugin("context")
      .use(webpack.ContextReplacementPlugin, [/moment[/\\]locale$/, /zh-cn/]);
  },
  baseUrl: ""
};
