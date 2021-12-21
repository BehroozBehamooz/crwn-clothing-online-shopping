import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ handleChange, lable, ...otherProps }) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps}/>
        <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
            {lable}
        </label>
    </div>
);

export default FormInput;