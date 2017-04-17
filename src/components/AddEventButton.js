import React from 'react';
import {Link} from 'react-router-dom';

const AddEventButton = () => {
    return (
        <Link to={{ pathname: `/addEvent` }}>
            <div className="add-task-button">
                &#65291; Add Event
            </div>
        </Link>
    );
};

export default AddEventButton;
