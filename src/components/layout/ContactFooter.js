import classes from './ContactFooter.module.css';

function ContactFooter() {
  return (
    <footer className={classes.footer}>
      <nav>
        <ul>
          {/* <ul>
            <span>React Demo  </span>
          </ul> */}
          <ul>
            <a href="https://my.indeed.com/p/douglasr-yj5k93w" target="_blank" rel="noreferrer">Indeed contact</a>
          </ul>
        </ul>
      </nav>
    </footer>
  );
}

export default ContactFooter;
