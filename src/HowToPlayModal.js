import React from "react";
import { Modal } from "react-bootstrap";
function HowToPlayModal( {show} ) {

    return (
        <Modal show={show} className="modal">
            <Modal.Header className="modal-content bg-light text-center font-monospace fs-3 fw-bold">How to Play</Modal.Header>
            
                <Modal.Body className="font-monospace fs-6">
                    The first time you click on a card, the countdown begins. Then, when you click a card it will flip over. 
                    Click a second card. If the pictures on the flipped cards match, they will disappear and you will earn points.
                    If they don't match, they will flip over again after a short time. Try to remember the locations of
                    the pictures you see, so that when you find its duplicate you can match them. You have 90 seconds
                    to match all the cards on the board, and you will lose some points every 15 seconds. Good luck!
                </Modal.Body>
            
        </Modal>
    )
}

export default HowToPlayModal;