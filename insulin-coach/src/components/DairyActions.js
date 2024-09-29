// src/components/DiaryActions.js
import React, { useState } from 'react';
import FoodLogModal from './Modals/FoodLogModal.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const DiaryActions = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <div className="d-flex mb-2 align-items-center justify-content-between flex-wrap">
            <button type="button" className="btn btn-primary m-1" title="Log a serving to your diary" onClick={handleShow}>
                Log Serving
            </button>
            <button type="button" className="btn btn-primary m-1" title="Log an exercise to your diary">
                Log Exercise
            </button>
            <button type="button" className="btn btn-primary m-1" title="Log a biometric to your diary">
                Log Biometric
            </button>
            <button type="button" className="btn btn-primary m-1" title="Log a note to your diary">
                Log Note
            </button>
            <button type="button" className="btn btn-primary m-1" title="Log a fast to your diary">
                Log Fast
            </button>

            <FoodLogModal show={showModal} handleClose={handleClose} />
        </div>
    );
};

export default DiaryActions;
