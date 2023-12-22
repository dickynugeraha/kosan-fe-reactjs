import NavbarApp from "../../components/common/NavbarApp";
import classes from "./NotFound.module.css";

const NotFound = () => {
  return (
    <>
      <NavbarApp />
      <div className={classes.errorpage}>
        <section className={classes["error-container"]}>
          <span>
            <span>4</span>
          </span>
          <span>0</span>
          <span>
            <span>4</span>
          </span>
        </section>
        <p className={`mb-0 ${classes.desc}`}>Uh oh! Looks like you got lost</p>
        <p className={`mb-0 ${classes.desc}`}>
          Go back to the homepage if you dare!
        </p>
      </div>
    </>
  );
};

export default NotFound;
