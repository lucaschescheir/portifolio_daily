import React, { Component } from 'react';

const Star = ({  star, props, onLeave, onSelect }) => {

        if(star) {
        return(
            <div  onMouseLeave={()=>onLeave()}>
                <span
                    onMouseOver={() => onSelect()}>
                    &#9733;
                </span>
            </div>
        )
    } else {
        return(
        <div  onMouseLeave={()=>onLeave()}>
            <span
                onMouseOver={() => onSelect()}>
                &#9734;
            </span>
        </div>

)
}
    }

 export default Star;
