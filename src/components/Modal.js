function Modal(props) {

    // function cancelHandler() {
    //     // using function directly in Component below.
    //     props.onCancel();
    // }
    function confirmHandler() {
        props.onConfirm();
        console.log('function confirmHandler');
    }

    return (
        <div className="modal">
            <p>Are you sure?</p>
            <button className="btn btn-alt" onClick={props.onCancel}>Cancel</button>
            <button className="btn" onClick={confirmHandler}>Confirm</button>
        </div>
    );
}

export default Modal;