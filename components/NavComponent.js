import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "../styles/NavComponent.module.css";
import Link from "next/link";

const pages = ["home", "todo", "blog"];

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
      <Toolbar sx={{ backgroundColor: "#4189e8" }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleOpenNavMenu}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          className={styles.menu}
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
        >
          {pages.map((page) => (
            <Link href={page} className={styles.links} passHref>
              <MenuItem
                key={page}
                className={styles.menuitems}
                onClick={handleCloseNavMenu}
              >
                {page.toUpperCase()}
              </MenuItem>
            </Link>
          ))}
        </Menu>
        <span className={styles.name}>Michael Davenport</span>
      </Toolbar>
    </AppBar>
  );
}
export default NavComponent;
