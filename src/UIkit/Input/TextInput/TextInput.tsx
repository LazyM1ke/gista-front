import React from 'react';
import Typography from "../../Typography";

const TextInput = () => {
    return (
        <div className='text-input'>
            <Typography>Label</Typography>
            <input type="text"/>
            <Typography>hint text</Typography>
        </div>
    );
}

export default TextInput;