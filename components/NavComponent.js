import Link from "next/link";
import styles from "../styles/NavComponent.module.css";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Button from '@mui/material/Button';

const NavComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();


  const handleClick = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className={styles.nav}>
      <Button  onClick={handleClick}>
        Menu
      </Button>
      {modalOpen && (
        <div className="modal">
          <ul className={styles.navlinks}>
            <Link href="/" onClick={() => router.push("/")}>
              <p className={styles.link}>Home</p>
            </Link>
            <Link href="/ToDo" onClick={() => router.push("/ToDo")}>
              <p className={styles.link}>To Do</p>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavComponent;
