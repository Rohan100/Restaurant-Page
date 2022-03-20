module.exports = {
    mode : 'development',
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.html$/,
          use: ["html-loader"],
        },
        {
          test : /\.(svg|png|jpg|gif)$/,
          use :{
            loader : "file-loader",
            options : {
              name : "[name].[hash].[ext]",
              outputPath : 'imgs'
            }
          }
        }
      ],
    },
  };