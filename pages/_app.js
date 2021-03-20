import "./styles/common.css"
import "./styles/colors.css"

import "./components/styles/Navbar.css"
import "./components/styles/Board.css"
import "./components/styles/Card.css"
import "./components/styles/Prompt.css"
import "./components/styles/alert.css"
import "./components/styles/listwindow.css"

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }