import NavComponent from "@/components/NavComponent";
import FooterComponent from "@/components/FooterComponent";
import styles from "../../styles/Home.module.css";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

export default function HomePage() {
  return (
    <>
      <NavComponent />

      <div className={styles.pageBody}>
        <br />
        <div className={styles.pageContentContainer}>
          <Typography variant="h5" className={styles.header}>
            Portfolio <br />
          </Typography>
          <hr className={styles.hr} />
          <Accordion className={styles.accordion}>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{
                  fontSize: 24,
                  letterSpacing: "0em",
                  position: "relative",
                  margin: "auto",
                }}
              >
                Who I am
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <hr className={styles.details} />
              <Typography>
                My name is <b>Michael</b> and I am a software engineer. I have
                been coding professionally for nearly three years now.
              </Typography>
              <div className={styles.mypic}>
                <img width={"200"} src="./me.jpg" />
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion className={styles.accordion}>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{
                  fontSize: 24,
                  letterSpacing: "0em",
                  position: "relative",
                  margin: "auto",
                }}
              >
                What I do
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <hr className={styles.details} />
              <Typography>
                I primarily consider myself a fullstack developer. I have
                experience with React, Angular, Node, MongoDB, MySQL, C#
                (Blazor), and more.
                <br /> I also consider myself to be a good cook and enjoy being
                in the kitchen. In my free time I like to read fiction, play
                with my dog, and ride my motorcycle.
                <br /> I currently work at Washington University in St. Louis.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}
