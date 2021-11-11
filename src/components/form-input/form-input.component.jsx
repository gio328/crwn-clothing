import React from "react";
import './form-input.style.scss';

const FormInput = ({ name, label, value, handleChange, ...otherProps }) => {
    return(
        <div className='group'>
            <input className='form-input' onChange={handleChange} name={name} {...otherProps}></input>
            {label ? (
             <label
               className={`${
                value.length ? 'shrink' : ''
                 } form-input-label`}
             >
             {label}
             </label>
            ) : null}
            {/* <label className={`form-input-label
                ${value ? 'shrink' : null}
            `}>{label}</label> */}
        </div>
    );

}
export default FormInput;