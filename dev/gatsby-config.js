module.exports = {
  siteMetadata: {
      title: ``,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-netlify-cms", "gatsby-plugin-styled-components", "react-typing-effect", 
    {
    resolve: `gatsby-plugin-manifest`,
    options: {
      icon: 'src/images/pop.png'
    } }]
};