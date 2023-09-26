import styles from "../styles/Home.module.css";

export default function HomePage() {

  

  return (
    <>
      <div className={styles.pageBody}>
        <h1 className={styles.header}>Home Page</h1>
        <hr className={styles.hr} />
        <p className={styles.paragraph}>
          This is the home page. It's a good place to start. Hopefully this
          makes me a better developer in the long term. I cannot stress how much
          I want to not be shit at this and I REALLY REALLY do not want to fail
          at this.
        </p>
        <div className={styles.mypic}>
          <img width={"200"} src="./me.jpg" />
        </div>
      </div>
    </>
  );
}
