module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Vue-portfolio-v2/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/global.scss";
      `,
      },
    },
  },
};
