import { Link } from "gatsby"
import React from "react"
import Container from "../container"

import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container size="large">
        <div className={styles.headerInner}>
          <h1>Header</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">About</Link></li>
              <li><Link to="/">Work</Link></li>
              <li><Link to="/">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Header
