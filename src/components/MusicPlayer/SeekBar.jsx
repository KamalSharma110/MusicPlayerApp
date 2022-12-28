import React from "react";

const SeekBar = (props) => {

    const getMinutesSeconds = (seconds) => {
        if(!seconds) seconds = 0;
        const value = Math.ceil(seconds);
        return Math.floor(value/60) + ':' + (value % 60).toString().padStart(2,'0'); 
    };


    return (
        <div className="d-flex justify-content-between text-white">
            <span>{getMinutesSeconds(props.currentTime)}</span>
            <input type='range' className='w-75' />
            <span>{getMinutesSeconds(props.duration)}</span>
        </div>
    );
};

export default SeekBar;