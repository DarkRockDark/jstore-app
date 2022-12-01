import ContactFooter from "./ContactFooter";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>
        {props.children}
      </main>
      <ContactFooter />
    </div>
  );
}

export default Layout;
