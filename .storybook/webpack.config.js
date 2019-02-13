const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
    // Extend defaultConfig as you need.
    
    // Sass loader
    storybookBaseConfig.module.rules.push({
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../")
      });
         
    return defaultConfig;
  };