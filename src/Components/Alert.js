import React from 'react'

function Alert(props) {
    const { alertMssg } = props;

    return (
        <div className="alert alert-warning" role="alert" style={{ paddingLeft: '6rem' }}>
            {alertMssg}
        </div>
    )
}

export default Alert
