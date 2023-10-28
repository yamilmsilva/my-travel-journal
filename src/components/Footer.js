import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
        <small>
        Coded with ❤️ by{" "}
        <a
            className="footer--link"
            href="https://yamilsilva.com"
            target="_blank"
            rel="noreferrer"
        >
            Yamil Silva
        </a>
        .
        </small>
  </footer>
  )
}

export default Footer