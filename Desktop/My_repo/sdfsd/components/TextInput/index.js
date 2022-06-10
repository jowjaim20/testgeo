import React from 'react';
import style from './index.module.scss';

const TextInput = (props) => {
  return (
    <React.Fragment>
      <label
        htmlFor={props.id}
        className='block text-sm font-medium text-gray-700'
      >
        {props.inputLabel && props.inputLabel}
      </label>
      <div className='mt-1'>
        <input
          className={`py-3 px-4 border border-gray-100 text-secondary-100 block w-full shadow-sm rounded-md ${style.input_style}`}
          type={props.inputProps.type}
          name={props.inputProps.name}
          id={props.inputProps.id}
          {...props.inputProps.form}
        />
        <div className='text-xs py-2 text-red-500'>
          {props.errorMessage && props.errorMessage}
        </div>
      </div>
    </React.Fragment>
  );
};

export default TextInput;
