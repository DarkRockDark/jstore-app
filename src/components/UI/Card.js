import "./Card.css";

function Card(props) {
  // classes are used to propogate classnames to children
  const classes = "card " + props.className;

  // wrapper component uses props.children to pass values from parent to
  // -now- children of Card
  return <div className={classes}>{props.children}</div>;
}

export default Card;
