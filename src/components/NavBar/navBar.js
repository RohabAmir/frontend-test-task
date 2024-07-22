import React from 'react';
import styles from "./style.module.css";
import { ReactComponent as Avatar } from '../../../src/assets/icons/Avatar.svg';
import { ReactComponent as Logo } from '../../../src/assets/icons/InAI.svg';
import { ReactComponent as MenuIcon } from '../../../src/assets/icons/Humburger.svg';



const NavBar = () => {
  return (
    <div className={styles.nav}>
        <Avatar/>
        <Logo />
        <MenuIcon />
    </div>
  )
}

export default NavBar;
