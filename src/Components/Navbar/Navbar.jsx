import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Navbar.module.css';
import logoo from '../../assets/imgDogs/logoMaxMass.png'

const Navbar = ({handleChange,handleSubmit}) => {
  return (
    <nav className={styles.container}>
      
      <div className={styles.links}>
        <Link
        to="/"
        ><img  src={logoo} alt='Logo Max Mas' className={styles.logo} />
        </Link>
        <SearchBar handleChange={handleChange} handleSubmit={handleSubmit}  />
        <Link
          to="/home"
          className={styles.links}
        >
          Home
        </Link>
        <Link
          to="/create"
          className={styles.links}
        >
          Create
        </Link>
      </div>
      
    </nav>
  );
};

export default Navbar;