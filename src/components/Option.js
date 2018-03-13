import React from 'react';

const Option = (props) => (
    <div>
        <span>{props.optionText}</span>
        <button
            className='button button--link'
            onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
        >
            Remove
        </button>
    </div>
);

export default Option;