import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Navbar.module.css';


const Navbar = ({handleChange,handleSubmit}) => {
  return (
    <nav className={styles.container}>
      
      <div className={styles.links}>
        <Link
        to="/"
        ><h1>MaxMass</h1>
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