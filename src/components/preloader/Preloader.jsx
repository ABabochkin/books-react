import styles from "../preloader/preloader.module.scss";

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.preloaderSpinner}></div>
    </div>
  );
};

export default Preloader;
