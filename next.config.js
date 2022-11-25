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
        source: '/p23',
        destination: '/puzzle23',
        permanent: true,
      },
    ]
  },
}