import React from 'react';
import moment from 'moment/moment';



const Videolength = ({time}) => {

    const videolengthinsec = moment().startOf("day").seconds(time).format("H:mm:ss");

    return <div className='absolute top-2 right-2 bg-black px-3 text-white text-5 rounded sm z-0'>
        {videolengthinsec}
    </div>;
}

export default Videolength;