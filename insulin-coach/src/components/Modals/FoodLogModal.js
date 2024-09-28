// src/components/FoodLogModal.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FoodLogModal = ({ show, handleClose }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        // Here you can call your food API with the search term
        console.log('Searching for:', searchTerm);
    };

    return (
        <div className={`modal ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }} aria-hidden={!show}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Log a Serving</h5>
                        <button type="button" className="close" onClick={handleClose} aria-label="Close">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search for food..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="btn btn-primary mt-2" onClick={handleSearch}>
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodLogModal;
