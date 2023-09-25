import Link from "next/link";
import styles from "../styles/NavComponent.module.css";
import React, { useState } from "react";

const NavComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className={styles.nav}>
      <button className={styles.menuButton} onClick={handleClick}>
        Menu
      </button>
      {modalOpen && (
        <div className="modal">
          <ul className="nav-links">
            <Link href="/">
              <p className={styles.link}>Home</p>
            </Link>
            <Link href="/ToDo">
              <p className={styles.link}>To Do</p>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavComponent;
