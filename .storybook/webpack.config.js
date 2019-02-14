const path = require("path");
const autoprefixer = require('autoprefixer');

module.exports = (baseConfig, env, defaultConfig) => {
    // Extend defaultConfig as you need.
    
    // Sass loader
    // storybookBaseConfig.module.rules.push({
    //     test: /\.scss$/,
    //     loaders: ["style-loader", "css-loader", "sass-loader"],
    //     include: path.resolve(__dirname, "../")
    //   });

    defaultConfig.module.rules.push(
        {
            test: /\.scss$/,
            use: [
                { 
                    loader: 'style-loader' 
                },
                {
                    loader: 'css-loader',
                    options: { 
                        importLoaders: 2 
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [
                            autoprefixer({
                                browsers: ['last 1 version', 'ie >= 11']
                            })
                        ]
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        includePaths: [ path.resolve(__dirname, '../node_modules') ]
                    }
                }
            ]
        }
    );
         
    return defaultConfig;
  };