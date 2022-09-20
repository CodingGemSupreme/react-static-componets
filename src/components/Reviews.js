import { PromiseProvider } from 'mongoose';
import React from 'react';

function Reviews (props) {
    return ( 
        <div className="Reviews" id ={`Reviews-${PromiseProvider.reviewNum}` }>
Reviews {props.reviewNum}
        </div>
    );
}

export default Reviews;