import React from 'react';

function Reviews(props) {
    return (
        <div className="Reviews" id={`Reviews-${props.reviewNum}`}>
            <h4>Reviews</h4>
            <h1> {props.reviewNum}</h1>
        </div>
    );
}

export default Reviews;