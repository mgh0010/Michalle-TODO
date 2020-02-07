module.exports = {
  transpileDependencies: [/node_modules(?:\/|\\)lit-element|lit-html/],
  pwa: {
    workboxOptions: {
      skipWaiting: true,
    },
  },
};