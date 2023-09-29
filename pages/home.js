import styles from "../styles/Home.module.css";
import { Typography } from "@mui/material";

export default function HomePage() {
  return (
    <>
      <div className={styles.pageBody}>
        <div className={styles.pageContentContainer}>
          <Typography variant="h1" className={styles.header}>
            Home Page
          </Typography>
          <hr className={styles.hr} />
          <Typography variant="p" align="center" paragraph="false">
            This is the home page. It's a good place to start. Hopefully this
            makes me a better developer in the long term. I cannot stress how
            much I want to not be shit at this and I REALLY REALLY do not want
            to fail at this.
          </Typography>
          <div className={styles.mypic}>
            <img width={"200"} src="./me.jpg" />
          </div>
        </div>
      </div>
    </>
  );
}
