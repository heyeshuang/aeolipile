export default {
  install(Vue) {
    Vue.siteConfig = {
      //Put custom configs here
      apiUrl: "https://api.steemit.com",
      banner: "Aeolipile - Steem Powered",
      googleFonts: ['Neuton:200', 'Open Sans'],
      fallbackFontUrls: ['https://fonts.cat.net/css?family=Neuton:200|Open+Sans'],
    }
  }
}
