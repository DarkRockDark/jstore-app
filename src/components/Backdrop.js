function Backdrop(props) {

    // instead of a function, we call the onClick from props directly
    return (
        <div className="backdrop" onClick={props.onClick}></div>
    );
}

export default Backdrop;