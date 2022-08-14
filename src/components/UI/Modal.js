import React, { Fragment } from "react";
import ReactDom from 'react-dom'
import classes from './Modal.module.css'

const Modal = (props) => {
    const Backdrop = (props) => {
        return (
            <div className={classes.backdrop}>

            </div>
        )
    };


    const ModalOverlay = (props) => {
        return (
            <div className={classes.modal}>
                <div className={classes.children}>
                    {props.children}
                </div>
            </div>
        )
    };

    return (
        <Fragment>
            {
                ReactDom.createPortal(<Backdrop />, document.getElementById("backdrop"))
            }

            {
                ReactDom.createPortal(
                    <ModalOverlay>
                        {props.children}
                    </ModalOverlay>,
                    document.getElementById("overlays"))
            }
        </Fragment>

    );
}

export default Modal;  