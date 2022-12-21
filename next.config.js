module.exports = {
  future: {
    webpack5: true,
  },
  // fix hydration error with styled components
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/p24',
        destination: '/puzzle24',
        permanent: true,
      },
      {
        source: '/hex',
        destination: '/cardhex',
        permanent: true,
      }
    ]
  },
}