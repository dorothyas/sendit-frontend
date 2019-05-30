import React from 'react'

const Input = ({
    name, type, placeholder, className, value, onChange, maxLength,
}) => (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            className={className}
            value={value}
            onChange={onChange}
            maxLength={maxLength}
            required
        />
    );
export default Input;
