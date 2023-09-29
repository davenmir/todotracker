import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "../styles/NavComponent.module.css";
import Link from "next/link";

const pages = ["ToDo List", "Blog"];

function NavComponent() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar className={styles.topBar} disableGutters>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleOpenNavMenu}
            className={styles.iconButton}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            className={styles.menuBox}
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {pages.map((page) => (
              <Link href={page} passHref className={styles.links}>
                <MenuItem
                  className={styles.menuitems}
                  key={page}
                  onClick={handleCloseNavMenu}
                >
                  {page}
                </MenuItem>
              </Link>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavComponent;
