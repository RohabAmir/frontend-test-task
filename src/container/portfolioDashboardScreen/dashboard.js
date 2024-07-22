import React from 'react'
import styles from './style.module.css'
import NavBar from '../../components/NavBar/navBar'
import { ReactComponent as SearchIcon } from '../../../src/assets/icons/Search.svg'
import { ReactComponent as Magic } from '../../../src/assets/icons/MagicWand.svg'
import { ReactComponent as Arrow } from '../../../src/assets/icons/Vector.svg'


const Dashboard = () => {
  return (
    <div className={styles.container}>
        <NavBar/>
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1>Portfolio Dashboard</h1>
            <SearchIcon/>
          </div>
          <div className={styles.heroButton}>
              <div>
                <Magic />
                <h2>Ask AI assistance</h2>
                <Arrow />
              </div>
              <span>E.g.: ...</span>
          </div>
        </div>
    </div>
  )
}

export default Dashboard;
