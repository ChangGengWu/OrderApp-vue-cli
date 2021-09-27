module.exports = {
  devServer: {
    proxy: "http://localhost:8080/orderApp/api",
    publicPath:
      process.env.NODE_ENV === "production" ? "/OrderApp-vue-cli/" : "/",
  },
};
