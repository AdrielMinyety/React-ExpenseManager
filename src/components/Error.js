import React from 'react';

const Error = ({mensaje}) => {
    return (
        <div className="alert alert-danger font-weight-bold">
            {mensaje}
        </div>
    )
}

export default Error;
